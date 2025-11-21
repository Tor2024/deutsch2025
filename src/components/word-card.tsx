
'use client';

import type { VocabularyWord } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export function WordCard({ word }: { word: VocabularyWord }) {
  
  const renderDetails = () => {
    switch (word.type) {
      case 'noun':
        return (
          <>
            <p><span className="font-semibold">Ед. число:</span> {word.article} {word.german}</p>
            <p><span className="font-semibold">Мн. число:</span> {word.pluralArticle} {word.plural}</p>
            <p className="mt-2 italic text-muted-foreground">Пример (ед.ч.): {word.exampleSingular}</p>
            <p className="italic text-muted-foreground">Пример (мн.ч.): {word.examplePlural}</p>
          </>
        );
      case 'verb':
        return (
          <>
            <p className="italic text-muted-foreground">{word.conjugation}</p>
            <p className="mt-2 italic text-muted-foreground">Пример: {word.example}</p>
          </>
        );
      case 'adjective':
        return (
          <>
            <p>{word.german} → {word.comparative} → {word.superlative}</p>
            <p className="mt-2 italic text-muted-foreground">Пример: {word.example}</p>
          </>
        );
      case 'conjunction':
        return (
          <>
            <p className="italic text-muted-foreground">{word.structure}</p>
            <p className="mt-2 italic text-muted-foreground">Пример: {word.example}</p>
          </>
        );
      default:
        if ('article' in word && (word as any).article) {
          return <p>{(word as any).article} {word.german}</p>;
        }
        return <p className="italic text-muted-foreground">{word.example}</p>;
    }
  };

  const getGermanDisplay = () => {
    if (word.type === 'noun') {
      return `${word.article} ${word.german}`;
    }
    return word.german;
  }

  return (
    <div className="rounded-lg border bg-card p-4 text-card-foreground">
        <div className="flex justify-between items-start">
            <div>
                 <p className="text-xl font-bold flex items-center gap-2">
                    {getGermanDisplay()}
                </p>
                <p className="text-md text-muted-foreground">{word.russian}</p>
            </div>
            <Badge variant="outline">{word.type}</Badge>
        </div>
        <Separator className="my-3" />
        <div className="text-sm space-y-1">
            {renderDetails()}
        </div>
    </div>
  );
};

    
