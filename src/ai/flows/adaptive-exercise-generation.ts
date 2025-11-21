
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

const AdaptiveExerciseInputSchema = z.object({
  grammarConcept: z
    .string()
    .describe('The specific German grammar concept the user is struggling with.'),
  userLevel: z
    .enum(['A1', 'A2', 'B1', 'B2', 'C1', 'C2'])
    .describe('The current German language level of the user.'),
  pastErrors: z
    .string()
    .describe(
      'Examples of past errors made by the user related to this grammar concept.'
    ),
});

export type AdaptiveExerciseInput = z.infer<typeof AdaptiveExerciseInputSchema>;

const AdaptiveExerciseOutputSchema = z.object({
  readingText: z
    .string()
    .describe(
      'A short, engaging German text (3-5 sentences) for reading practice, relevant to the grammar concept and user level.'
    ),
  comprehensionQuestion: z
    .string()
    .describe(
      'A question in German based on the reading text to check understanding.'
    ),
  comprehensionAnswer: z
    .string()
    .describe('The correct answer to the comprehension question.'),
  fillInTheBlankExercise: z
    .string()
    .describe(
      'A fill-in-the-blank sentence exercise targeting the specific grammar concept. Use underscores for the blank (e.g., "Ich ___ nach Hause.").'
    ),
  fillInTheBlankAnswer: z
    .string()
    .describe('The correct word(s) for the fill-in-the-blank exercise.'),
  explanation: z
    .string()
    .describe(
      'A detailed explanation in Russian about the grammar rule being practiced.'
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
  prompt: `You are a German language tutor, fluent in Russian.

  The user is struggling with the following grammar concept: {{grammarConcept}}.
  The user's level is: {{userLevel}}.
  Here are some examples of past errors they have made: {{pastErrors}}

  Your task is to create a comprehensive, multi-part exercise set to help the user practice this concept.

  1.  **Reading Practice:** Write a short, engaging German text (3-5 sentences) that is relevant to the user's level and naturally incorporates the '{{grammarConcept}}'.
  2.  **Comprehension Check:** Based on the text you just wrote, create one comprehension question in German.
  3.  **Comprehension Answer:** Provide the correct answer to the comprehension question.
  4.  **Targeted Exercise:** Create one fill-in-the-blank sentence that directly and obviously tests the '{{grammarConcept}}'. Use underscores for the blank space (e.g., "Ich ___ ins Kino.").
  5.  **Targeted Answer:** Provide the exact word(s) that should go in the blank.
  6.  **Explanation:** Provide a clear, concise explanation of the grammar rule being tested. The explanation MUST be in Russian.

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
