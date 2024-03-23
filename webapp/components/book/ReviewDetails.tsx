import StaticRatingStars from '@/components/book/StaticRatingStars';
import { ReviewFormType } from '@/utils/types/ReviewTypes';
import { RemoveSvg, SaveSvg } from '@/utils/constants/svg_library';
import useSWRMutation from 'swr/mutation';
import { getDataAuth, postDataAuth } from '@/utils/constants/api';
import { BASE_URL } from '@/utils/constants/config';
import toast, { Toaster } from 'react-hot-toast';
import { useAuthStore } from '@/utils/store/store_auth';
import useSWRImmutable from 'swr/immutable';
import { useState } from 'react';

export default function ReviewDetails({ info }: { info: ReviewFormType }) {
  const user = useAuthStore((state) => state.user);
  const [isBookMarked, setIsBookMarked] = useState(false);

  const { isLoading } = useSWRImmutable(
    `${BASE_URL}/favorite/bookmark-checker/${info.book}`,
    getDataAuth,
    {
      onSuccess: (data) => {
        if (data.status === 200) {
          setIsBookMarked(true);
        } else {
          setIsBookMarked(false);
        }
      },
    }
  );
  const { trigger: startAddingFavBooks } = useSWRMutation(
    `${BASE_URL}/favorite/add-favorite/${info.book}`,
    postDataAuth,
    {
      onSuccess: (data) => {
        // add the returned data to fav data
        console.log(data);
        if (data.message) {
          toast.error(`book removed from my FavList`);
          setIsBookMarked(false);
        } else {
          toast.success(`book saved to my FavList`);
          setIsBookMarked(true);
        }
      },
    }
  );
  return (
    <div className='mb-5'>
      <h1 className='text-4xl font-semibold'>{info.title}</h1>
      <div className='flex justify-between'>
        <h3 className='text-2xl font-extralight'>{info.added_by}</h3>
        {user.username && (
          <span>
            {!isBookMarked && (
              <SaveSvg
                onClick={() => startAddingFavBooks()}
                className='h-7 w-7 hover:cursor-pointer'
              />
            )}
            {isBookMarked && (
              <RemoveSvg
                onClick={() => startAddingFavBooks()}
                className='h-7 w-7 hover:cursor-pointer'
              />
            )}
          </span>
        )}
      </div>
      <div>
        <StaticRatingStars bookRating={info.rating} />
      </div>
      <p className='font-normal'>{info.content}</p>
      <Toaster />
    </div>
  );
}
