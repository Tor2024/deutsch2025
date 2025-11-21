'use server';

/**
 * @fileOverview Implements personalized spaced repetition using Genkit.
 *
 * This file defines a Genkit flow that adjusts spaced repetition intervals based on user performance.
 * It exports the PersonalizedSpacedRepetitionInput, PersonalizedSpacedRepetitionOutput, and the personalizedSpacedRepetition function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedSpacedRepetitionInputSchema = z.object({
  itemId: z.string().describe('The unique identifier of the item being reviewed.'),
  userResponse: z
    .string()
    .describe(
      'The users response to the item being reviewed, e.g. correct or incorrect.'
    ),
  responseTime: z
    .number()
    .describe('The time taken by the user to respond in seconds.'),
  currentInterval: z
    .number()
    .describe(
      'The current interval in days before the item is shown again for review.'
    ),
  difficulty: z
    .number()
    .describe(
      'The difficulty of the item, on a scale of 1 (easy) to 10 (very difficult).'
    ),
});

export type PersonalizedSpacedRepetitionInput = z.infer<
  typeof PersonalizedSpacedRepetitionInputSchema
>;

const PersonalizedSpacedRepetitionOutputSchema = z.object({
  newInterval: z
    .number()
    .describe(
      'The updated interval in days before the item is shown again for review, adjusted based on user performance.'
    ),
  explanation: z
    .string()
    .describe('An explanation of why the interval was adjusted.'),
});

export type PersonalizedSpacedRepetitionOutput = z.infer<
  typeof PersonalizedSpacedRepetitionOutputSchema
>;

export async function personalizedSpacedRepetition(
  input: PersonalizedSpacedRepetitionInput
): Promise<PersonalizedSpacedRepetitionOutput> {
  return personalizedSpacedRepetitionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedSpacedRepetitionPrompt',
  input: {schema: PersonalizedSpacedRepetitionInputSchema},
  output: {schema: PersonalizedSpacedRepetitionOutputSchema},
  prompt: `You are an AI that adjusts spaced repetition intervals based on user performance data.

  Analyze the following data to determine the new interval for the item.

  Item ID: {{{itemId}}}
  User Response: {{{userResponse}}}
  Response Time: {{{responseTime}}} seconds
  Current Interval: {{{currentInterval}}} days
  Difficulty: {{{difficulty}}} (1-10)

  Based on this information, suggest a new interval in days and explain your reasoning. If the user responded correctly and quickly, increase the interval. If the user struggled, decrease the interval. Take item difficulty into account. The interval should never be negative.

  New Interval:`,
});

const personalizedSpacedRepetitionFlow = ai.defineFlow(
  {
    name: 'personalizedSpacedRepetitionFlow',
    inputSchema: PersonalizedSpacedRepetitionInputSchema,
    outputSchema: PersonalizedSpacedRepetitionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
