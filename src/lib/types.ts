export interface Exercise {
  type: 'fill-in-the-blank' | 'multiple-choice' | 'translation';
  question: string;
  options?: string[];
  answer: string;
}

export interface VocabularyTheme {
  theme: string;
  words: {
    german: string;
    russian: string;
    example: string;
  }[];
}

export interface Topic {
  id: string;
  title: string;
  explanation: string;
  exercises: Exercise[];
  vocabulary: VocabularyTheme[];
}

export interface Level {
  id: string;
  title: string;
  description: string;
  topics: Topic[];
}

export interface Curriculum {
  levels: Level[];
}
