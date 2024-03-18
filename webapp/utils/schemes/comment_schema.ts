import { ZodType, z } from 'zod';
import { SubmitErrorHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ReviewFormType } from '@/utils/types/ReviewTypes';

export const commentScheme = z.object({
  comment: z
    .string()
    .min(100, 'comment should be more than 100 charaacters')
    .max(500, 'comment should be less than 500 characters'),
});
