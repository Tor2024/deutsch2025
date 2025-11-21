
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

const ExerciseSchema = z.object({
    question: z.string().describe('The question or fill-in-the-blank sentence.'),
    answer: z.string().describe('The correct answer.')
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
  prompt: `You are a German language tutor, fluent in Russian.

  The user is struggling with the following grammar concept: {{grammarConcept}}.
  The user's level is: {{userLevel}}.
  Here are some examples of past errors they have made: {{pastErrors}}

  Your task is to create a comprehensive, multi-part exercise set to help the user practice this concept.

  1.  **Reading Practice:** Write a short, engaging German text (3-5 sentences) that is relevant to the user's level and naturally incorporates the '{{grammarConcept}}'.
  2.  **Comprehension Check:** Based on the text you just wrote, create an array of 3 comprehension questions in German. For each, provide the question and the correct answer.
  3.  **Targeted Grammar Exercises:** Create an array of 3 fill-in-the-blank sentences that directly and obviously test the '{{grammarConcept}}'. Use underscores for the blank space (e.g., "Ich ___ ins Kino."). For each, provide the full sentence as the question and the exact word(s) for the blank as the answer.
  4.  **Explanation:** Provide a clear, concise explanation of the grammar rule being tested. The explanation MUST be in Russian and formatted with HTML. Use tags like <h2>, <ul>, <li>, and <strong>. Highlight key terms and concepts using '<strong class="text-primary">term</strong>'.

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
