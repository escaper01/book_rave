import StaticRatingStars from '@/components/UI/StaticRatingStars';
import ProgressBar from '@/components/UI/ProgressBar';
import ReviewsList from '@/components/UI/ReviewsList';

export default function BookRatingStatus() {
  return (
    <div className='border-my-gray-dark mt-5  border-t-1 py-5'>
      <div className='max-w-screen-sm'>
        <span className='text-xl font-medium'>Community Reviews</span>
        <div className='mb-2 flex flex-col items-center sm:flex-row'>
          <StaticRatingStars _className='' bookRating={2} />
          <div className='mx-5 mb-2 text-center text-3xl sm:mb-0'>4.15</div>
          <div className='text-nowrap text-xs'>
            108,663 ratings . 15,162 reviews
          </div>
        </div>

        <div className='max-w-lg'>
          <div className='mb-3 flex items-center text-nowrap'>
            <div className='font-semibold underline'>5 stars</div>
            <ProgressBar className='mx-3' progress={65} />
            <div className='font-extralight'>41,473 (38%)</div>
          </div>
          <div className='mb-3 flex items-center text-nowrap'>
            <div className='font-semibold underline'>4 stars</div>
            <ProgressBar className='mx-3' progress={34} />
            <div className='font-extralight'>41,473 (38%)</div>
          </div>
          <div className='mb-3 flex items-center text-nowrap'>
            <div className='font-semibold underline'>3 stars</div>
            <ProgressBar className='mx-3' progress={76} />
            <div className='font-extralight'>41,473 (38%)</div>
          </div>
          <div className='mb-3 flex items-center text-nowrap'>
            <div className='font-semibold underline'>2 stars</div>
            <ProgressBar className='mx-3' progress={87} />
            <div className='font-extralight'>41,473 (38%)</div>
          </div>
          <div className=' flex items-center text-nowrap'>
            <div className='font-semibold underline'>1 stars</div>
            <ProgressBar className='mx-3' progress={12} />
            <div className='font-extralight'>41,473 (38%)</div>
          </div>
        </div>
      </div>
      <ReviewsList />
    </div>
  );
}
