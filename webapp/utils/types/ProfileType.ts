import { z } from 'zod';
import { updateProfileSchema } from '../schemes/profile_schema';

export type ProfileFormType = {
  first_name: string | null;
  last_name: string | null;
  city: string | null;
  avatar: FileList[] | string | null;
};
export type ProfileSchemaType = z.infer<typeof updateProfileSchema>;
