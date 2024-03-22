import StaticRatingStars from '@/components/book/StaticRatingStars';
import { BookFormType } from '@/utils/types/BookTypes';

export default function BookDetails({ info }: { info: BookFormType }) {
  return (
    <div className='mb-5'>
      <h1 className='text-4xl font-semibold'>{info.name}</h1>
      
      <div>
        <StaticRatingStars bookRating={info.global_rating} />
      </div>
      <p className='font-normal'>{info.description}</p>
    </div>
  );
}
