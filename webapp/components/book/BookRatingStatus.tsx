import StaticRatingStars from '@/components/book/StaticRatingStars';
import ProgressBar from '@/components/review/ProgressBar';
import ReviewsList from '@/components/review/ReviewsList';
import { ReviewFormType } from '@/utils/types/ReviewTypes';
import Image from 'next/image';
import useSWRImmutable from 'swr/immutable';
import { BASE_URL } from '@/utils/constants/config';
import { getData } from '@/utils/constants/api';
import { useState } from 'react';
import { count } from 'console';

export default function BookRatingStatus({ info }: { info: ReviewFormType }) {
  const [relatedReviews, setRelatedReviews] = useState<ReviewFormType[] | []>();
  const [reviewsNum, setReviewsNum] = useState();
  const { isLoading: isRelatedReviewsLoading } = useSWRImmutable(
    info?.book ? `${BASE_URL}/review/all-reviews/${info.book}` : null,
    getData,
    {
      onSuccess: (data) => {
        console.log(data, 'related reviews  ');
        setRelatedReviews(data.results);
        setReviewsNum(data.count);
      },
    }
  );

  const all_ratings = [
    info.five_star_ratings,
    info.four_star_ratings,
    info.three_star_ratings,
    info.two_star_ratings,
    info.one_star_ratings,
  ];

  let ratings_total = all_ratings.reduce(function (a, b) {
    return a + b;
  });
  return (
    <div className='mt-5 border-t-1  border-my-gray-dark py-5'>
      <div className='w-full'>
        <Image
          className='mx-auto min-w-[80px]'
          alt=''
          src={info?.book_cover as string}
          height={100}
          width={100}
        />
      </div>
      <div className='max-w-screen-sm'>
        <span className='text-xl font-medium'>Community Reviews</span>
        <div className='mb-2 flex flex-col items-center sm:flex-row'>
          <StaticRatingStars bookRating={Math.floor(info.global_rating)} />
          <div className='mx-5 mb-2 text-center text-3xl sm:mb-0'>
            {info.global_rating.toFixed(1)}
          </div>
          <div className='text-nowrap text-xs'>
            {ratings_total} ratings . {reviewsNum} reviews
          </div>
        </div>

        <div className='max-w-lg'>
          <div className='mb-3 flex items-center text-nowrap'>
            <div className='font-semibold underline'>5 stars</div>
            <ProgressBar
              className='mx-3'
              progress={(info.five_star_ratings / ratings_total) * 100}
            />
            <div className='font-extralight'>
              {info.five_star_ratings} (
              {((info.five_star_ratings / ratings_total) * 100).toFixed(1)}%)
            </div>
          </div>
          <div className='mb-3 flex items-center text-nowrap'>
            <div className='font-semibold underline'>4 stars</div>
            <ProgressBar
              className='mx-3'
              progress={(info.four_star_ratings / ratings_total) * 100}
            />
            <div className='font-extralight'>
              {info.four_star_ratings} (
              {((info.four_star_ratings / ratings_total) * 100).toFixed(1)}%)
            </div>
          </div>
          <div className='mb-3 flex items-center text-nowrap'>
            <div className='font-semibold underline'>3 stars</div>
            <ProgressBar
              className='mx-3'
              progress={(info.three_star_ratings / ratings_total) * 100}
            />
            <div className='font-extralight'>
              {info.three_star_ratings} (
              {((info.three_star_ratings / ratings_total) * 100).toFixed(1)}%)
            </div>
          </div>
          <div className='mb-3 flex items-center text-nowrap'>
            <div className='font-semibold underline'>2 stars</div>
            <ProgressBar
              className='mx-3'
              progress={(info.two_star_ratings / ratings_total) * 100}
            />
            <div className='font-extralight'>
              {info.two_star_ratings} (
              {((info.two_star_ratings / ratings_total) * 100).toFixed(1)}%)
            </div>
          </div>
          <div className=' flex items-center text-nowrap'>
            <div className='font-semibold underline'>1 stars</div>
            <ProgressBar
              className='mx-3'
              progress={(info.one_star_ratings / ratings_total) * 100}
            />
            <div className='font-extralight'>
              {info.one_star_ratings} (
              {((info.one_star_ratings / ratings_total) * 100).toFixed(1)}%)
            </div>
          </div>
        </div>
      </div>

      {relatedReviews && reviewsNum && (
        <ReviewsList
          relatedReviews={relatedReviews as ReviewFormType[]}
          count={reviewsNum}
        />
      )}
    </div>
  );
}
