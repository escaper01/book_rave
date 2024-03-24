'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Image from 'next/image';
import useSWR from 'swr';
import { BASE_URL, initial_user_state } from '@/utils/constants/config';
import { getDataAuth, postData, postDataAuth } from '@/utils/constants/api';
import { useAuthStore } from '@/utils/store/store_auth';
import { LogoutSvg } from '@/utils/constants/svg_library';
import useSWRMutation from 'swr/mutation';
import { useRouter } from 'next/navigation';
import Search from '@/components/UI/Search';

export default function Navbar() {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState<string | undefined>();
  const [refreshToken, setRefreshToken] = useState<string | undefined>();

  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    setAccessToken(Cookies.get('jwtToken'));
    setRefreshToken(Cookies.get('refreshToken'));
  }, []);

  const { isLoading } = useSWR(
    accessToken ? `${BASE_URL}/user/get_profile_info` : null,
    getDataAuth,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval: 0,
      onSuccess: (data) => {
        setUser(data);
      },
    }
  );

  const { trigger: startLoggingOut } = useSWRMutation(
    `${BASE_URL}/auth/blacklist`,
    postData,
    {
      revalidate: false,
      onSuccess: (data) => {
        Cookies.remove('jwtToken');
        Cookies.remove('refreshToken');
        setUser(initial_user_state);
        router.push('/');
      },
    }
  );

  return (
    <div className='border-b-1 border-gray-300 bg-my-khaki-primary capitalize'>
      <div className='mx-4 flex flex-row items-center justify-normal py-2 lg:mx-20 lg:justify-between'>
        <div className='flex flex-row items-center justify-normal lg:w-1/2'>
          <Link href='/' className='pr-4'>
            <span className='text-2xl font-light'>Book</span>
            <span className='text-2xl font-semibold'>Rave</span>
          </Link>
          <div className=' mx-2 hidden w-full flex-row items-center justify-evenly font-medium lg:flex'>
            <Link
              href={'/trending_posts'}
              className='mx-2 text-nowrap'
              prefetch={true}
            >
              trending posts
            </Link>
            <Link href={'/books'} className='mx-2 text-nowrap' prefetch={true}>
              books
            </Link>
            <Link href={'/newly-added'} className='mx-2 text-nowrap'>
              browse
            </Link>
          </div>
        </div>
        <div className='flex w-full flex-row items-center justify-end'>
          <Search />
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
              <>
                <Link href={'/profile'}>
                  <Image
                    className='mx-6 h-11 w-11 rounded-full object-fill'
                    alt={user.first_name as string}
                    src={user.avatar as string}
                    width={100}
                    height={100}
                  />
                </Link>
                <div>
                  <LogoutSvg
                    className='ml-5 w-6 hover:cursor-pointer'
                    onClick={() => {
                      startLoggingOut({ refresh: refreshToken as string });
                    }}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className='flex justify-center border-t-1 border-gray-300 py-1 lg:hidden'>
        <div className='mx-auto my-2 flex w-full max-w-lg flex-row items-center justify-evenly text-sm font-medium'>
          <Link href={'/trending_posts'} className='mx-2 text-nowrap'>
            trending posts
          </Link>
          <Link href={'/books'} className='mx-2 text-nowrap'>
            books
          </Link>
          <Link href={'/newly-added'} className='mx-2 text-nowrap'>
            browse
          </Link>
        </div>
      </div>
    </div>
  );
}
