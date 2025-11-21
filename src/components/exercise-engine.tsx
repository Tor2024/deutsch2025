
"use client";

import type { Topic } from "@/lib/types";
import { generateAdaptiveExercise, AdaptiveExerciseOutput } from "@/ai/flows/adaptive-exercise-generation";
import { verifyAnswer } from "@/ai/flows/verify-answer";
import { assessSubjectMastery } from "@/ai/flows/assess-subject-mastery";
import { useState, useEffect, useMemo } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Progress } from "./ui/progress";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { CheckCircle, Loader2, RefreshCw, ThumbsUp, XCircle, BookOpen, BrainCircuit, Pencil } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useUserProgress } from "@/hooks/use-user-progress";

type Feedback = {
  type: "correct" | "incorrect";
  message: string;
} | null;

type Step = 'reading' | 'comprehension' | 'grammar' | 'explanation' | 'mastered' | 'loading';

type ExerciseHistoryItem = {
    exercise: string;
    correct: boolean;
};

export function ExerciseEngine({ topic }: { topic: Topic }) {
  const [exerciseData, setExerciseData] = useState<AdaptiveExerciseOutput | null>(null);
  const [currentStep, setCurrentStep] = useState<Step>('loading');
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState<Feedback>(null);
  const { proficiency, setTopicProficiency } = useUserProgress(topic.id);
  const [exerciseHistory, setExerciseHistory] = useState<ExerciseHistoryItem[]>([]);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const steps: { id: Step, name: string, icon: React.ElementType }[] = useMemo(() => [
    { id: 'reading', name: 'Чтение', icon: BookOpen },
    { id: 'comprehension', name: 'Понимание', icon: BrainCircuit },
    { id: 'grammar', name: 'Грамматика', icon: Pencil },
    { id: 'explanation', name: 'Объяснение', icon: BookOpen },
  ], []);

  const currentStepIndex = useMemo(() => steps.findIndex(s => s.id === currentStep), [steps, currentStep]);

  const startExerciseCycle = async () => {
    setCurrentStep('loading');
    setFeedback(null);
    setUserAnswer('');
    setExerciseData(null);
    setIsSubmitting(false);

    try {
      const response = await generateAdaptiveExercise({
        grammarConcept: topic.title,
        userLevel: 'A1', // This should be dynamic based on topic.id or user profile
        pastErrors: exerciseHistory.filter(e => !e.correct).map(e => e.exercise).join(', '),
      });
      setExerciseData(response);
      setCurrentStep('reading');
    } catch (error) {
      console.error("Error starting exercise cycle:", error);
      toast({
        title: "Ошибка",
        description: "Не удалось загрузить упражнение. Попробуйте снова.",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    startExerciseCycle();
  }, [topic.id]);

  const addHistoryAndProficiency = (question: string, isCorrect: boolean) => {
    setExerciseHistory(prev => [...prev, { exercise: question, correct: isCorrect }]);
    if(isCorrect) {
        setTopicProficiency(proficiency + 15);
    } else {
        setTopicProficiency(proficiency - 10);
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!exerciseData || !userAnswer || isSubmitting) return;

    setIsSubmitting(true);
    setFeedback(null);

    let question = '';
    let correctAnswer = '';

    if (currentStep === 'comprehension') {
      question = exerciseData.comprehensionQuestion;
      correctAnswer = exerciseData.comprehensionAnswer;
    } else if (currentStep === 'grammar') {
      question = exerciseData.fillInTheBlankExercise;
      correctAnswer = exerciseData.fillInTheBlankAnswer;
    }

    try {
      const verification = await verifyAnswer({
        question,
        userAnswer,
        correctAnswer,
      });

      const isCorrect = verification.isCorrect;
      setFeedback({ type: isCorrect ? 'correct' : 'incorrect', message: verification.explanation });
      addHistoryAndProficiency(question, isCorrect);
      
      if (isCorrect) {
        // Wait for a moment to show feedback, then move to next step
        setTimeout(() => {
            setFeedback(null);
            setUserAnswer('');
            if (currentStep === 'comprehension') {
                setCurrentStep('grammar');
            } else if (currentStep === 'grammar') {
                setCurrentStep('explanation');
            }
        }, 2000);
      }
    } catch (error) {
      console.error("Error submitting answer:", error);
      toast({
        title: "Ошибка",
        description: "Не удалось проверить ответ. Попробуйте снова.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleContinue = async () => {
    setFeedback(null);
    setUserAnswer('');
    if (currentStep === 'reading') {
        setCurrentStep('comprehension');
    } else if (currentStep === 'explanation') {
        const masteryResponse = await assessSubjectMastery({
            subject: topic.title,
            userProficiency: (proficiency + 15) / 100, // check with new proficiency
            exerciseHistory,
        });

        if (masteryResponse.isMastered) {
            setTopicProficiency(100);
            setCurrentStep('mastered');
        } else {
            startExerciseCycle();
        }
    }
  };

  const renderContent = () => {
    if (!exerciseData) return null;

    switch (currentStep) {
      case 'reading':
        return (
          <Card>
            <CardHeader><CardTitle>1. Прочитайте текст</CardTitle></CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">{exerciseData.readingText}</p>
              <Button onClick={handleContinue} className="mt-4">Продолжить</Button>
            </CardContent>
          </Card>
        );
      case 'comprehension':
      case 'grammar':
        const isComprehension = currentStep === 'comprehension';
        const title = isComprehension ? '2. Ответьте на вопрос' : '3. Заполните пропуск';
        const question = isComprehension ? exerciseData.comprehensionQuestion : exerciseData.fillInTheBlankExercise;
        return (
          <Card>
            <CardHeader><CardTitle>{title}</CardTitle></CardHeader>
            <CardContent>
              <p className="text-lg text-foreground mb-4">{question}</p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Введите ваш ответ..."
                  className="flex-grow"
                  disabled={isSubmitting || !!feedback}
                />
                <Button type="submit" disabled={isSubmitting || !userAnswer || !!feedback}>
                  {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Проверить'}
                </Button>
              </form>
            </CardContent>
          </Card>
        );
      case 'explanation':
          return (
            <Card>
              <CardHeader><CardTitle>4. Объяснение правила</CardTitle></CardHeader>
              <CardContent>
                <div className="prose prose-lg max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: exerciseData.explanation }} />
                <Button onClick={handleContinue} className="mt-4" disabled={isSubmitting}>
                   {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Продолжить'}
                </Button>
              </CardContent>
            </Card>
          );
      default:
        return null;
    }
  };

  if (currentStep === 'loading') {
    return (
      <div className="flex flex-col items-center justify-center text-center p-8">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="mt-4 text-muted-foreground">ИИ-тренер готовит ваше задание...</p>
      </div>
    );
  }

  if (currentStep === 'mastered') {
    return (
      <Card className="bg-gradient-to-br from-primary/10 to-transparent">
        <CardContent className="p-6 text-center">
          <ThumbsUp className="mx-auto h-16 w-16 text-green-500 bg-green-100 rounded-full p-3 mb-4" />
          <h3 className="text-2xl font-bold text-foreground font-headline">Тема освоена!</h3>
          <p className="mt-2 text-muted-foreground">Отличная работа! Вы продемонстрировали уверенное понимание этой темы. <br /> Можно переходить к следующей или повторить материал.</p>
          <Button onClick={() => { setTopicProficiency(0); setExerciseHistory([]); startExerciseCycle(); }} className="mt-6">
            <RefreshCw className="mr-2 h-4 w-4" />
            Пройти заново
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <ol className="flex items-center w-full">
          {steps.map((step, index) => (
            <li key={step.id} className={`flex w-full items-center ${index < steps.length - 1 ? "after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block" : ""} ${index <= currentStepIndex ? 'text-primary after:border-primary' : 'text-muted-foreground after:border-muted'}`}>
                <span className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 ${index <= currentStepIndex ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                    <step.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                </span>
            </li>
          ))}
        </ol>
      </div>
      
      <div>
        <div className="flex justify-between items-center mb-2">
          <label htmlFor="mastery" className="text-sm font-medium text-muted-foreground">Уровень освоения</label>
          <span className="text-sm font-bold text-primary">{proficiency}%</span>
        </div>
        <Progress value={proficiency} id="mastery" />
      </div>

      {renderContent()}

      {feedback && (
        <Alert variant={feedback.type === 'incorrect' ? 'destructive' : 'default'}>
          {feedback.type === 'correct' ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
          <AlertTitle className="font-headline">
            {feedback.type === 'correct' ? 'Правильно!' : 'Обратите внимание'}
          </AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: feedback.message }} />
        </Alert>
      )}
    </div>
  );
}

    