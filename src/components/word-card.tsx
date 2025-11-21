
'use client';

import type { VocabularyWord } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Volume2, Loader2 } from 'lucide-react';
import { useState, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import { generateAudio } from '@/ai/flows/text-to-speech';

export function WordCard({ word }: { word: VocabularyWord }) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const { toast } = useToast();

  const handleSpeak = useCallback(async (text: string) => {
    if (isSpeaking || !text) return;
    setIsSpeaking(true);
    try {
      const { audio } = await generateAudio({ text });
      const audioEl = new Audio(audio);
      audioEl.play();
      audioEl.onended = () => setIsSpeaking(false);
      audioEl.onerror = () => {
        console.error("Audio playback error");
        toast({title: "Ошибка", description: "Не удалось воспроизвести аудио.", variant: "destructive"})
        setIsSpeaking(false);
      }
    } catch(e) {
      console.error(e)
      toast({title: "Ошибка", description: "Не удалось воспроизвести аудио.", variant: "destructive"})
    } finally {
        // A timeout to prevent button spamming in case of an error
        setTimeout(() => setIsSpeaking(false), 1000);
    }
  }, [isSpeaking, toast]);

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
                    <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => handleSpeak(word.german)} disabled={isSpeaking}>
                        {isSpeaking ? <Loader2 className="animate-spin" /> : <Volume2 />}
                    </Button>
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
