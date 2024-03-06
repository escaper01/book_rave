'use client';

import Image from 'next/image';
import RatingStars from '@/components/UI/StaticRatingStars';
import BookRatingStatus from '@/components/UI/BookRatingStatus';
import BookDetails from '@/components/UI/BookDetails';
import ReviewsList from '@/components/UI/ReviewsList';
import PostReview from '@/components/UI/PostReview';
export default function Review({
  params,
}: {
  params: { review_name: string };
}) {
  // console.log(params.review_name);
  return (
    <div className='mx-5 grow py-5 sm:py-10'>
      <div className='grid max-w-screen-lg gap-6 md:mx-auto lg:grid-cols-4 lg:grid-rows-1 lg:gap-0'>
        <div className='col-span-3 mx-auto lg:col-span-1'>
          <Image
            alt='bk image'
            src={
              'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/romance-love-book-cover-design-template-1a3c7d9d576e8d5e0c79918ac44b2874.webp?ts=1698540908'
            }
            height={300}
            width={200}
          />
        </div>
        <div className='col-span-3'>
          <BookDetails />
          <PostReview />
          <BookRatingStatus />
        </div>
      </div>
    </div>
  );
}
