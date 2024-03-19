'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { BASE_URL } from '@/utils/constants/config';
import useSWRMutation from 'swr/mutation';
import { getDataAuth, patchFormAuth } from '@/utils/constants/api';
import toast, { Toaster } from 'react-hot-toast';
import { ProfileFormType, ProfileSchemaType } from '@/utils/types/ProfileType';
import { updateProfileSchema } from '@/utils/schemes/profile_schema';
import { useAuthStore } from '@/utils/store/store_auth';
import { useRouter } from 'next/navigation';
import useSWRImmutable from 'swr/immutable';
import Cookies from 'js-cookie';

export default function Home() {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);
  const router = useRouter();

  const { trigger: startCheckingIsAuth } = useSWRMutation(
    `${BASE_URL}/user/is_authenticated`,
    getDataAuth,
    {
      onError: (err) => {
        if (err.status == 401) {
          localStorage.setItem('msg', 'you need to login first');
          router.push('/login');
        }
      },
    }
  );
  const { trigger: updateProfile } = useSWRMutation(
    `${BASE_URL}/user/update_profile_info`,
    patchFormAuth,
    {
      revalidate: false,
      onError: (err) => {
        for (const elem in err) {
          toast.error(err[elem], { id: 'toaster' });
        }
      },
      onSuccess: (data: ProfileFormType) => {
        toast.success('user profile updated successfully');
        setUser(data);
      },
    }
  );

  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProfileSchemaType>({
    resolver: zodResolver(updateProfileSchema),
  });

  const onSubmit: SubmitHandler<ProfileSchemaType> = (
    data: ProfileSchemaType
  ) => {
    updateProfile({ ...data, avatar: data.avatar.item(0) });
  };

  useEffect(() => {
    if (user.first_name) {
      let key: keyof ProfileFormType;
      for (key in user) {
        setValue(
          key as
            | 'first_name'
            | 'last_name'
            | 'city'
            | 'avatar'
            | `avatar.${string}`,
          user[key] as string
        );
      }
    }
  }, [user]);

  useEffect(() => {
    startCheckingIsAuth();
  }, []);

  return (
    <div className='mx-4 grow sm:mx-auto'>
      <Toaster />
      <div className='mx-auto max-w-sm  '>
        <div className='mt-5 text-3xl  '>Update your info :</div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex w-full flex-col py-5'
        >
          <div className='my-2'>
            <label htmlFor='avatar' className='mb-2 block font-normal'>
              avatar
            </label>
            <input
              accept='image/*'
              type='file'
              id='avatar'
              placeholder='avatar'
              className={
                'w-full rounded-full border-1  border-black bg-my-gray-light px-3 py-2 hover:cursor-pointer hover:bg-my-gray-primary'
              }
              {...register('avatar')}
            />
            {errors.avatar && (
              <p className='mt-1 text-xs italic text-red-500'>
                {' '}
                {errors.avatar?.message as string}
              </p>
            )}
          </div>

          <div className='my-2'>
            <label htmlFor='first_name' className='mb-2 block font-normal'>
              first name
            </label>
            <input
              type='text'
              id='first_name'
              placeholder='first_name'
              className={
                'w-full rounded-full border-1  border-black bg-my-gray-light px-3 py-2.5 hover:bg-my-gray-primary'
              }
              {...register('first_name')}
            />
            {errors.first_name && (
              <p className='mt-1 text-xs italic text-red-500'>
                {' '}
                {errors.first_name?.message}
              </p>
            )}
          </div>

          <div className='my-2'>
            <label htmlFor='last_name' className='mb-2 block font-normal'>
              last name
            </label>
            <input
              type='text'
              id='last_name'
              placeholder='last_name'
              className={
                'w-full rounded-full border-1  border-black bg-my-gray-light px-3 py-2.5 hover:bg-my-gray-primary'
              }
              {...register('last_name')}
            />
            {errors.last_name && (
              <p className='mt-1 text-xs italic text-red-500'>
                {' '}
                {errors.last_name?.message}
              </p>
            )}
          </div>
          <div className='my-2'>
            <label htmlFor='city' className='mb-2 block font-normal'>
              city
            </label>
            <input
              type='text'
              id='city'
              placeholder='city'
              className={
                'w-full rounded-full border-1  border-black bg-my-gray-light px-3 py-2.5 hover:bg-my-gray-primary'
              }
              {...register('city')}
            />
            {errors.city && (
              <p className='mt-1 text-xs italic text-red-500'>
                {' '}
                {errors.city?.message}
              </p>
            )}
          </div>

          <div className='mt-3 block font-normal'>
            <button
              type='submit'
              className='w-full rounded-full bg-black px-3 py-2.5 text-white'
            >
              save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
