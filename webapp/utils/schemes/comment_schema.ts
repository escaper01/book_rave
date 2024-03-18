import { z } from 'zod';


export const commentScheme = z.object({
  content: z
    .string()
    .min(50, 'comment should be more than 50 charaacters')
    .max(500, 'comment should be less than 500 characters'),
});
