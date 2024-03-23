import { loginSchema, registrationSchema } from '@/utils/schemes/auth_schema';
import { z } from 'zod';

export type RegistrationSchemaType = z.infer<typeof registrationSchema>;

export type LoginSchemaType = z.infer<typeof loginSchema>;

export type LogoutPayloadType = {
  refresh: string;
};
