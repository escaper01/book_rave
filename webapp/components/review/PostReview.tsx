import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import useSWRMutation from 'swr/mutation';
import { postFormAuth } from '@/utils/constants/api';
import { BASE_URL } from '@/utils/constants/config';
import toast, { Toaster } from 'react-hot-toast';
import { ReviewSchema } from '@/utils/schemes/review_schema';
import { ReviewSchemaType } from '@/utils/types/ReviewTypes';
import DynamicRatingStars from '../book/DynamicRatingStars';
import { useState, Dispatch, SetStateAction } from 'react';
import { CommentFormType } from '@/utils/types/CommentType';
import Image from 'next/image';

export default function PostReview({
  book_cover,
  book_id,
  setShowReviewBook,
  setRelatedComments,
  relatedComments,
}: {
  book_cover: string;
  book_id: number;
  setShowReviewBook: Dispatch<SetStateAction<boolean>>;
  setRelatedComments: Dispatch<
    SetStateAction<[] | CommentFormType[] | undefined>
  >;
  relatedComments: CommentFormType[] | undefined;
}) {
  const [reviewRating, setReviewRating] = useState(0);
  const {
    setError,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ReviewSchemaType>({
    resolver: zodResolver(ReviewSchema),
  });

  const { isMutating, trigger: startPstingNewReview } = useSWRMutation(
    `${BASE_URL}/review/add_review/${book_id}`,
    postFormAuth,
    {
      onSuccess: (data) => {
        // console.log(data, 'success post');

        if (relatedComments) {
          setRelatedComments([data, ...relatedComments]);
        } else {
          setRelatedComments([data]);
        }

        setShowReviewBook(false);
      },
    }
  );

  const onSubmit: SubmitHandler<ReviewSchemaType> = (data) => {
    if (reviewRating === 0) {
      //       console.log('rating error');
      setError('rating', { message: 'you have to choose a rating' });
    } else {
      //       console.log(data, 'submited data');
      startPstingNewReview({
        ...data,
        media: data.media.item(0),
        rating: reviewRating,
        book: book_id,
      });
    }
  };

  return (
    <div>
      <div className='flex  items-center justify-center'>
        <div>
          <div className='fixed inset-0 z-10 flex items-center justify-center overflow-hidden px-2'>
            <div className='absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>
            <div className='z-50 w-full max-w-screen-sm overflow-hidden rounded-md bg-white  shadow-xl sm:w-96 md:w-1/2 lg:w-2/3 xl:w-1/3'>
              <div className='flex justify-between bg-indigo-500 px-5 py-2 text-white'>
                <h2 className='text-lg font-semibold'>Post new review</h2>
              </div>
              <div className='flex justify-center pt-3'>
                <Image
                  src={book_cover}
                  width={300}
                  height={300}
                  alt='reviewd book'
                  className='max-w-20'
                />
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex w-full flex-col px-5 pb-5'
              >
                <div className=''>
                  <label htmlFor='rating' className='mb-0 block font-normal'>
                    rating
                  </label>

                  <DynamicRatingStars
                    _className='my-0'
                    bookRating={reviewRating}
                    setBookRating={setReviewRating}
                  />

                  {errors.rating && (
                    <p className='mt-1 text-xs italic text-red-500'>
                      {' '}
                      {errors.rating?.message}
                    </p>
                  )}
                </div>
                <div className='mb-2'>
                  <label htmlFor='title' className='mb-2 block font-normal'>
                    title
                  </label>
                  <input
                    id='title'
                    type='text'
                    placeholder='title'
                    className={
                      'w-full rounded-full border-1  border-black bg-my-gray-light px-3 py-2.5 hover:bg-my-gray-primary'
                    }
                    {...register('title')}
                  />
                  {errors.title && (
                    <p className='mt-1 text-xs italic text-red-500'>
                      {' '}
                      {errors.title?.message}
                    </p>
                  )}
                </div>

                <div className='my-2'>
                  <label htmlFor='content' className='mb-2 block font-normal'>
                    content
                  </label>
                  <textarea
                    {...register('content')}
                    className='w-full  border-1  border-black bg-my-gray-light px-3 py-2.5 hover:bg-my-gray-primary'
                    rows={5}
                    required
                  />
                  {errors.content && (
                    <p className='mt-1 text-xs italic text-red-500'>
                      {' '}
                      {errors.content?.message}
                    </p>
                  )}
                </div>
                <div className='my-2'>
                  <label htmlFor='media' className='mb-2 block font-normal'>
                    media
                  </label>
                  <input
                    accept='image/*'
                    type='file'
                    id='avatar'
                    placeholder='avatar'
                    className={
                      'w-full rounded-full border-1  border-black bg-my-gray-light px-3 py-2 hover:cursor-pointer hover:bg-my-gray-primary'
                    }
                    {...register('media')}
                  />

                  {errors.media && (
                    <p className='mt-1 text-xs italic text-red-500'>
                      {' '}
                      {errors.media?.message}
                    </p>
                  )}
                </div>

                <div className='mx-auto my-2 block font-normal'>
                  <button
                    disabled={isMutating}
                    type='submit'
                    className='mx-auto rounded-full  bg-black px-7 py-2.5 capitalize text-white'
                  >
                    post my review
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
