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
import { CommentFormType } from '@/utils/types/CommentType';

export default function Review({ params }: { params: { review_id: number } }) {
  const user = useAuthStore((state) => state.user);
  const [relatedComments, setRelatedComments] = useState<
    CommentFormType[] | []
  >();

  const [reviewDetails, setReviewDetails] = useState<
    ReviewFormType | undefined
  >();

  const { isLoading: isReviewsLoading } = useSWRImmutable(
    `${BASE_URL}/review/get-review/${params.review_id}`,
    getData,
    {
      onSuccess: (data) => {
        console.log(data, 'related review details');
        setReviewDetails(data);
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
            {/*{user.username && (*/}
            {/*  <PostComment*/}
            {/*    review_id={reviewDetails.id as number}*/}
            {/*    relatedCommentsState={[relatedComments, setRelatedComments]}*/}
            {/*  />*/}
            {/*)}*/}
            {/*<BookRatingStatus*/}
            {/*  info={reviewDetails as ReviewFormType}*/}
            {/*  relatedCommentsState={[relatedComments, setRelatedComments]}*/}
            {/*/>*/}
          </div>
        </div>
      )}
    </div>
  );
}
