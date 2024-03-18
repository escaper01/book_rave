'use client';
import { useState } from 'react';
import ReviewPost from '@/components/review/ReviewPost';
import useSWR from 'swr';
import { BASE_URL } from '@/utils/constants/config';
import { getData } from '@/utils/constants/api';
import { ReviewFormType, ReviewsResponseType } from '@/utils/types/ReviewTypes';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [currentUrl, setCurrentUrl] = useState(
    `${BASE_URL}/review/all-reviews`
  );

  const [reviewPosts, setReviewPosts] = useState<ReviewFormType[] | []>([]);
  const { data: reviewPostsRes } = useSWR(currentUrl, getData, {
    onSuccess: (data: ReviewsResponseType) => {
      setReviewPosts(data.results);
      console.log(data, 'got post reviews');
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
