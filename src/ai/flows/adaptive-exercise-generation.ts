
'use server';

/**
 * @fileOverview An AI agent to generate adaptive exercises based on user weaknesses.
 *
 * - generateAdaptiveExercise - A function that generates targeted exercises based on user weaknesses.
 * - AdaptiveExerciseInput - The input type for the generateAdaptiveExercise function.
 * - AdaptiveExerciseOutput - The return type for the generateAdaptiveExercise function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const VocabularyWordSchema = z.object({
  german: z.string(),
  russian: z.string(),
  example: z.string(),
});

const ExerciseHistoryItemSchema = z.object({
    exercise: z.string().describe('The question or task presented to the user.'),
    userAnswer: z.string().describe('The answer the user provided.'),
    isCorrect: z.boolean().describe('Whether the user answer was correct.'),
});

const AdaptiveExerciseInputSchema = z.object({
  grammarConcept: z
    .string()
    .describe('The specific German grammar concept the user is struggling with.'),
  userLevel: z
    .enum(['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'])
    .describe('The current German language level of the user.'),
  pastErrors: z
    .string()
    .describe(
      'A summary of past errors made by the user in previous sessions related to this grammar concept.'
    ),
  exerciseHistory: z.array(ExerciseHistoryItemSchema).optional().describe('The history of exercises and user answers from the current session. Use this to identify patterns in recent mistakes.'),
  vocabulary: z.array(VocabularyWordSchema).describe('A list of vocabulary words to incorporate into the exercises.'),
});

export type AdaptiveExerciseInput = z.infer<typeof AdaptiveExerciseInputSchema>;

const ExerciseSchema = z.object({
    question: z.string().describe('The question or fill-in-the-blank sentence.'),
    answer: z.string().describe('The correct answer.')
});

const SentenceConstructionExerciseSchema = z.object({
  words: z.array(z.string()).describe('An array of words to be arranged into a correct sentence.'),
  correctSentence: z.string().describe('The correctly formed sentence.'),
});

const AdaptiveExerciseOutputSchema = z.object({
  readingText: z
    .string()
    .describe(
      'A short, engaging German text (3-5 sentences) for reading practice, relevant to the grammar concept and user level.'
    ),
  comprehensionExercises: z.array(ExerciseSchema).length(3)
    .describe(
      'An array of 3 questions in German based on the reading text to check understanding, each with a correct answer.'
    ),
  grammarExercises: z.array(ExerciseSchema).length(3)
    .describe(
      'An array of 3 fill-in-the-blank sentence exercises targeting the specific grammar concept. Use underscores for the blank (e.g., "Ich ___ nach Hause."). Each exercise should have a question and the correct answer.'
    ),
  sentenceConstructionExercises: z.array(SentenceConstructionExerciseSchema).length(2)
    .describe(
        'An array of 2 sentence construction exercises. Provide a set of words that the user must assemble into a grammatically correct sentence.'
    ),
  explanation: z
    .string()
    .describe(
      'A detailed explanation in Russian about the grammar rule being practiced, formatted with HTML tags (<h2>, <ul>, <li>, <strong>). Important terms should be wrapped in `<strong class="text-primary">...</strong>`.'
    ),
});

export type AdaptiveExerciseOutput = z.infer<typeof AdaptiveExerciseOutputSchema>;

export async function generateAdaptiveExercise(
  input: AdaptiveExerciseInput
): Promise<AdaptiveExerciseOutput> {
  return adaptiveExerciseGenerationFlow(input);
}

const adaptiveExercisePrompt = ai.definePrompt({
  name: 'adaptiveExercisePrompt',
  input: {schema: AdaptiveExerciseInputSchema},
  output: {schema: AdaptiveExerciseOutputSchema},
  prompt: `You are an expert German language tutor, fluent in Russian. Your primary goal is to create adaptive exercises that target the user's specific weaknesses.

  **User Profile:**
  - **Grammar Concept:** {{grammarConcept}}
  - **Level:** {{userLevel}}
  - **Summary of Past Errors (from previous sessions):** {{pastErrors}}
  
  **Current Session Performance:**
  {{#if exerciseHistory}}
  Analyze the user's performance in this session to identify recurring mistakes. Pay close attention to the 'isCorrect' flag and the 'userAnswer'.
  {{#each exerciseHistory}}
  - **Question:** "{{exercise}}" | **User Answer:** "{{userAnswer}}" | **Correct:** {{isCorrect}}
  {{/each}}
  **Based on the current session, identify the most common error type (e.g., wrong article in Akkusativ, incorrect verb ending, word order). The new exercises MUST specifically target this weakness.**
  {{else}}
  This is the first set of exercises in the session.
  {{/if}}

  **Vocabulary to Use:**
  The exercises MUST incorporate words from the following vocabulary list:
  {{#each vocabulary}}
  - {{german}} ({{russian}}): {{example}}
  {{/each}}

  **Your Task: Create a comprehensive, multi-part exercise set.**

  1.  **Reading Practice:** Write a short, engaging German text (3-5 sentences) that is relevant to the user's level, naturally incorporates the '{{grammarConcept}}', and uses several words from the provided vocabulary list.
  2.  **Comprehension Check:** Based on the text you just wrote, create an array of 3 comprehension questions in German. For each, provide the question and the correct answer.
  3.  **Targeted Grammar Exercises:** Create an array of 3 fill-in-the-blank sentences. These exercises MUST directly target the primary weakness identified from the 'exerciseHistory' (or the general 'grammarConcept' if no history is available). Use words from the vocabulary list. Use underscores for the blank space (e.g., "Ich ___ ins Kino."). For each, provide the full sentence as the question and the exact word(s) for the blank as the answer.
  4.  **Sentence Construction:** Create an array of 2 exercises where the user must form a correct sentence from a given set of words. This tests word order and should also reflect the identified weakness.
  5.  **Explanation:** Provide a clear, concise explanation of the grammar rule being tested. The explanation MUST be in Russian and formatted with HTML. Use tags like <h2>, <ul>, <li>, and <strong>. Highlight key terms and concepts using '<strong class="text-primary">term</strong>'.

  Ensure the output is parsable JSON and follows the specified schema.
  `,
});

const adaptiveExerciseGenerationFlow = ai.defineFlow(
  {
    name: 'adaptiveExerciseGenerationFlow',
    inputSchema: AdaptiveExerciseInputSchema,
    outputSchema: AdaptiveExerciseOutputSchema,
  },
  async input => {
    const {output} = await adaptiveExercisePrompt(input);
    return output!;
  }
);
