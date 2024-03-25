import { z } from 'zod';

export const commentScheme = z.object({
  content: z
    .string()
    .min(15, 'comment should be more than 15 charaacters')
    .max(500, 'comment should be less than 500 characters'),
});
