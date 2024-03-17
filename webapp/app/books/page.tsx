'use client';

import Image from 'next/image';
import Link from 'next/link';
import StaticRatingStars from '@/components/book/StaticRatingStars';
import useSWR from 'swr';
// import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { BASE_URL } from '@/utils/constants/config';
import { BookFormType, ReviewsResponseType } from '@/utils/types/BookTypes';
import { getData } from '@/utils/constants/api';

export default function Trending() {
  const [currentUrl, setCurrentUrl] = useState(`${BASE_URL}/book/all-books`);

  const [postedBooks, setPostedBooks] = useState<BookFormType[] | []>([]);
  const { data: reviewPostsRes, isLoading } = useSWR(currentUrl, getData, {
    onSuccess: (data: ReviewsResponseType) => {
      setPostedBooks(data.results);
      console.log(data, 'got posted books');
    },
  });

  if (isLoading) {
    return <div>loading books</div>;
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
          <nav className=''>
            <ul className='flex justify-center'>
              {reviewPostsRes.previous && (
                <li>
                  <button
                    onClick={() => setCurrentUrl(reviewPostsRes.previous)}
                    className='ml-0 rounded-l-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                  >
                    Previous
                  </button>
                </li>
              )}

              {reviewPostsRes.next && (
                <li>
                  <button
                    onClick={() => setCurrentUrl(reviewPostsRes.next)}
                    className='rounded-r-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                  >
                    Next
                  </button>
                </li>
              )}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}
