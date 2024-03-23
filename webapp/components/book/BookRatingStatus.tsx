import StaticRatingStars from '@/components/book/StaticRatingStars';
import ProgressBar from '@/components/review/ProgressBar';
import CommentsList from '@/components/review/CommentsList';
import { ReviewFormType } from '@/utils/types/ReviewTypes';
import Image from 'next/image';
import { BASE_URL } from '@/utils/constants/config';
import { getData } from '@/utils/constants/api';
import { useState } from 'react';
import { CommentFormType } from '@/utils/types/CommentType';
import { Dispatch, SetStateAction } from 'react';
import ReviewsStatistics from '../review/ReviewsStatistics';
import { BookFormType } from '@/utils/types/BookTypes';
import Paginator from '../UI/Paginator';
import useSWR from 'swr';

export default function BookRatingStatus({
  url,
  page,
  info,
  relatedCommentsState,
}: {
  url: string;
  page: string;
  info: ReviewFormType | BookFormType;
  relatedCommentsState: [
    CommentFormType[] | undefined,
    Dispatch<SetStateAction<[] | CommentFormType[] | undefined>>,
  ];
}) {
  const [currentUrl, setCurrentUrl] = useState(url);
  const [relatedComments, setRelatedComments] = relatedCommentsState;

  const [commentsNum, setCommentsNum] = useState(0);
  const { data: relatedReviewsRes, isLoading: isRelatedReviewsLoading } =
    useSWR(currentUrl, getData, {
      onSuccess: (data) => {
        setRelatedComments(data.results);
        setCommentsNum(data.count);
      },
    });

  const current_book_id =
    page === 'review'
      ? (info as ReviewFormType).book
      : (info as BookFormType).id;

  return (
    <div className='py-5'>
      <div className='grid grid-cols-1 items-center border-y-1  border-my-gray-dark  py-5 md:grid-cols-4'>
        <div className='col-span-3'>
          {<ReviewsStatistics book_id={current_book_id as number} />}
        </div>
        <div className='col-span-1 mt-0 sm:mt-3'>
          {page === 'review' && (
            <Image
              className='mx-auto min-w-[80px]'
              alt=''
              src={(info as ReviewFormType).book_cover}
              height={130}
              width={130}
            />
          )}
        </div>
      </div>

      {relatedComments && (
        <div>
          <CommentsList
            relatedComments={
              relatedComments as CommentFormType[] | ReviewFormType[]
            }
            count={commentsNum}
          />
          {relatedReviewsRes && (
            <Paginator
              objectRes={relatedReviewsRes}
              setCurrentUrl={setCurrentUrl}
              totalNumber={commentsNum}
            />
          )}
        </div>
      )}
    </div>
  );
}
