'use client';

import Image from 'next/image';
import RatingStars from '@/components/book/StaticRatingStars';
import BookRatingStatus from '@/components/book/BookRatingStatus';
import BookDetails from '@/components/book/BookDetails';
import ReviewsList from '@/components/review/CommentsList';
import PostComment from '@/components/review/PostComment';
import useSWRImmutable from 'swr/immutable';
import { BASE_URL } from '@/utils/constants/config';
import { getDataAuth, getData } from '@/utils/constants/api';
import { useState } from 'react';
import { ReviewFormType } from '@/utils/types/ReviewTypes';
import { useAuthStore } from '@/utils/store/store_auth';

export default function Book({ params }: { params: { book_id: number } }) {
  const user = useAuthStore((state) => state.user);

  console.log(user, 'curer');

  const [isElligibleToReview, setIsElligibleToComment] = useState(
    user.username
  );
  const [reviewDetails, setReviewDetails] = useState<
    ReviewFormType | undefined
  >();

  const { isLoading } = useSWRImmutable(
    reviewDetails?.book
      ? `${BASE_URL}/review/is-ellegible-to-review/${reviewDetails?.book}`
      : null,
    getDataAuth,
    {
      onSuccess: (data) => {
        console.log(data, 'is elligible to review');
        if (data.status === 200) {
          setIsElligibleToComment(true);
        }
      },
      onError: (err) => {
        console.log(err, 'is elligible errrooooorrr');
        if (err.status === 400) {
          setIsElligibleToComment(false);
        }
      },
    }
  );

  if (isReviewsLoading) {
    return <div>loading book details</div>;
  }
  return (
    <div className='mx-5 grow py-5 sm:py-10'>
      {reviewDetails?.title && (
        <div className='grid max-w-screen-lg gap-6 md:mx-auto lg:grid-cols-4 lg:grid-rows-1 lg:gap-0'>
          <div className='col-span-3 mx-auto  lg:col-span-1'>
            {reviewDetails?.media && (
              <Image
                className='min-w-[230px]'
                alt=''
                src={reviewDetails?.media as string}
                height={300}
                width={200}
              />
            )}
          </div>
          <div className='col-span-3'>
            <BookDetails info={reviewDetails as ReviewFormType} />
            {isElligibleToReview && (
              <PostComment review_id={reviewDetails.id as number} />
            )}
            <BookRatingStatus info={reviewDetails as ReviewFormType} />
          </div>
        </div>
      )}
    </div>
  );
}
