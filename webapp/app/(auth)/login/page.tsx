'use client';

import Image from 'next/image';
import LOGO from '../../../public/assets/logo.png';
import Link from 'next/link';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import useSWRMutation from 'swr/mutation';
import { postData } from '@/utils/constants/api';
import { BASE_URL } from '@/utils/constants/config';
import { LoginSchemaType } from '@/utils/types/AuthTypes';
import { loginSchema } from '@/utils/schemes/auth_schema';

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const { trigger: startLogging } = useSWRMutation(
    `${BASE_URL}/auth/jwt/create`,
    postData,
    {
      revalidate: false,
      onError: (err) => {
        for (const elem in err) {
          toast.error(err[elem], { id: 'toaster' });
        }
      },
      onSuccess(data) {
        localStorage.removeItem('msg');
        Cookies.set('jwtToken', data.access, {
          secure: true,
          sameSite: 'strict',
        });
        Cookies.set('refreshToken', data.refresh, {
          secure: true,
          sameSite: 'strict',
        });
        router.push('/profile');
      },
    }
  );

  useEffect(() => {
    if (localStorage.getItem('msg')) {
      toast.error(localStorage.getItem('msg'), { duration: 6000 });
      localStorage.removeItem('msg');
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginSchemaType> = (data) => {
    startLogging(data);
  };

  return (
    <main className='sm:px-auto flex grow justify-center bg-my-khaki-light px-4'>
      <Toaster />
      <div className='flex w-full max-w-sm flex-col '>
        <Image
          src={
            'https://bookrave.eu-central-1.linodeobjects.com/main/image1.png'
          }
          alt='book rave logo'
          width={200}
          height={100}
          className='mx-auto'
        />
        <h1 className='text-center text-4xl'>Create Account</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex w-full flex-col py-5'
        >
          <div className='my-2'>
            <label htmlFor='username' className='mb-2 block font-normal'>
              username
            </label>
            <input
              type='text'
              id='username'
              placeholder='username'
              className={
                'w-full rounded-full border-1  border-black bg-my-gray-light px-3 py-2.5 hover:bg-my-gray-primary'
              }
              {...register('username')}
            />
            {errors.username && (
              <p className='mt-1 text-xs italic text-red-500'>
                {' '}
                {errors.username?.message}
              </p>
            )}
          </div>

          <div className='my-2'>
            <label htmlFor='password' className='mb-2 block font-normal'>
              password
            </label>
            <input
              type='password'
              id='password'
              placeholder='password'
              className={
                'w-full rounded-full border-1  border-black bg-my-gray-light px-3 py-2.5 hover:bg-my-gray-primary'
              }
              {...register('password')}
            />
            {errors.password && (
              <p className='mt-1 text-xs italic text-red-500'>
                {' '}
                {errors.password?.message}
              </p>
            )}
          </div>

          <div className='mt-3 block font-normal'>
            <button
              type='submit'
              className='w-full rounded-full bg-black px-3 py-2.5 text-white'
            >
              login
            </button>
          </div>

          <div className='my-2'>
            <span className='ml-3 text-sm'>
              you don&apos;t have an account{' '}
              <Link className='font-semibold text-blue-500' href={'/register'}>
                create one
              </Link>
            </span>
          </div>
        </form>
      </div>
    </main>
  );
}
