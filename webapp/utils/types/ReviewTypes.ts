import { z } from 'zod';
import { newReviewSchema } from '@/utils/schemes/review_schema';

export type ReviewFormType = {
  id?: number;
  title: string;
  book: number;
  media: FileList[] | string;
  content: string;
  rating: number;
};
export type ReviewSchemaType = z.infer<typeof newReviewSchema>;

export type ReviewsResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: ReviewFormType[] | [];
};
