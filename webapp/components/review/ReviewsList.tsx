import StaticRatingStars from '@/components/book/StaticRatingStars';
import RatingStars from '@/components/book/StaticRatingStars';
import Image from 'next/image';
import { ReviewFormType } from '@/utils/types/ReviewTypes';

export default function ReviewsList({
  relatedReviews,
  count,
}: {
  relatedReviews: ReviewFormType[] | [];
  count: number;
}) {
  return (
    <div className='my-3'>
      <span className='text-xs font-normal'>{count} reviews</span>

      <div>
        {relatedReviews.map((elem, index) => {
          return (
            <div
              key={index}
              className='grid grid-cols-7 gap-x-3 border-b-1 py-4 '
            >
              <div className='col-span-1'>
                <Image
                  className='h-14 w-14 rounded-full object-cover'
                  width={50}
                  height={50}
                  src={elem.owner_profile_pic}
                  alt='profile pic'
                />
                <h3 className='py-2 text-xs font-bold tracking-wider'>
                  {elem.posted_by}
                </h3>
              </div>
              <div className='col-span-6 col-start-2'>
                <div className='flex justify-between'>
                  <StaticRatingStars
                    bookRating={elem.rating}
                    className='w-28 max-w-[90px]'
                  />
                  <h3 className='hover:cursor-pointer hover:underline'>
                    {elem.created_at}
                  </h3>
                </div>
                <p className=''>{elem.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
