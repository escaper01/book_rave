'use client';

import Image from 'next/image';
import Link from 'next/link';
import StaticRatingStars from '@/components/book/StaticRatingStars';
import useSWR from 'swr';
import { useState } from 'react';
import { BASE_URL } from '@/utils/constants/config';
import { BookFormType } from '@/utils/types/BookTypes';
import { getData } from '@/utils/constants/api';
import { BookResponseType } from '@/utils/types/BookTypes';
import Paginator from '@/components/UI/Paginator';
import LoadingPage from '@/components/UI/LoadingPage';

export default function Trending() {
  const [currentUrl, setCurrentUrl] = useState(`${BASE_URL}/book/all-books`);
  const [bookCount, setBookCount] = useState(0);

  const [postedBooks, setPostedBooks] = useState<BookFormType[] | []>([]);
  const { data: reviewPostsRes, isLoading } = useSWR(currentUrl, getData, {
    onSuccess: (data: BookResponseType) => {
      setPostedBooks(data.results);
      setBookCount(data.count);
    },
  });

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className='grow'>
      <div className='container mx-auto grid max-w-screen-lg justify-center gap-y-4  p-5 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-6'>
        {!isLoading && postedBooks.length === 0 && <div>no books</div>}
        {postedBooks.map((elem, index) => {
          return (
            <div
              className='col-span-1 mx-5 min-w-[150px] hover:cursor-pointer'
              key={index}
            >
              <Link
                href={`book/${elem.id}`}
                className='relative mx-auto flex max-w-fit flex-col justify-center bg-my-gray-primary p-3 hover:bg-my-gray-dark'
              >
                <Image
                  id={`book_${index}`}
                  className='h-48 w-44 '
                  alt='books cover'
                  src={elem.cover}
                  width={144}
                  height={144}
                />
                <StaticRatingStars
                  className='mx-auto h-fit w-28 pt-2'
                  bookRating={elem.global_rating}
                />
              </Link>
            </div>
          );
        })}
      </div>
      <div>
        {reviewPostsRes && (
          <Paginator
            objectRes={reviewPostsRes}
            setCurrentUrl={setCurrentUrl}
            totalNumber={bookCount}
          />
        )}
      </div>
    </div>
  );
}
