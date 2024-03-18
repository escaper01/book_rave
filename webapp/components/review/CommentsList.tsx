import StaticRatingStars from '@/components/book/StaticRatingStars';
import Image from 'next/image';
import { CommentFormType } from '@/utils/types/CommentType';

export default function CommentsList({
  relatedComments,
  count,
}: {
  relatedComments: CommentFormType[] | [];
  count: number;
}) {
  return (
    <div className='my-3'>
      <span className='text-xs font-normal'>{count} reviews</span>

      <div>
        {relatedComments.map((elem: CommentFormType, index) => {
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
                  src={elem.owner_profile_pic as string}
                  alt='profile pic'
                />
                <h3 className='py-2 text-xs font-bold tracking-wider'>
                  {elem.posted_by}
                </h3>
              </div>
              <div className='col-span-6 col-start-2'>
                <div className='flex justify-end'>
                  <h3 className='text-xs font-light hover:cursor-pointer hover:underline'>
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
