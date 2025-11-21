
"use client";

import type { Topic } from "@/lib/types";
import { assessSubjectMastery } from "@/ai/flows/assess-subject-mastery";
import { generateAdaptiveExercise } from "@/ai/flows/adaptive-exercise-generation";
import { verifyAnswer } from "@/ai/flows/verify-answer";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Progress } from "./ui/progress";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { CheckCircle, Loader2, RefreshCw, Sparkles, ThumbsUp, XCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "./ui/card";
import { useUserProgress } from "@/hooks/use-user-progress";

type ExerciseState = {
  exercise: string;
  isMastered: boolean;
  correctAnswer: string;
};

type Feedback = {
  type: "correct" | "incorrect";
  message: string;
} | null;

type ExerciseHistoryItem = {
  exercise: string;
  correct: boolean;
};

export function ExerciseEngine({ topic }: { topic: Topic }) {
  const [exerciseState, setExerciseState] = useState<ExerciseState | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState<Feedback>(null);
  const { proficiency, setTopicProficiency } = useUserProgress(topic.id);
  const [exerciseHistory, setExerciseHistory] = useState<ExerciseHistoryItem[]>([]);
  const { toast } = useToast();

  const startFirstExercise = async () => {
    setIsLoading(true);
    setFeedback(null);
    setExerciseState(null);
    setTopicProficiency(0);
    setExerciseHistory([]);
    try {
      const response = await generateAdaptiveExercise({
        grammarConcept: topic.title,
        userLevel: 'A1', // This should be dynamic
        pastErrors: "N/A",
      });
      setExerciseState({
          exercise: response.exerciseText,
          correctAnswer: response.correctAnswer,
          isMastered: false,
      });
    } catch (error) {
      console.error("Error starting exercise:", error);
      toast({
        title: "Ошибка",
        description: "Не удалось загрузить упражнение. Попробуйте снова.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    startFirstExercise();
  }, [topic.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!exerciseState || !userAnswer) return;

    setIsLoading(true);
    setFeedback(null);

    try {
        const verification = await verifyAnswer({
            question: exerciseState.exercise,
            userAnswer: userAnswer,
            correctAnswer: exerciseState.correctAnswer,
        });

        const isCorrect = verification.isCorrect;
        const explanation = verification.explanation;

        const newHistoryItem = { exercise: exerciseState.exercise, correct: isCorrect };
        setExerciseHistory(prev => [...prev, newHistoryItem]);

        const newProficiency = proficiency + (isCorrect ? 10 : -5);
        setTopicProficiency(newProficiency);

        if (!isCorrect) {
            setFeedback({ type: 'incorrect', message: explanation });
            const adaptiveResponse = await generateAdaptiveExercise({
                grammarConcept: topic.title,
                userLevel: 'A1', // This should be dynamic
                pastErrors: `User answered '${userAnswer}' to the question: '${exerciseState.exercise}'. The explanation for the error was: ${explanation}`,
            });
            setExerciseState({
                exercise: adaptiveResponse.exerciseText,
                correctAnswer: adaptiveResponse.correctAnswer,
                isMastered: false, // isMastered will be checked below
            });
        } else {
             setFeedback({ type: 'correct', message: explanation });
        }

        const nextExerciseResponse = await assessSubjectMastery({
            subject: topic.title,
            userProficiency: newProficiency / 100,
            exerciseHistory: [...exerciseHistory, newHistoryItem],
        });
        
        // If mastered, show completion screen. Otherwise, get a new question.
        if (nextExerciseResponse.isMastered) {
             setExerciseState(prev => prev ? {...prev, isMastered: true} : { exercise: '', correctAnswer: '', isMastered: true });
        } else {
            const newExercise = await generateAdaptiveExercise({
                grammarConcept: topic.title,
                userLevel: 'A1',
                pastErrors: JSON.stringify(exerciseHistory)
            });
            setExerciseState({
                exercise: newExercise.exerciseText,
                correctAnswer: newExercise.correctAnswer,
                isMastered: false
            });
        }

    } catch (error) {
        console.error("Error submitting answer:", error);
        toast({
            title: "Ошибка",
            description: "Не удалось проверить ответ. Попробуйте снова.",
            variant: "destructive",
        });
    } finally {
        setUserAnswer("");
        setIsLoading(false);
    }
  };


  if (isLoading && !exerciseState) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-8">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="mt-4 text-muted-foreground">ИИ-тренер готовит ваше первое задание...</p>
      </div>
    );
  }

  if (exerciseState?.isMastered) {
    return (
      <Card className="bg-gradient-to-br from-primary/10 to-transparent">
        <CardContent className="p-6 text-center">
            <ThumbsUp className="mx-auto h-16 w-16 text-green-500 bg-green-100 rounded-full p-3 mb-4"/>
            <h3 className="text-2xl font-bold text-foreground font-headline">Тема освоена!</h3>
            <p className="mt-2 text-muted-foreground">Отличная работа! Вы продемонстрировали уверенное понимание этой темы. <br/> Можно переходить к следующей или повторить материал.</p>
            <Button onClick={startFirstExercise} className="mt-6">
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
            <div className="flex justify-between items-center mb-2">
                <label htmlFor="mastery" className="text-sm font-medium text-muted-foreground">Уровень освоения</label>
                <span className="text-sm font-bold text-primary">{proficiency}%</span>
            </div>
            <Progress value={proficiency} id="mastery" />
        </div>

        <Card>
            <CardContent className="p-6">
                <p className="text-lg text-foreground mb-4">{exerciseState?.exercise}</p>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                    <Input
                        type="text"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        placeholder="Введите ваш ответ..."
                        className="flex-grow"
                        disabled={isLoading}
                    />
                    <Button type="submit" disabled={isLoading || !userAnswer}>
                        {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Проверить'}
                    </Button>
                </form>
            </CardContent>
        </Card>

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
