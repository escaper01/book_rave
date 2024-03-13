'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Image from 'next/image';
import useSWRImmutable from 'swr/immutable';
import { BASE_URL } from '@/utils/constants/config';
import { getDataAuth } from '@/utils/constants/api';
import { useAuthStore } from '@/utils/store/store_auth';
import { useShallow } from 'zustand/react/shallow';
import { ProfileFormType } from '@/utils/types/ProfileType';

export default function Navbar() {
  const [accessToken, setAccessToken] = useState<string | undefined>();
  const [refreshToken, setRefreshToken] = useState<string | undefined>();

  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    console.log(user, 'changeed from navbar');
  }, [user]);

  useEffect(() => {
    setAccessToken(Cookies.get('jwtToken'));
    setRefreshToken(Cookies.get('refreshToken'));
  }, []);

  const { isLoading } = useSWRImmutable(
    `${BASE_URL}/user/get_profile_info`,
    getDataAuth,
    {
      errorRetryCount: 2,
      onSuccess: (data) => {
        console.log('got new user data and set to global state', data);
        setUser(data);
        console.log(user, 'new user');
      },
    }
  );

  return (
    <div className='border-b-2 border-gray-300 bg-my-khaki-primary'>
      <div className='mx-4 flex flex-row items-center justify-normal py-2 lg:mx-20 lg:justify-between'>
        <div className='flex flex-row items-center justify-normal lg:w-1/2'>
          <Link href='/' className='pr-4'>
            <span className='text-2xl font-light'>Book</span>
            <span className='text-2xl font-semibold'>Rave</span>
          </Link>
          <div className=' mx-2 hidden w-full flex-row items-center justify-evenly font-medium lg:flex'>
            <Link href={'/my-posts'} className='mx-2 text-nowrap'>
              My Posts
            </Link>
            <Link href={'/trending'} className='mx-2 text-nowrap'>
              Trending
            </Link>
            <Link href={'/newly-added'} className='mx-2 text-nowrap'>
              New Added Books
            </Link>
          </div>
        </div>
        <div className='flex w-full flex-row items-center justify-end lg:justify-normal'>
          <div className='hidden w-full sm:inline-flex'>
            <input
              className=' ml-0 w-full p-2 md:ml-40'
              placeholder='Search books'
              type='search'
              name='query-books'
            />
          </div>
          <div className='flex flex-row items-center font-medium'>
            {!accessToken && (
              <div>
                <Link href={'/login'} className='mx-3 text-nowrap'>
                  Sign in
                </Link>
                <Link href={'/register'} className='mx-3'>
                  Join
                </Link>
              </div>
            )}
            {user.avatar && (
              <Link href={'/profile'}>
                <Image
                  className='mx-3 h-12 w-12 rounded-full object-fill'
                  alt={user.first_name as string}
                  src={user.avatar as string}
                  width={100}
                  height={100}
                />
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className='flex justify-center border-t-2 border-gray-300 py-1 lg:hidden'>
        <div className='mx-auto my-2 flex w-full max-w-lg flex-row items-center justify-evenly text-sm font-medium'>
          <div className='mx-2 text-nowrap'>menu 2</div>
          <div className='mx-2 text-nowrap'>menu 2</div>
          <div className='mx-2 text-nowrap'>menu 3</div>
        </div>
      </div>
    </div>
  );
}
