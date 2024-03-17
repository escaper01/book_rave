import StaticRatingStars from '@/components/book/StaticRatingStars';
import { ReviewFormType } from '@/utils/types/ReviewTypes';

export default function BookDetails({ info }: { info: ReviewFormType }) {
  return (
    <div className='mb-5'>
      <h1 className='text-4xl font-semibold'>{info.title}</h1>
      <h3 className='text-2xl font-extralight'>{info.posted_by}</h3>
      <div>
        <StaticRatingStars bookRating={info.rating} />
      </div>
      <p className='font-normal'>{info.content}</p>
    </div>
  );
}
