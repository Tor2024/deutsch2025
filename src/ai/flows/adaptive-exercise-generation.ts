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
    .enum(['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'])
    .describe('The current German language level of the user.'),
  pastErrors: z
    .string()
    .describe(
      'Examples of past errors made by the user related to this grammar concept.'
    ),
});

export type AdaptiveExerciseInput = z.infer<typeof AdaptiveExerciseInputSchema>;

const AdaptiveExerciseOutputSchema = z.object({
  exerciseText: z
    .string()
    .describe(
      'A German language exercise targeted at the specified grammar concept and user level.'
    ),
  correctAnswer: z.string().describe('The correct answer to the exercise.'),
  explanation: z
    .string()
    .describe(
      'A detailed explanation of the grammar concept and why the answer is correct, in Russian.'
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

  Generate a targeted exercise to help the user practice this concept. The exercise should be appropriate for their level.

  Also provide the correct answer to the exercise.

  Finally, provide a detailed explanation of the grammar concept and why the answer is correct. The explanation MUST be in Russian.

  Ensure the output is parsable JSON, and follows the schema. Focus on practical examples to help the user internalize the concept.
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
