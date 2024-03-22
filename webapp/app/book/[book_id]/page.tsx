'use client';

import Image from 'next/image';
import BookRatingStatus from '@/components/book/BookRatingStatus';
import BookDetails from '@/components/book/BookDetails';
import useSWRImmutable from 'swr/immutable';
import { BASE_URL } from '@/utils/constants/config';
import { getDataAuth, getData } from '@/utils/constants/api';
import { useState } from 'react';
import { useAuthStore } from '@/utils/store/store_auth';
import { useEffect } from 'react';
import { BookFormType } from '@/utils/types/BookTypes';
import { CommentFormType } from '@/utils/types/CommentType';
import PostReview from '@/components/review/PostReview';
import PostComment from '@/components/review/PostComment';

export default function Book({ params }: { params: { book_id: number } }) {
  const [showReviewBook, setShowReviewBook] = useState(false);
  const user = useAuthStore((state) => state.user);

  const [isElligibleToReview, setIsElligibleToComment] = useState(
    user.username ? true : false
  );
  const [bookDetails, setBookDetails] = useState<BookFormType | undefined>();
  const [relatedComments, setRelatedComments] = useState<CommentFormType[]>();
  const { isLoading: isBookDetailsResLoading } = useSWRImmutable(
    `${BASE_URL}/book/get-book/${params.book_id}`,
    getData,
    {
      onSuccess: (data) => {
        setBookDetails(data);
      },
      onError: (err) => {
        console.log(err, 'book details err');
      },
    }
  );

  const { isLoading } = useSWRImmutable(
    bookDetails?.id
      ? `${BASE_URL}/review/is-ellegible-to-review/${bookDetails?.id}`
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

  return (
    <div className='mx-5 grow py-3 sm:py-6'>
      <div className='flex justify-end'>
        {isElligibleToReview && (
          <button
            onClick={() => setShowReviewBook(true)}
            className='mb-5 rounded-full bg-black px-6 py-2 capitalize text-white'
          >
            review book
          </button>
        )}
      </div>
      {bookDetails?.id && showReviewBook && (
        <PostReview
          book_cover={bookDetails.cover}
          relatedComments={relatedComments}
          setRelatedComments={setRelatedComments}
          setShowReviewBook={setShowReviewBook}
          book_id={bookDetails?.id}
        />
      )}

      {bookDetails?.name && (
        <div className='grid max-w-screen-lg gap-6 md:mx-auto lg:grid-cols-4 lg:grid-rows-1 lg:gap-0'>
          <div className='col-span-3 mx-auto  lg:col-span-1'>
            {bookDetails?.cover && (
              <Image
                className='min-w-[230px]'
                alt={bookDetails.name}
                src={bookDetails?.cover as string}
                height={300}
                width={200}
              />
            )}
          </div>
          <div className='col-span-3'>
            <BookDetails info={bookDetails as BookFormType} />
            {/* {isElligibleToReview && (
              <PostComment review_id={bookDetails.id as number} />
            )} */}
            <BookRatingStatus
              url={`${BASE_URL}/review/all-reviews/${bookDetails.id}`}
              page='book'
              info={bookDetails as BookFormType}
              relatedCommentsState={[relatedComments, setRelatedComments]}
            />
          </div>
        </div>
      )}
    </div>
  );
}