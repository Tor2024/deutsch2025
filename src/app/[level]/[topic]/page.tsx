import { curriculum } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Book, Bot, Sparkles, Sprout } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ExerciseEngine } from '@/components/exercise-engine';

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

      <Tabs defaultValue="theory" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="theory"><Book className="mr-2 h-4 w-4" />Теория</TabsTrigger>
          <TabsTrigger value="vocabulary"><Sprout className="mr-2 h-4 w-4" />Словарь</TabsTrigger>
          <TabsTrigger value="practice"><Sparkles className="mr-2 h-4 w-4" />Практика</TabsTrigger>
        </TabsList>
        <TabsContent value="theory" className="mt-6 rounded-lg border bg-card p-6">
          <div className="prose prose-lg max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: topic.explanation }} />
        </TabsContent>
        <TabsContent value="vocabulary" className="mt-6">
            {topic.vocabulary.length > 0 ? (
              topic.vocabulary.map((vocabTheme, index) => (
                <div key={index} className="mb-6 rounded-lg border bg-card p-6">
                    <h3 className="mb-4 text-2xl font-semibold font-headline">{vocabTheme.theme}</h3>
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
              ))
            ) : (
                <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/30 bg-muted/20 p-12 text-center">
                    <h2 className="text-xl font-semibold text-muted-foreground">Словарь пуст</h2>
                    <p className="mt-2 text-sm text-muted-foreground">Для этой темы пока нет словарного запаса.</p>
                </div>
            )}
        </TabsContent>
        <TabsContent value="practice" className="mt-6 rounded-lg border bg-card p-6">
          <div className="mb-4 flex items-center gap-3">
              <div className="flex-shrink-0 rounded-full bg-primary/10 p-3 text-primary">
                <Bot className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold font-headline">Адаптивная тренировка</h2>
                <p className="text-muted-foreground">ИИ-тренер будет давать задания, пока вы не освоите тему.</p>
              </div>
          </div>
          <ExerciseEngine topic={topic} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
