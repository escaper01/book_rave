'use client';
import { useState } from 'react';
import ReviewPost from '@/components/review/ReviewPost';
import useSWR from 'swr';
import { BASE_URL } from '@/utils/constants/config';
import { getData } from '@/utils/constants/api';
import { ReviewFormType, ReviewsResponseType } from '@/utils/types/ReviewTypes';
import { useRouter } from 'next/navigation';
import Paginator from '@/components/UI/Paginator';
import PostReview from '@/components/review/PostReview';

export default function Home() {
  const [currentUrl, setCurrentUrl] = useState(
    `${BASE_URL}/review/all-reviews`
  );
  const [reviewsCount, setReviewsCount] = useState(0);

  const [reviewPosts, setReviewPosts] = useState<ReviewFormType[] | []>([]);
  const { data: reviewPostsRes } = useSWR(currentUrl, getData, {
    onSuccess: (data: ReviewsResponseType) => {
      // console.log(data, 'trending posts');
      setReviewPosts(data.results);
      setReviewsCount(data.count);
    },
  });

  return (
    <div className=' grow bg-my-khaki-light '>
      <div className='mx-auto max-w-screen-md py-5'>
        <div className='mt-8'>
          {reviewPosts.map((elem, index) => {
            return <ReviewPost key={index} data={elem} />;
          })}
          {reviewPosts.length === 0 && <div>no results</div>}
        </div>

        {reviewPostsRes && (
          <Paginator
            objectRes={reviewPostsRes}
            setCurrentUrl={setCurrentUrl}
            totalNumber={reviewsCount}
          />
        )}
      </div>
    </div>
  );
}
