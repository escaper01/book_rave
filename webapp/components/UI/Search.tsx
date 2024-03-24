import { useEffect, useState } from 'react';
import useSWRMutation from 'swr/mutation';
import { postData } from '@/utils/constants/api';
import { BASE_URL } from '@/utils/constants/config';
import Link from 'next/link';
import { FavBookType } from '@/utils/types/FavTypes';
import { BookFormType } from '@/utils/types/BookTypes';
import { LoadingSpinner } from '@/utils/constants/svg_library';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Search() {
  const router = useRouter();
  const [showResults, setShowResults] = useState(false);
  const [query, setQuery] = useState('');
  const [bookResults, setBookResults] = useState<BookFormType[] | undefined>();
  const [isClicked, setIsClicked] = useState(false);

  const { trigger: startSearchingQuery, isMutating } = useSWRMutation(
    `${BASE_URL}/book/search`,
    postData,
    {
      onSuccess: (data) => {
        setShowResults(true);
        delete data['status'];
        setBookResults(Object.values(data));
      },
    }
  );

  const startSearching = (query: string) => {
    if (query === '') {
      setQuery(query);
      setShowResults(false);
      return;
    }
    setQuery(query);
    startSearchingQuery({ query });
  };
  return (
    <div
      className='relative hidden w-full max-w-md sm:inline-flex'
      onBlur={() => {
        if (isClicked) {
          setShowResults(false);
        }
      }}
    >
      <div className='flex h-10 w-full items-center rounded border border-gray-200 bg-white'>
        <input
          onChange={(e) => startSearching(e.target.value)}
          value={query}
          name='query'
          id='query'
          className='w-full appearance-none px-4 text-gray-800 outline-none'
          autoComplete={'off'}
        />
        {isMutating && (
          <div className=' animate-spin'>
            <LoadingSpinner className='h-9 w-9' />
          </div>
        )}
      </div>
      {showResults && (
        <div className='absolute top-10 mt-1  w-full flex-col overflow-hidden rounded border border-gray-200 bg-white shadow peer-checked:flex'>
          {bookResults &&
            Object.values(bookResults).length > 0 &&
            bookResults.map((book) => {
              return (
                <div className='group cursor-pointer' key={book.id}>
                  <div
                    onClick={() => {
                      setIsClicked(true);
                      router.push(`/book/${book.id}`);
                    }}
                    className='flex items-center justify-normal border-l-4 border-transparent p-2 group-hover:border-blue-600 group-hover:bg-gray-100'
                  >
                    <Image
                      className='mx-2.5 h-11 w-11 min-w-11 rounded-full object-fill'
                      alt={book.name as string}
                      src={book.cover as string}
                      width={100}
                      height={100}
                    />
                    {book.name}
                  </div>
                </div>
              );
            })}

          {bookResults && Object.values(bookResults).length == 0 && (
            <div>no such book</div>
          )}
        </div>
      )}
    </div>
  );
}
