import { ZodType, z } from 'zod';
import { SubmitErrorHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegistrationFormType, LoginFormType } from '@/utils/types/AuthTypes';

export const registrationSchema: ZodType<RegistrationFormType> = z.object({
  username: z.string().min(5, 'username is required').max(50),
  email: z.string().email('invalid email').min(1, 'email is required'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must have more than 8 characters'),
  confirm_password: z.string().min(1, 'Password confirmation is required'),
  consent: z
    .literal(true, {
      errorMap: () => ({ message: 'You must accept the terms and conditions' }),
    })
    .refine((schema: any) => schema.password === schema.confirm_password, {
      path: ['confirm_password'],
      message: 'password do not match',
    }),
});

export const loginSchema: ZodType<LoginFormType> = z.object({
  username: z.string().min(5, 'username is required').max(50),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must have more than 8 characters'),
});
