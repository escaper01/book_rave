import { cn } from '@/utils/constants/func';
export default function StaticRatingStars({
  className,
  bookRating,
}: {
  className?: string;
  bookRating: number;
}) {
  if (bookRating >= 0) {
    const coloredStars = Array(bookRating).fill(1);
    const unColoredStars = Array(5 - bookRating).fill(1);

    return (
      <div className={cn(className, ' max-w-[150px]')}>
        <div className='flex justify-between'>
          {coloredStars.map((_, i) => {
            return (
              <svg
                key={i}
                id={`star_${i + 1}`}
                className='h-fit w-[50px] text-my-yellow-dark '
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
              </svg>
            );
          })}

          {unColoredStars.map((_, i) => {
            return (
              <svg
                key={i}
                id={`star_${bookRating + 1 + i}`}
                className='h-fit w-[50px] text-gray-300 dark:text-gray-500'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
              </svg>
            );
          })}
        </div>
      </div>
    );
  }
}
