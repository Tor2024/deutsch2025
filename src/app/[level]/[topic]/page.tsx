
import { curriculum } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Book, Sparkles, Sprout } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { SpacedRepetitionWrapper } from '@/components/spaced-repetition-wrapper';
import { WordCard } from '@/components/word-card';

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

export default async function TopicPage({ params }: TopicPageProps) {
  const level = curriculum.levels.find((l) => l.id === params.level);
  const topic = level?.topics.find((t) => t.id === params.topic);

  if (!level || !topic) {
    notFound();
  }
  
  const allWords = topic.vocabulary.flatMap(v => v.words);

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
                <p className="text-sm font-normal text-muted-foreground">Слова и фразы, которые понадобятся для освоения темы</p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {allWords.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {allWords.map((word, i) => (
                        <WordCard key={i} word={word} />
                    ))}
                </div>
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
                    <h2 className="text-2xl font-bold font-headline">3. Интерактивная тренировка</h2>
                    <p className="text-sm font-normal text-muted-foreground">Закрепите знания с помощью ИИ-тренера</p>
                </div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <SpacedRepetitionWrapper topic={topic} />
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
