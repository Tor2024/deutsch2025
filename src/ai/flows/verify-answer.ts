
'use server';

/**
 * @fileOverview An AI agent to verify user answers and provide explanations.
 *
 * - verifyAnswer - A function that checks if a user's answer is correct and explains why.
 * - VerifyAnswerInput - The input type for the verifyAnswer function.
 * - VerifyAnswerOutput - The return type for the verifyAnswer function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const VerifyAnswerInputSchema = z.object({
  question: z.string().describe('The question that was asked to the user.'),
  userAnswer: z.string().describe('The answer provided by the user.'),
  correctAnswer: z
    .string()
    .describe('The canonical correct answer for the question.'),
});

export type VerifyAnswerInput = z.infer<typeof VerifyAnswerInputSchema>;

const VerifyAnswerOutputSchema = z.object({
  isCorrect: z
    .boolean()
    .describe('Whether the user answer is considered correct.'),
  explanation: z
    .string()
    .describe(
      'A brief explanation in Russian about why the answer is correct or incorrect, formatted with HTML. If correct, provide positive reinforcement. If incorrect, explain the mistake using <strong> and <strong class="text-primary"> for emphasis.'
    ),
});

export type VerifyAnswerOutput = z.infer<typeof VerifyAnswerOutputSchema>;

export async function verifyAnswer(
  input: VerifyAnswerInput
): Promise<VerifyAnswerOutput> {
  return verifyAnswerFlow(input);
}

const verifyAnswerPrompt = ai.definePrompt({
  name: 'verifyAnswerPrompt',
  input: {schema: VerifyAnswerInputSchema},
  output: {schema: VerifyAnswerOutputSchema},
  prompt: `You are a German language tutor. Your task is to evaluate a user's answer to a given question.

  Question: "{{question}}"
  Correct Answer: "{{correctAnswer}}"
  User's Answer: "{{userAnswer}}"

  1. Determine if the user's answer is correct. The answer might be slightly different but still semantically correct (e.g., different word order if grammatically acceptable, synonyms). Be flexible but accurate.
  2. Based on the correctness, set the 'isCorrect' flag to true or false.
  3. Provide a brief explanation in Russian, formatted with simple HTML.
     - If the answer is correct, give positive feedback (e.g., "<p>Отлично! Всё верно!</p>").
     - If the answer is incorrect, gently explain the user's mistake. Use <p> tags for paragraphs. For example: "<p>Почти! Вы использовали неправильный артикль. Правильно будет <strong class="text-primary">{{correctAnswer}}</strong>, потому что...</p>". Use <strong> to emphasize parts of your explanation.

  Your response must be in valid JSON format.
  `,
});

const verifyAnswerFlow = ai.defineFlow(
  {
    name: 'verifyAnswerFlow',
    inputSchema: VerifyAnswerInputSchema,
    outputSchema: VerifyAnswerOutputSchema,
  },
  async input => {
    const {output} = await verifyAnswerPrompt(input);
    return output!;
  }
);
