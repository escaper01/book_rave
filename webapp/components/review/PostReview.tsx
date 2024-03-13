import { useState } from 'react';
import DynamicRatingStars from '@/components/book/DynamicRatingStars';

export default function PostReview() {
  const [bookRating, setBookRating] = useState<number>(0);
  return (
    <div className='h-fit border-t-1 border-my-gray-dark py-5'>
      <div className=''>
        <div className='text-xl font-medium'>Post Review</div>
        <form className='mx-auto max-w-sm'>
          <div className='flex flex-col'>
            <h2>Rating: </h2>

            <DynamicRatingStars
              _className=''
              bookRating={bookRating}
              setBookRating={setBookRating}
            />

            <h2>Description: </h2>
            <textarea
              name='review'
              className='mb-4 border-1 border-my-gray-dark p-2'
              rows={5}
              required
            />
          </div>
          <button
            type='submit'
            className='rounded-full bg-black px-6 py-2 text-white'
          >
            post my review
          </button>
        </form>
      </div>
    </div>
  );
}
