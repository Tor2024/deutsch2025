
'use client';

import { curriculum } from '@/lib/data';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen } from 'lucide-react';
import Image from 'next/image';
import {
  getLevelImage,
} from '@/lib/placeholder-images';
import { useUserProgress } from '@/hooks/use-user-progress';

export default function DashboardPage() {
  const { getTopicProficiency } = useUserProgress();
  
  const calculateLevelProgress = (levelId: string) => {
    const level = curriculum.levels.find(l => l.id === levelId);
    if (!level || level.topics.length === 0) {
      return 0;
    }
    const totalProficiency = level.topics.reduce((sum, topic) => {
      return sum + (getTopicProficiency(topic.id) || 0);
    }, 0);
    return Math.round(totalProficiency / level.topics.length);
  };

  return (
    <div className="container mx-auto py-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline">
          DeutschWelle AI
        </h1>
        <p className="mt-3 text-lg text-muted-foreground sm:text-xl">
          Ваш персональный путь к овладению немецким языком
        </p>
      </header>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {curriculum.levels.map((level) => {
          const levelImage = getLevelImage(level.id);
          const levelProgress = calculateLevelProgress(level.id);
          return (
            <Card
              key={level.id}
              className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            >
              <CardHeader className="relative h-48 w-full">
                {levelImage && (
                  <Image
                    src={levelImage.imageUrl}
                    alt={levelImage.description}
                    data-ai-hint={levelImage.imageHint}
                    fill
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <CardTitle className="text-2xl font-bold text-primary-foreground font-headline">
                    {level.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardDescription>{level.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4 p-6 pt-0">
                <div className="w-full">
                  <div className="mb-2 flex justify-between text-sm text-muted-foreground">
                    <span>Прогресс</span>
                    <span>{levelProgress}%</span>
                  </div>
                  <Progress value={levelProgress} />
                </div>
                <Button asChild className="w-full" variant="default">
                  <Link href={`/${level.id}`}>
                    <BookOpen className="mr-2 h-4 w-4" />
                    Начать обучение
                    <ArrowRight className="ml-auto h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
