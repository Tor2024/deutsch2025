
"use client";

import type { Topic, VocabularyWord } from "@/lib/types";
import { generateAdaptiveExercise, AdaptiveExerciseOutput } from "@/ai/flows/adaptive-exercise-generation";
import { verifyAnswer } from "@/ai/flows/verify-answer";
import { assessSubjectMastery } from "@/ai/flows/assess-subject-mastery";
import { generateAudio } from "@/ai/flows/text-to-speech";
import { generateFeedback } from "@/ai/flows/generate-feedback";
import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Progress } from "./ui/progress";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { CheckCircle, Loader2, ThumbsUp, XCircle, BookOpen, BrainCircuit, Pencil, Volume2, Files, Sprout, ArrowRight, ArrowLeft, Move, SkipForward } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "./ui/card";
import { useUserProgress } from "@/hooks/use-user-progress";
import { curriculum } from "@/lib/data";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Feedback = {
  type: "correct" | "incorrect";
  message: string;
} | null;

type Exercise = {
    question: string;
    answer: string;
}

type SentenceConstructionExercise = {
    words: string[];
    correctSentence: string;
}

type Step = 'vocab-learning' | 'vocab-practicing' | 'reading' | 'comprehension' | 'grammar' | 'sentence-construction' | 'explanation' | 'mastered' | 'loading';


type ExerciseHistoryItem = {
    exercise: string;
    userAnswer: string;
    isCorrect: boolean;
};

type ExerciseEngineProps = {
    topic: Topic;
    onMastered: () => void;
}

export function ExerciseEngine({ topic, onMastered }: ExerciseEngineProps) {
  const [exerciseData, setExerciseData] = useState<AdaptiveExerciseOutput | null>(null);
  const [currentStep, setCurrentStep] = useState<Step>('loading');
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState<Feedback>(null);
  const { proficiency, setTopicProficiency } = useUserProgress(topic.id);
  const [exerciseHistory, setExerciseHistory] = useState<ExerciseHistoryItem[]>([]);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [finalFeedback, setFinalFeedback] = useState<string | null>(null);
  const router = useRouter();


  // Vocabulary state
  const allWords = useMemo(() => topic.vocabulary.flatMap(v => v.words), [topic.vocabulary]);
  const [shuffledVocabulary, setShuffledVocabulary] = useState<VocabularyWord[]>([]);
  const [vocabIndex, setVocabIndex] = useState(0);
  const [incorrectVocab, setIncorrectVocab] = useState<VocabularyWord[]>([]);
  const [vocabFeedback, setVocabFeedback] = useState<{type: 'correct' | 'incorrect', message: string} | null>(null);


  const [comprehensionExercises, setComprehensionExercises] = useState<Exercise[]>([]);
  const [grammarExercises, setGrammarExercises] = useState<Exercise[]>([]);
  const [sentenceConstructionExercises, setSentenceConstructionExercises] = useState<SentenceConstructionExercise[]>([]);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);

  useEffect(() => {
    if (allWords.length > 0) {
      setShuffledVocabulary([...allWords].sort(() => Math.random() - 0.5));
      setCurrentStep('vocab-learning');
    } else {
      startExerciseCycle();
    }
  }, [allWords]);


  const steps: { id: Step, name: string, icon: React.ElementType }[] = useMemo(() => [
    { id: 'vocab-learning', name: 'Слова', icon: Sprout },
    { id: 'vocab-practicing', name: 'Практика слов', icon: Files },
    { id: 'reading', name: 'Чтение', icon: BookOpen },
    { id: 'comprehension', name: 'Понимание', icon: BrainCircuit },
    { id: 'grammar', name: 'Грамматика', icon: Pencil },
    { id: 'sentence-construction', name: 'Построение фраз', icon: Move },
    { id: 'explanation', name: 'Объяснение', icon: BookOpen },
  ], []);

  const currentStepIndex = useMemo(() => steps.findIndex(s => s.id === currentStep), [steps, currentStep]);
  const currentVocabWord = shuffledVocabulary[vocabIndex];

  const handleSpeak = useCallback(async (text: string) => {
    if (isSpeaking || !text) return;
    setIsSpeaking(true);
    try {
      const cacheKey = `audio_cache_${text}`;
      let audioData = sessionStorage.getItem(cacheKey);

      if (!audioData) {
        console.log(`Audio for "${text}" not in cache. Generating...`);
        const { audio } = await generateAudio({ text });
        audioData = audio;
        sessionStorage.setItem(cacheKey, audioData);
      } else {
        console.log(`Audio for "${text}" found in cache.`);
      }

      const audioEl = new Audio(audioData);
      audioEl.play();
      audioEl.onended = () => setIsSpeaking(false);
      audioEl.onerror = () => {
        console.error("Audio playback error");
        setIsSpeaking(false);
      }
    } catch(e) {
      console.error(e)
      toast({title: "Ошибка", description: "Не удалось воспроизвести аудио.", variant: "destructive"})
      setIsSpeaking(false);
    }
  }, [isSpeaking, toast]);

  const startExerciseCycle = useCallback(async () => {
    setCurrentStep('loading');
    setFeedback(null);
    setUserAnswer('');
    setExerciseData(null);
    setIsSubmitting(false);
    setCurrentExerciseIndex(0);

    try {
      const currentLevel = curriculum.levels.find(level => level.topics.some(t => t.id === topic.id));
      const response = await generateAdaptiveExercise({
        grammarConcept: topic.title,
        userLevel: (currentLevel?.id.toUpperCase() as 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2') || 'A1',
        pastErrors: exerciseHistory.filter(e => !e.isCorrect).map(e => e.exercise).join(', '),
        exerciseHistory: exerciseHistory, // Pass current session history
        vocabulary: allWords.map(word => ({
          german: word.german,
          russian: word.russian,
          example: 'example' in word ? word.example : (word as any).exampleSingular,
        })),
      });
      setExerciseData(response);
      setComprehensionExercises(response.comprehensionExercises);
      setGrammarExercises(response.grammarExercises);
      setSentenceConstructionExercises(response.sentenceConstructionExercises || []);
      setCurrentStep('reading');

      // Generate audio in parallel
      handleSpeak(response.readingText);

    } catch (error) {
      console.error("Error starting exercise cycle:", error);
      toast({
        title: "Ошибка",
        description: "Не удалось загрузить упражнение. Попробуйте снова.",
        variant: "destructive",
      });
    }
  }, [topic.id, topic.title, exerciseHistory, toast, allWords, handleSpeak]);

  const addHistoryAndProficiency = (question: string, userAnswer: string, isCorrect: boolean) => {
    setExerciseHistory(prev => [...prev, { exercise: question, userAnswer, isCorrect }]);
    if(isCorrect) {
        setTopicProficiency(proficiency + 5);
    } else {
        setTopicProficiency(proficiency - 7);
    }
  }
  
  const handleSubmitExercise = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!exerciseData || !userAnswer || isSubmitting) return;

    setIsSubmitting(true);
    setFeedback(null);

    let currentExercise;
    let currentExercises: (Exercise | SentenceConstructionExercise)[] = [];

    if (currentStep === 'comprehension') {
        currentExercises = comprehensionExercises;
        currentExercise = comprehensionExercises[currentExerciseIndex];
    } else if (currentStep === 'grammar') {
        currentExercises = grammarExercises;
        currentExercise = grammarExercises[currentExerciseIndex];
    } else if (currentStep === 'sentence-construction') {
        currentExercises = sentenceConstructionExercises;
        currentExercise = sentenceConstructionExercises[currentExerciseIndex];
    }

    if (!currentExercise) return;

    const question = 'words' in currentExercise ? currentExercise.words.join(' / ') : currentExercise.question;
    const correctAnswer = 'correctSentence' in currentExercise ? currentExercise.correctSentence : currentExercise.answer;

    try {
      const verification = await verifyAnswer({
        question: question,
        userAnswer,
        correctAnswer: correctAnswer,
      });

      const isCorrect = verification.isCorrect;
      setFeedback({ type: isCorrect ? 'correct' : 'incorrect', message: verification.explanation });
      addHistoryAndProficiency(question, userAnswer, isCorrect);
      
      if (isCorrect) {
        setTimeout(() => {
            setFeedback(null);
            setUserAnswer('');
            if (currentExerciseIndex < currentExercises.length - 1) {
                setCurrentExerciseIndex(prev => prev + 1);
            } else {
                setCurrentExerciseIndex(0);
                if (currentStep === 'comprehension') setCurrentStep('grammar');
                else if (currentStep === 'grammar') {
                    if (sentenceConstructionExercises.length > 0) setCurrentStep('sentence-construction');
                    else setCurrentStep('explanation');
                }
                else if (currentStep === 'sentence-construction') setCurrentStep('explanation');
            }
        }, 3000);
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
        setIsSubmitting(true);
        try {
            const masteryResponse = await assessSubjectMastery({
                subject: topic.title,
                userProficiency: (proficiency) / 100,
                exerciseHistory: exerciseHistory.map(h => ({ exercise: h.exercise, correct: h.isCorrect })),
            });
            
            const feedbackResponse = await generateFeedback({
                topicTitle: topic.title,
                exerciseHistory: exerciseHistory.map(h => ({ exercise: h.exercise, correct: h.isCorrect })),
            });
            setFinalFeedback(feedbackResponse.feedback);
            

            if (masteryResponse.isMastered) {
                setTopicProficiency(100);
                setCurrentStep('mastered');
                onMastered();
                setExerciseHistory([]); // Clear history after mastering
            } else {
                // Don't clear history, so the next cycle can use it
                startExerciseCycle();
            }
        } catch (error) {
            console.error("Error in post-cycle phase:", error);
            // Fallback to just restart the cycle, but clear history to avoid loops
            setExerciseHistory([]);
            startExerciseCycle();
        } finally {
            setIsSubmitting(false);
        }
    }
  };

  const getNextTopic = () => {
      const currentLevel = curriculum.levels.find(level => level.topics.some(t => t.id === topic.id));
      if (!currentLevel) return null;

      const currentTopicIndex = currentLevel.topics.findIndex(t => t.id === topic.id);
      if (currentTopicIndex > -1 && currentTopicIndex < currentLevel.topics.length - 1) {
          const nextTopic = currentLevel.topics[currentTopicIndex + 1];
          return `/${currentLevel.id}/${nextTopic.id}`;
      }
      return null;
  }

  const nextTopicUrl = getNextTopic();

  // Vocab trainer logic
  const handleVocabNext = () => {
    if (vocabIndex < shuffledVocabulary.length - 1) {
      setVocabIndex(vocabIndex + 1);
    } else {
      setVocabIndex(0);
      setIncorrectVocab([]);
      setCurrentStep('vocab-practicing');
    }
  };

  const handleVocabPrev = () => {
    if (vocabIndex > 0) {
      setVocabIndex(vocabIndex - 1);
    }
  };

  const handleVocabCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userAnswer.trim() || isSubmitting) return;
    
    setIsSubmitting(true);
    setVocabFeedback(null);

    let correctAnswer = currentVocabWord.german;
    if (currentVocabWord.type === 'noun') {
      correctAnswer = `${currentVocabWord.article} ${currentVocabWord.german}`;
    }

    try {
        const verification = await verifyAnswer({
            question: `Как перевести "${currentVocabWord.russian}"? Если это существительное, укажите артикль.`,
            userAnswer: userAnswer,
            correctAnswer: correctAnswer,
        });

        setVocabFeedback({
            type: verification.isCorrect ? 'correct' : 'incorrect',
            message: verification.explanation,
        });

        if (!verification.isCorrect) {
            if (!incorrectVocab.some(v => v.german === currentVocabWord.german)) {
              setIncorrectVocab(prev => [...prev, currentVocabWord]);
            }
        }

        setTimeout(() => {
          setVocabFeedback(null);
          setUserAnswer('');
          if (vocabIndex < shuffledVocabulary.length - 1) {
            setVocabIndex(prev => prev + 1);
          } else {
            if (incorrectVocab.length > 0) {
              setShuffledVocabulary(incorrectVocab.sort(() => Math.random() - 0.5));
              setIncorrectVocab([]);
              setVocabIndex(0);
              toast({ title: "Повторение", description: "Давайте повторим слова, в которых вы ошиблись." });
            } else {
              startExerciseCycle();
            }
          }
        }, verification.isCorrect ? 2500 : 5000);

    } catch (error) {
        console.error("Error verifying vocab:", error);
        toast({ title: "Ошибка", description: "Не удалось проверить ответ.", variant: "destructive" });
    } finally {
        setIsSubmitting(false);
    }
  };


  const renderContent = () => {
    if (currentStep === 'loading') return null;

    const getGermanDisplay = (word: VocabularyWord) => {
      if (word.type === 'noun') {
        return `${word.article} ${word.german}`;
      }
      return word.german;
    }

    switch (currentStep) {
      case 'vocab-learning':
        if (!currentVocabWord) return null;
        return (
            <Card className="min-h-[250px] flex flex-col">
                <CardHeader>
                    <CardTitle className="text-4xl font-bold text-center flex items-center justify-center gap-4">
                        {getGermanDisplay(currentVocabWord)}
                        <Button variant="ghost" size="icon" onClick={() => handleSpeak(currentVocabWord.german)} disabled={isSpeaking}>
                            {isSpeaking ? <Loader2 className="animate-spin" /> : <Volume2 />}
                        </Button>
                    </CardTitle>
                    <CardDescription className="text-center text-lg">{currentVocabWord.russian}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex items-center justify-center">
                    <p className="text-center text-muted-foreground italic text-lg">«{'example' in currentVocabWord ? currentVocabWord.example : (currentVocabWord as any).exampleSingular}»</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={handleVocabPrev} disabled={vocabIndex === 0}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Назад
                    </Button>
                    <Button onClick={handleVocabNext}>
                    {vocabIndex === shuffledVocabulary.length - 1 ? 'К практике' : 'Далее'} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </CardFooter>
            </Card>
        );

      case 'vocab-practicing':
        if (!currentVocabWord) return null;
        return (
            <Card className="min-h-[300px] flex flex-col justify-between">
                <CardHeader>
                    <CardTitle className="text-center text-2xl">Напишите перевод (с артиклем):</CardTitle>
                    <CardDescription className="text-center text-4xl font-bold">{currentVocabWord.russian}</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleVocabCheck} className="flex gap-2 items-center">
                        <Input
                            type="text"
                            placeholder="Ответ на немецком..."
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                            disabled={!!vocabFeedback || isSubmitting}
                            className="text-lg h-12"
                            autoCapitalize="none"
                            autoCorrect="off"
                        />
                        <Button type="submit" size="lg" disabled={!!vocabFeedback || !userAnswer.trim() || isSubmitting}>
                            {isSubmitting ? <Loader2 className="animate-spin" /> : 'Проверить'}
                        </Button>
                    </form>
                    {vocabFeedback && (
                        <Alert variant={vocabFeedback.type === 'correct' ? 'default' : 'destructive'} className="mt-4">
                            {vocabFeedback.type === 'correct' ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                            <AlertTitle>{vocabFeedback.type === 'correct' ? 'Верно!' : 'Обратите внимание'}</AlertTitle>
                            <AlertDescription className="prose prose-sm max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: vocabFeedback.message }} />
                        </Alert>
                    )}
                </CardContent>
                <CardFooter>
                    <Progress value={((vocabIndex + 1) / shuffledVocabulary.length) * 100} className="w-full"/>
                </CardFooter>
            </Card>
        );

      case 'reading':
        if (!exerciseData) return null;
        return (
          <Card>
            <CardHeader><CardTitle>Прочитайте и прослушайте текст</CardTitle></CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">{exerciseData.readingText}</p>
              <div className="mt-4 flex gap-4">
                <Button onClick={() => handleSpeak(exerciseData.readingText)} disabled={isSpeaking}>
                    {isSpeaking ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Volume2 className="mr-2 h-4 w-4" />}
                    Прослушать
                </Button>
                <Button onClick={handleContinue}>Продолжить</Button>
              </div>
            </CardContent>
          </Card>
        );
      case 'comprehension':
      case 'grammar':
      case 'sentence-construction':
        let currentExercise, currentExercisesList;
        let title = '';
        if (currentStep === 'comprehension') {
            currentExercisesList = comprehensionExercises;
            title = 'Ответьте на вопрос (на немецком)';
        } else if (currentStep === 'grammar') {
            currentExercisesList = grammarExercises;
            title = 'Заполните пропуск (на немецком)';
        } else {
            currentExercisesList = sentenceConstructionExercises;
            title = 'Составьте предложение из слов';
        }
        currentExercise = currentExercisesList[currentExerciseIndex];
        
        return (
          <Card>
            <CardHeader>
                <div className="flex justify-between items-center">
                    <CardTitle>{title}</CardTitle>
                    <span className="text-sm font-medium text-muted-foreground">
                        {currentExerciseIndex + 1} / {currentExercisesList.length}
                    </span>
                </div>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-foreground mb-4">
                {currentStep === 'sentence-construction' && currentExercise ? (
                    <p className="font-bold tracking-wider">{(currentExercise as SentenceConstructionExercise).words.join(' / ')}</p>
                ) : (currentExercise as Exercise)?.question}
              </div>

              <form onSubmit={handleSubmitExercise} className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Введите ваш ответ на немецком..."
                  className="flex-grow"
                  disabled={isSubmitting || !!feedback}
                  autoCapitalize="none"
                  autoCorrect="off"
                />
                <Button type="submit" disabled={isSubmitting || !userAnswer || !!feedback}>
                  {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Проверить'}
                </Button>
              </form>
            </CardContent>
          </Card>
        );
      case 'explanation':
          if (!exerciseData) return null;
          return (
            <Card>
              <CardHeader><CardTitle>Объяснение правила</CardTitle></CardHeader>
              <CardContent>
                <div className="prose prose-lg max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: exerciseData.explanation }} />
                <Button onClick={handleContinue} className="mt-4" disabled={isSubmitting}>
                   {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Следующий цикл'}
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
        <CardHeader>
            <CardTitle className="text-center">
                <ThumbsUp className="mx-auto h-16 w-16 text-green-500 bg-green-100 rounded-full p-3 mb-4" />
                <h3 className="text-2xl font-bold text-foreground font-headline">Тема освоена!</h3>
            </CardTitle>
            <CardDescription className="text-center">Отличная работа! Вы продемонстрировали уверенное понимание этой темы.</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          {finalFeedback && (
             <Alert className="mt-4 text-left">
                <BrainCircuit className="h-4 w-4" />
                <AlertTitle>Персональный отзыв от AI-тренера</AlertTitle>
                <AlertDescription className="prose prose-sm max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: finalFeedback }} />
            </Alert>
          )}
        </CardContent>
        <CardFooter>
            {nextTopicUrl && (
                <Button asChild className="w-full">
                    <Link href={nextTopicUrl}>
                        Перейти к следующей теме <SkipForward className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            )}
        </CardFooter>
      </Card>
    )
  }
  
  const getProgress = () => {
    if (currentStep === 'vocab-learning' || currentStep === 'vocab-practicing') {
      return (vocabIndex / shuffledVocabulary.length) * 100;
    }
    // A simple approximation of progress for grammar part
    const grammarStepsTotal = (comprehensionExercises.length + grammarExercises.length);
    const grammarStepsDone = (currentStep === 'comprehension' ? 0 : comprehensionExercises.length) + currentExerciseIndex;
    if (currentStep === 'reading' || currentStep === 'explanation') return 0; // Or some other logic
    if(grammarStepsTotal === 0) return 0;
    return (grammarStepsDone/grammarStepsTotal) * 100;
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

      {feedback && currentStep !== 'vocab-learning' && currentStep !== 'vocab-practicing' && (
        <Alert variant={feedback.type === 'incorrect' ? 'destructive' : 'default'} className="mt-4">
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

    