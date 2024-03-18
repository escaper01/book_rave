import StaticRatingStars from '@/components/book/StaticRatingStars';
import ProgressBar from '@/components/review/ProgressBar';
import CommentsList from '@/components/review/CommentsList';
import { ReviewFormType } from '@/utils/types/ReviewTypes';
import Image from 'next/image';
import useSWRImmutable from 'swr/immutable';
import { BASE_URL } from '@/utils/constants/config';
import { getData } from '@/utils/constants/api';
import { useState } from 'react';
import { CommentFormType } from '@/utils/types/CommentType';
import { Dispatch, SetStateAction } from 'react';

export default function BookRatingStatus({
  info,
  relatedCommentsState,
}: {
  info: ReviewFormType;
  relatedCommentsState: [
    CommentFormType[] | undefined,
    Dispatch<SetStateAction<[] | CommentFormType[] | undefined>>,
  ];
}) {
  const [currentUrl, setCurrentUrl] = useState(
    `${BASE_URL}/comment/all-comments/${info.id}`
  );
  const [relatedComments, setRelatedComments] = relatedCommentsState;

  const [commentsNum, setCommentsNum] = useState();
  const { data: relatedReviewsRes, isLoading: isRelatedReviewsLoading } =
    useSWRImmutable(currentUrl, getData, {
      onSuccess: (data) => {
        console.log(data, 'related reviews  ');
        setRelatedComments(data.results);
        setCommentsNum(data.count);
      },
    });

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
    <div className='py-5'>
      <div className='grid grid-cols-1 items-center border-y-1  border-my-gray-dark  py-5 md:grid-cols-4'>
        <div className='col-span-3'>
          <span className='text-xl font-medium'>Community Reviews</span>
          <div className='mb-2 flex flex-col items-center sm:flex-row'>
            <StaticRatingStars bookRating={Math.floor(info.global_rating)} />
            <div className='mx-5 mb-2 text-center text-3xl sm:mb-0'>
              {info.global_rating.toFixed(1)}
            </div>
            <div className='text-nowrap text-xs'>
              {ratings_total} ratings . {commentsNum} reviews
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
        <div className='col-span-1 mt-0 sm:mt-3'>
          {info?.book_cover && (
            <Image
              className='mx-auto min-w-[80px]'
              alt=''
              src={info?.book_cover as string}
              height={130}
              width={130}
            />
          )}
        </div>
      </div>
      {relatedComments && commentsNum && (
        <div>
          <CommentsList
            relatedComments={relatedComments as CommentFormType[]}
            count={commentsNum}
          />
          {relatedReviewsRes && (
            <nav className=''>
              <ul className='flex justify-center'>
                {relatedReviewsRes.previous && (
                  <li>
                    <button
                      onClick={() => setCurrentUrl(relatedReviewsRes.previous)}
                      className='ml-0 rounded-l-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                    >
                      Previous
                    </button>
                  </li>
                )}

                {relatedReviewsRes.next && (
                  <li>
                    <button
                      onClick={() => setCurrentUrl(relatedReviewsRes.next)}
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
      )}
    </div>
  );
}
