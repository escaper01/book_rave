import { z } from 'zod';
import { updateProfileSchema } from '../schemes/profile_schema';

export type ProfileFormType = {
  review_id?:number;
  content:string;
  created_at:string;
  
};
export type ProfileSchemaType = z.infer<typeof updateProfileSchema>;
