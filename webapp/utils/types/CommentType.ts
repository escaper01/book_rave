import { z } from 'zod';
import { commentScheme } from '../schemes/comment_schema';

export type CommentFormType = {
  review_id?: number;
  content: string;
  created_at?: string;
  owner_profile_pic?: string;
  added_by?: string;
};
export type CommentSchemaType = z.infer<typeof commentScheme>;
