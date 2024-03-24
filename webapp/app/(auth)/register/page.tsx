'use client';

import Image from 'next/image';
// import LOGO from '../../../public/assets/logo.png';
import Link from 'next/link';
import { registrationSchema } from '@/utils/schemes/auth_schema';
import { RegistrationSchemaType } from '@/utils/types/AuthTypes';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import useSWRMutation from 'swr/mutation';
import { postData } from '@/utils/constants/api';
import { BASE_URL } from '@/utils/constants/config';
import { redirect } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

export default function Register() {
  const {
    data: RegistrationResponse,
    trigger: startRegistering,
    isMutating,
  } = useSWRMutation(`${BASE_URL}/auth/users/`, postData, {
    revalidate: false,
    onError: (err) => {
      for (const elem in err) {
        toast.error(err[elem], { id: 'toaster' });
      }
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationSchemaType>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit: SubmitHandler<RegistrationSchemaType> = (data) => {
    startRegistering(data);
  };

  if (RegistrationResponse) {
    localStorage.setItem(
      'msg',
      `Hey ${RegistrationResponse.username}! you need to login`
    );
    redirect('/login');
  }

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
              id='username'
              type='text'
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
            <label htmlFor='email' className='mb-2 block font-normal'>
              email
            </label>
            <input
              id='email'
              {...register('email')}
              type='text'
              placeholder='email'
              className={
                'w-full rounded-full border-1  border-black bg-my-gray-light px-3 py-2.5 hover:bg-my-gray-primary'
              }
            />
            {errors.email && (
              <p className='mt-1 text-xs italic text-red-500'>
                {' '}
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className='my-2'>
            <label htmlFor='password' className='mb-2 block font-normal'>
              password
            </label>
            <input
              id='password'
              {...register('password')}
              type='password'
              placeholder='password'
              className={
                'w-full rounded-full border-1  border-black bg-my-gray-light px-3 py-2.5 hover:bg-my-gray-primary'
              }
            />
            {errors.password && (
              <p className='mt-1 text-xs italic text-red-500'>
                {' '}
                {errors.password?.message}
              </p>
            )}
          </div>
          <div className='my-2'>
            <label htmlFor='re_password' className='mb-2 block font-normal'>
              confirm password
            </label>
            <input
              id='re_password'
              {...register('re_password')}
              type='password'
              placeholder='re_password'
              className={
                'w-full rounded-full border-1  border-black bg-my-gray-light px-3 py-2.5 shadow hover:bg-my-gray-primary focus:shadow-2xl'
              }
            />
            {errors.re_password && (
              <p className='mt-1 text-xs italic text-red-500'>
                {' '}
                {errors.re_password?.message}
              </p>
            )}
          </div>
          <div className='my-1'>
            <input
              id='consent'
              {...register('consent')}
              type='checkbox'
              className='hover:cursor-pointer'
            />
            {errors.consent && (
              <p className='mt-1 text-xs italic text-red-500'>
                {' '}
                {errors.consent?.message}
              </p>
            )}
            <label htmlFor='consent' className='ml-3 text-sm'>
              By creating an account you access our{' '}
              <Link className='text-xs font-bold' href={'/terms'}>
                Terms of use
              </Link>
            </label>
          </div>

          <div className='my-2 block font-normal'>
            <button
              disabled={isMutating}
              type='submit'
              className='w-full rounded-full bg-black px-3 py-2.5 text-white'
            >
              create account
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
