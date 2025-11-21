import { config } from 'dotenv';
config();

import '@/ai/flows/assess-subject-mastery.ts';
import '@/ai/flows/personalized-spaced-repetition.ts';
import '@/ai/flows/adaptive-exercise-generation.ts';