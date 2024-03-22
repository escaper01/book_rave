import { z } from 'zod';


export const registrationSchema = z.object({
  username: z
    .string()
    .min(5, 'username is required')
    .max(50),
  email: z.string().email('invalid email').min(1, 'email is required'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must have more than 8 characters'),
  re_password: z.string().min(1, 'Password confirmation is required'),
  consent: z
    .literal(true, {
      errorMap: () => ({ message: 'You must accept the terms and conditions' }),
    })
    .refine((schema: any) => schema.password === schema.re_password, {
      path: ['re_password'],
      message: 'password do not match',
    }),
});

export const loginSchema = z.object({
  username: z.string().min(5, 'username is required').max(50),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must have more than 8 characters'),
});
