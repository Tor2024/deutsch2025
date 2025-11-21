
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
      'A detailed explanation in Russian about why the answer is correct or incorrect, formatted with HTML. If correct, provide positive reinforcement. If incorrect, explain the mistake clearly, state the correct answer, and provide 1-2 more examples of correct usage. Use <p>, <strong> and <strong class="text-primary"> for emphasis.'
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
  prompt: `You are an expert German language tutor. Your task is to evaluate a user's answer and provide detailed, helpful feedback in Russian.

  Question: "{{question}}"
  Correct Answer: "{{correctAnswer}}"
  User's Answer: "{{userAnswer}}"

  1.  **Analyze the answer:** Determine if the user's answer is correct. Be flexible with minor typos if the meaning is clear, but strict on grammatical correctness.
  2.  **Set 'isCorrect' flag:** Set the boolean flag to 'true' or 'false'.
  3.  **Generate Explanation in Russian (HTML format):**
      *   **If correct:** Provide positive and encouraging feedback. For example: "<p>Отлично! Всё верно!</p><p>Вы правильно использовали грамматическую конструкцию.</p>"
      *   **If incorrect:**
          a. Start with a gentle correction, like "<p>Почти, но есть небольшая ошибка.</p>"
          b. Clearly state what the mistake was. Example: "Вы использовали не тот артикль." or "Неправильное окончание у глагола."
          c. Explicitly state the correct answer. Use a strong tag for emphasis: "Правильный ответ: <strong class="text-primary">{{correctAnswer}}</strong>."
          d. Explain *why* it's correct. Example: "Мы используем винительный падеж (Akkusativ) после глагола 'sehen', поэтому 'der' меняется на 'den'."
          e. Provide one or two additional, different examples of the correct grammar rule in use to reinforce the concept.

  Your entire response must be a single, valid JSON object.
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
