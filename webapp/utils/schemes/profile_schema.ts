import { ZodType, z } from 'zod';
import { SubmitErrorHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ReviewFormType } from '@/utils/types/ReviewTypes';
import { MAX_FILE_SIZE, ACCEPTED_IMAGE_TYPES } from '../constants/config';

export const updateProfileSchema = z.object({
  first_name: z
    .string()
    .min(3, 'first_name should be more than 3 charaacters')
    .max(50, 'first_name should be less than 50 characters'),
  last_name: z
    .string()
    .min(3, 'last_name should be more than 3 charaacters')
    .max(50, 'last_name should be less than 50 characters'),
  city: z
    .string()
    .min(3, 'city should be more than 3 charaacters')
    .max(50, 'city should be less than 50 characters'),
  avatar: z
    .any()
    .refine((files) => files?.length == 1, 'Image is required.')
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      '.jpg, .jpeg, .png and .webp files are accepted.'
    ),
});
