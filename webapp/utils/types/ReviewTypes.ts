import { z } from 'zod';
import { newReviewSchema } from '@/utils/schemes/review_schema';

export type ReviewFormType = {
  title: string;
  book: number;
  media: FileList[];
  content: string;
  rating: number;
};
export type ReviewSchemaType = z.infer<typeof newReviewSchema>;
