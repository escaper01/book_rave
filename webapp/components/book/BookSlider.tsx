'use client';

import Flicking from '@egjs/react-flicking';
import '@egjs/react-flicking/dist/flicking.css';
import { BASE_URL } from '@/utils/constants/config';
import Image from 'next/image';
import Link from 'next/link';
import { getData, postData } from '@/utils/constants/api';
import { useState } from 'react';
import { BookFormType } from '@/utils/types/BookTypes';
import useSWRImmutable from 'swr/immutable';
import LoadingPage from '../UI/LoadingPage';

export default function BookSlider({ query }: { query: string }) {
  const [books, setBooks] = useState<BookFormType[] | undefined>();

  const { isLoading } = useSWRImmutable(
    `${BASE_URL}/book/bundled_books/${query}`,
    getData,
    {
      onSuccess: (data) => {
        setBooks(data);
      },
    }
  );

  if (isLoading) return <LoadingPage />;
  return (
    <div className='drop-shadow-2xl'>
      {books && (
        <Flicking
          deceleration={0.0055}
          align='prev'
          circular={true}
          hideBeforeInit={true}
        >
          {books.map((book, _i) => {
            return (
              <Link href={`book/${book.id}`} key={_i}>
                <Image
                  style={{ width: 'auto' }}
                  className='h-full px-2'
                  src={book.cover}
                  width={100}
                  height={100}
                  alt={book.name}
                />
              </Link>
            );
          })}
        </Flicking>
      )}
    </div>
  );
}
