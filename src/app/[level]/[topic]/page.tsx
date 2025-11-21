
import { curriculum } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Book, Bot, Sparkles, Sprout, GraduationCap } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ExerciseEngine } from '@/components/exercise-engine';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

type TopicPageProps = {
  params: {
    level: string;
    topic: string;
  };
};

export async function generateStaticParams() {
    const paths: { level: string; topic: string }[] = [];
    curriculum.levels.forEach(level => {
        level.topics.forEach(topic => {
            paths.push({ level: level.id, topic: topic.id });
        });
    });
    return paths;
}


export default function TopicPage({ params }: TopicPageProps) {
  const level = curriculum.levels.find((l) => l.id === params.level);
  const topic = level?.topics.find((t) => t.id === params.topic);

  if (!level || !topic) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-4xl py-8">
      <div className="mb-8">
        <Link href={`/${level.id}`} className="text-sm text-primary hover:underline">
          &larr; Назад к темам уровня {level.title}
        </Link>
        <h1 className="mt-2 text-4xl font-bold font-headline">{topic.title}</h1>
      </div>

      <div className="space-y-12">
        {/* Vocabulary Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="flex-shrink-0 rounded-full bg-primary/10 p-3 text-primary">
                <Sprout className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold font-headline">1. Словарь темы</h2>
                <p className="text-sm font-normal text-muted-foreground">Начните с изучения основных слов и фраз</p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {topic.vocabulary.length > 0 ? (
              topic.vocabulary.map((vocabTheme, index) => (
                <div key={index} className="mb-6 last:mb-0">
                    <h3 className="mb-4 text-xl font-semibold">{vocabTheme.theme}</h3>
                    <div className="overflow-hidden rounded-md border">
                      <Table>
                          <TableHeader>
                          <TableRow>
                              <TableHead className="w-[30%]">Немецкий</TableHead>
                              <TableHead className="w-[30%]">Русский</TableHead>
                              <TableHead>Пример</TableHead>
                          </TableRow>
                          </TableHeader>
                          <TableBody>
                          {vocabTheme.words.map((word, i) => (
                              <TableRow key={i}>
                                  <TableCell className="font-medium">{word.german}</TableCell>
                                  <TableCell>{word.russian}</TableCell>
                                  <TableCell className="italic text-muted-foreground">{word.example}</TableCell>
                              </TableRow>
                          ))}
                          </TableBody>
                      </Table>
                    </div>
                </div>
              ))
            ) : (
                <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/30 bg-muted/20 p-12 text-center">
                    <h2 className="text-xl font-semibold text-muted-foreground">Словарь пуст</h2>
                    <p className="mt-2 text-sm text-muted-foreground">Для этой темы пока нет словарного запаса.</p>
                </div>
            )}
          </CardContent>
        </Card>

        <Separator />

        {/* Theory Section */}
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-3">
                <div className="flex-shrink-0 rounded-full bg-primary/10 p-3 text-primary">
                    <Book className="h-6 w-6" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold font-headline">2. Теория и правила</h2>
                    <p className="text-sm font-normal text-muted-foreground">Поймите, как использовать слова и грамматику</p>
                </div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                 <div className="prose prose-lg max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: topic.explanation }} />
            </CardContent>
        </Card>

        <Separator />

        {/* Practice Section */}
        <Card className="bg-gradient-to-br from-card to-muted/30">
            <CardHeader>
                <CardTitle className="flex items-center gap-3">
                <div className="flex-shrink-0 rounded-full bg-primary/10 p-3 text-primary">
                    <Sparkles className="h-6 w-6" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold font-headline">3. Адаптивная тренировка</h2>
                    <p className="text-sm font-normal text-muted-foreground">Закрепите знания с помощью ИИ-тренера</p>
                </div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ExerciseEngine topic={topic} />
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
