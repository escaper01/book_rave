import useSWR from 'swr';
import useSWRImmutable from 'swr/immutable';
import useSWRMutation from 'swr/mutation';
import { useState } from 'react';
import { FavBookType } from '@/utils/types/FavTypes';
import Flicking from '@egjs/react-flicking';
import Image from 'next/image';
import Link from 'next/link';
import { BASE_URL } from '@/utils/constants/config';
import { getData, getDataAuth, postDataAuth } from '@/utils/constants/api';

export default function FavManager() {
  const [favBooks, setFavBooks] = useState<FavBookType[] | undefined>();

  //   const {trigger:startAddingFavBooks} = useSWRMutation(`${BASE_URL}/favorite/add-favorite/311`, postDataAuth, {
  // 	onSuccess: (data) => {
  // 		// add the returned data to fav data
  // 	}
  //   })

  const { isLoading } = useSWR(
    `${BASE_URL}/favorite/favorite-list`,
    getDataAuth,
    {
      onSuccess: (data) => {
        console.log(data, 'data');
        setFavBooks(data);
      },
    }
  );
  return (
    <div>
      <div className='my-4'>
        <h1 className='mb-2 text-xl font-bold capitalize'>my Favorite books</h1>
        {favBooks && favBooks.length > 0 && (
          <Flicking
            deceleration={0.0055}
            align='prev'
            circular={true}
            hideBeforeInit={true}
          >
            {favBooks.map((book, _i) => {
              return (
                <Link href={`book/${book.book_id}`} key={_i}>
                  <Image
                    style={{ width: 'auto' }}
                    className='h-full px-2'
                    src={book.book_cover}
                    width={100}
                    height={100}
                    alt={`book_${book.book_id}`}
                  />
                </Link>
              );
            })}
          </Flicking>
        )}
      </div>
    </div>
  );
}
