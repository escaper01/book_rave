import { z } from 'zod';
import { newReviewSchema } from '@/utils/schemes/review_schema';

export type ReviewFormType = {
  id?: number;
  title: string;
  book: number;
  media: FileList[] | string;
  content: string;
  rating: number;
  book_cover: string;
  posted_by: string;
  global_rating: number;
  one_star_ratings: number;
  two_star_ratings: number;
  three_star_ratings: number;
  four_star_ratings: number;
  five_star_ratings: number;
  created_at: string;
  owner_profile_pic: string;
};
export type ReviewSchemaType = z.infer<typeof newReviewSchema>;

export type ReviewsResponseType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: ReviewFormType[] | [];
};
