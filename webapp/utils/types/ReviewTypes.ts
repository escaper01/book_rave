import { z } from 'zod';
import { ReviewSchema } from '@/utils/schemes/review_schema';

export type ReviewFormType = {
  id?: number;
  title: string;
  book: number;
  media: FileList[] | string;
  content: string;
  rating: number;
  book_cover: string;
  added_by: string;
  created_at: string;
  owner_profile_pic: string;

  comments_count: number;
  likes_count: number;
  dislikes_count: number;
};
export type ReviewSchemaType = z.infer<typeof ReviewSchema>;

export type ReviewsResponseType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: ReviewFormType[] | [];
};
