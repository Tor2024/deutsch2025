'use server';

/**
 * @fileOverview Generates exercises until the user demonstrates mastery of a subject.
 *
 * - assessSubjectMastery - A function that generates exercises until the user demonstrates mastery of a subject.
 * - AssessSubjectMasteryInput - The input type for the assessSubjectMastery function.
 * - AssessSubjectMasteryOutput - The return type for the assessSubjectMastery function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AssessSubjectMasteryInputSchema = z.object({
  subject: z.string().describe('The subject for which to assess mastery.'),
  userProficiency: z.number().describe('The user\u0027s current proficiency in the subject (0-1).'),
  exerciseHistory: z.array(z.object({
    exercise: z.string(),
    correct: z.boolean(),
  })).optional().describe('History of exercises and their correctness.'),
});
export type AssessSubjectMasteryInput = z.infer<typeof AssessSubjectMasteryInputSchema>;

const AssessSubjectMasteryOutputSchema = z.object({
  exercise: z.string().describe('The generated exercise.'),
  isMastered: z.boolean().describe('Whether the user has demonstrated mastery of the subject.'),
});
export type AssessSubjectMasteryOutput = z.infer<typeof AssessSubjectMasteryOutputSchema>;

export async function assessSubjectMastery(input: AssessSubjectMasteryInput): Promise<AssessSubjectMasteryOutput> {
  return assessSubjectMasteryFlow(input);
}

const assessSubjectMasteryPrompt = ai.definePrompt({
  name: 'assessSubjectMasteryPrompt',
  input: {schema: AssessSubjectMasteryInputSchema},
  output: {schema: AssessSubjectMasteryOutputSchema},
  prompt: `You are an expert German language tutor.

You are assessing a user's mastery of the following subject: {{{subject}}}.

The user's current proficiency in the subject is: {{{userProficiency}}}.

{{#if exerciseHistory}}
Here is the user's history of exercises and their correctness:
{{#each exerciseHistory}}
- Exercise: {{{this.exercise}}}, Correct: {{{this.correct}}}
{{/each}}
{{/if}}

Generate a new exercise to assess the user's understanding of the subject.

Based on the user's proficiency and exercise history, determine if the user has demonstrated mastery of the subject. The user has demonstrated mastery if their proficiency is above 0.8 and they have answered at least 3 consecutive exercises correctly. Return the new exercise and whether the user has mastered the subject.

Output in JSON format:
{
  "exercise": "...",
  "isMastered": true | false
}
`,
});

const assessSubjectMasteryFlow = ai.defineFlow(
  {
    name: 'assessSubjectMasteryFlow',
    inputSchema: AssessSubjectMasteryInputSchema,
    outputSchema: AssessSubjectMasteryOutputSchema,
  },
  async input => {
    const {output} = await assessSubjectMasteryPrompt(input);
    return output!;
  }
);
