
"use client";

import { useState, useEffect, useMemo } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { ArrowLeft, ArrowRight, Check, CheckCircle, HelpCircle, RefreshCw, ThumbsUp, Volume2, X, XCircle } from 'lucide-react';
import { Progress } from './ui/progress';
import { cn } from '@/lib/utils';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

type Vocabulary = {
  german: string;
  russian: string;
  example: string;
};

type Feedback = {
  type: 'correct' | 'incorrect';
  correctAnswer: string;
} | null;

type Stage = 'learning' | 'practicing' | 'finished';

export function VocabularyTrainer({ vocabulary }: { vocabulary: Vocabulary[] }) {
  const [shuffledVocabulary, setShuffledVocabulary] = useState<Vocabulary[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState<Feedback>(null);
  const [stage, setStage] = useState<Stage>('learning');
  const [incorrectAnswers, setIncorrectAnswers] = useState<Vocabulary[]>([]);

  useEffect(() => {
    setShuffledVocabulary([...vocabulary].sort(() => Math.random() - 0.5));
  }, [vocabulary]);

  const currentWord = shuffledVocabulary[currentIndex];
  const progress = Math.round(((currentIndex) / shuffledVocabulary.length) * 100);

  const handleNext = () => {
    if (currentIndex < shuffledVocabulary.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setStage('practicing');
      setCurrentIndex(0);
      setIncorrectAnswers([]); // Reset for practice round
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  
  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userAnswer.trim()) return;

    const isCorrect = userAnswer.trim().toLowerCase() === currentWord.german.toLowerCase();
    
    if (isCorrect) {
      setFeedback({ type: 'correct', correctAnswer: currentWord.german });
    } else {
      setFeedback({ type: 'incorrect', correctAnswer: currentWord.german });
      if (!incorrectAnswers.some(v => v.german === currentWord.german)) {
        setIncorrectAnswers(prev => [...prev, currentWord]);
      }
    }
    
    setTimeout(() => {
      setFeedback(null);
      setUserAnswer('');
      if (currentIndex < shuffledVocabulary.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        // End of practice round, check if there are words to repeat
        if (incorrectAnswers.length > 0) {
          setShuffledVocabulary(incorrectAnswers.sort(() => Math.random() - 0.5));
          setIncorrectAnswers([]);
          setCurrentIndex(0);
          setStage('practicing');
        } else {
          setStage('finished');
        }
      }
    }, 2500);
  };

  const handleRestart = () => {
    setShuffledVocabulary([...vocabulary].sort(() => Math.random() - 0.5));
    setCurrentIndex(0);
    setUserAnswer('');
    setFeedback(null);
    setIncorrectAnswers([]);
    setStage('learning');
  };

  if (!shuffledVocabulary.length) {
    return <p>Слова для тренировки не найдены.</p>;
  }

  if (stage === 'finished') {
    return (
      <div className="flex flex-col items-center justify-center text-center p-8 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
        <ThumbsUp className="h-12 w-12 text-green-600 mb-4" />
        <h3 className="text-xl font-bold font-headline">Отличная работа!</h3>
        <p className="text-muted-foreground mt-2">Все слова успешно повторены. Можно переходить к грамматике.</p>
        <Button onClick={handleRestart} className="mt-6">
          <RefreshCw className="mr-2 h-4 w-4" />
          Повторить слова
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-sm font-medium text-muted-foreground">
          {stage === 'learning' ? 'Этап 1: Изучение' : `Этап 2: Практика (${incorrectAnswers.length > 0 ? 'Работа над ошибками' : 'Закрепление'})`}
        </h4>
        <span className="text-sm font-bold text-primary">{currentIndex + 1} / {shuffledVocabulary.length}</span>
      </div>
      <Progress value={progress} />

      {stage === 'learning' ? (
        <Card className="min-h-[250px] flex flex-col">
          <CardHeader>
            <CardTitle className="text-4xl font-bold text-center">{currentWord.german}</CardTitle>
            <CardDescription className="text-center text-lg">{currentWord.russian}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow flex items-center justify-center">
            <p className="text-center text-muted-foreground italic text-lg">«{currentWord.example}»</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handlePrev} disabled={currentIndex === 0}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Назад
            </Button>
            <Button onClick={handleNext}>
              {currentIndex === shuffledVocabulary.length - 1 ? 'К практике' : 'Далее'} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Card className="min-h-[250px] flex flex-col justify-between">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Напишите перевод:</CardTitle>
            <CardDescription className="text-center text-4xl font-bold">{currentWord.russian}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCheck} className="flex gap-2">
              <Input
                type="text"
                placeholder="Ответ на немецком..."
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                disabled={!!feedback}
                className="text-lg h-12"
              />
              <Button type="submit" size="lg" disabled={!!feedback || !userAnswer.trim()}>Проверить</Button>
            </form>
            {feedback && (
              <Alert variant={feedback.type === 'correct' ? 'default' : 'destructive'} className="mt-4">
                 {feedback.type === 'correct' ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                <AlertTitle>{feedback.type === 'correct' ? 'Верно!' : 'Ошибка!'}</AlertTitle>
                <AlertDescription>
                  Правильный ответ: <strong className="font-bold">{feedback.correctAnswer}</strong>
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      )}

    </div>
  );
}

