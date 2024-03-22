import useSWR from 'swr';
import { useState } from 'react';
import { FavBookType } from '@/utils/types/FavTypes';
import Image from 'next/image';
import Link from 'next/link';
import { BASE_URL } from '@/utils/constants/config';
import { getDataAuth } from '@/utils/constants/api';
import Paginator from '../UI/Paginator';

export default function FavManager() {
  const [favBooks, setFavBooks] = useState<FavBookType[] | undefined>();
  const [favBookNum, setFavBookNum] = useState(0);
  const [currentUrl, setCurrentUrl] = useState(
    `${BASE_URL}/favorite/favorite-list`
  );

  const { data: favBooksRes, isLoading } = useSWR(currentUrl, getDataAuth, {
    onSuccess: (data) => {
      setFavBooks(data.results);
      setFavBookNum(data.count);
    },
  });

  return (
    <div className='mx-auto'>
      <h1 className='mx-auto mb-2 mt-4 max-w-screen-sm text-xl font-bold capitalize'>
        my Favorite books
      </h1>
      <div className='mx-auto  grid max-w-screen-sm justify-center  gap-y-4 p-2  sm:grid-cols-2 lg:grid-cols-3'>
        {!isLoading && favBooks && favBooks.length === 0 && <div>no books</div>}
        {favBooks &&
          favBooks.map((elem, index) => {
            return (
              <div
                className='col-span-1 mx-5 min-w-[170px] hover:cursor-pointer'
                key={index}
              >
                <Link
                  href={`book/${elem.book_id}`}
                  className='relative mx-auto flex max-w-fit flex-col justify-center bg-my-gray-primary p-3 hover:bg-my-gray-dark'
                >
                  <Image
                    id={`book_${index}`}
                    className='h-48 max-w-36 '
                    alt='books cover'
                    src={elem.book_cover}
                    width={144}
                    height={144}
                  />
                </Link>
              </div>
            );
          })}
      </div>
      {favBooksRes && (
        <Paginator
          objectRes={favBooksRes}
          setCurrentUrl={setCurrentUrl}
          totalNumber={favBookNum}
        />
      )}
    </div>
  );
}
