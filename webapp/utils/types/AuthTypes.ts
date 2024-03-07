import { registrationSchema } from '@/utils/schemes/auth_schema';
import { z } from 'zod';
export type RegistrationFormType = {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
  consent: boolean;
};
export type RegistrationSchemaType = z.infer<typeof registrationSchema>;

export type LoginFormType = {
  username: string;
  password: string;
};
export type LoginSchemaType = z.infer<typeof registrationSchema>;
