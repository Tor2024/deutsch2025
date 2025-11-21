import { config } from 'dotenv';
config();

import '@/ai/flows/assess-subject-mastery.ts';
import '@/ai/flows/personalized-spaced-repetition.ts';
import '@/ai/flows/adaptive-exercise-generation.ts';
import '@/ai/flows/verify-answer.ts';
import '@/ai/flows/text-to-speech.ts';
