import { z } from 'zod';

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

export const newReviewSchema = z.object({
  title: z
    .string()
    .min(15, 'title should be more than 15 charaacters')
    .max(150, 'the title should be less than 150 characters'),
  book: z.number().positive(),
  media: z
    .custom<FileList>()
    .refine((files) => files?.length == 1, 'Image is required.')
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      '.jpg, .jpeg, .png and .webp files are accepted.'
    ),
  content: z
    .string()
    .min(50, 'your review should be more than 50 charaacters')
    .max(300, 'your review should be less than 300 characters'),
  rating: z
    .number()
    .gte(0, 'rating should be bigger than 0')
    .lte(5, 'rating should be less than 5'),
});
