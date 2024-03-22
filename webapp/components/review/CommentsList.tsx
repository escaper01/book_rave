import StaticRatingStars from '@/components/book/StaticRatingStars';
import Image from 'next/image';
import { CommentFormType } from '@/utils/types/CommentType';
import { ReviewFormType } from '@/utils/types/ReviewTypes';

export default function CommentsList({
  relatedComments,
  count,
}: {
  relatedComments: CommentFormType[] | ReviewFormType[] | [];
  count: number;
}) {
  return (
    <div className='my-3'>
      <span className='text-xs font-normal capitalize'>
        {count} {count > 1 ? 'comments' : 'comment'}
      </span>
      <div>
        {relatedComments.map((elem, index) => {
          return (
            <div
              key={index}
              className='grid grid-cols-6 gap-x-3 border-b-1 py-4 sm:grid-cols-7 '
            >
              <div className='col-span-1'>
                {elem.owner_profile_pic && (
                  <Image
                    className='mx-auto h-14 w-14 min-w-14  rounded-full object-cover'
                    width={50}
                    height={50}
                    src={elem.owner_profile_pic as string}
                    alt='profile pic'
                  />
                )}

                <h3 className='py-2 text-center text-xs font-bold tracking-wider'>
                  {elem.added_by}
                </h3>
              </div>
              <div className='col-span-5 col-start-2 sm:col-span-6'>
                <div className='flex justify-end'>
                  <h3 className='pb-2 text-xs font-light hover:cursor-pointer hover:underline'>
                    {elem.created_at}
                  </h3>
                </div>
                <p className='text-pretty break-words'>{elem.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
