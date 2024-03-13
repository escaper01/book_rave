import Image from 'next/image';
import Link from 'next/link';
import StaticRatingStars from '@/components/book/StaticRatingStars';

export default function Trending() {
  const AddBooktoFav = () => {
    console.log('');
  };
  return (
    <div className='grow'>
      <div className='container mx-auto grid max-w-screen-lg justify-center gap-y-4  p-5 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-6'>
        <div className='col-span-1 mx-3 hover:cursor-pointer'>
          <Link
            href={''}
            className='relative mx-auto mx-auto flex max-w-fit flex-col justify-center bg-my-gray-primary p-3 hover:bg-my-gray-dark'
          >
            <Image
              id='book_1'
              className=''
              alt='books cover'
              src={
                'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/romance-love-book-cover-design-template-1a3c7d9d576e8d5e0c79918ac44b2874.webp?ts=1698540908'
              }
              width={120}
              height={120}
            />
            <StaticRatingStars
              className='mx-auto h-fit w-28 pt-1'
              bookRating={3}
            />
          </Link>
        </div>
        <div className='col-span-1 mx-3 hover:cursor-pointer'>
          <Link
            href={''}
            className='relative mx-auto flex max-w-fit flex-col justify-center bg-my-gray-primary p-3 hover:bg-my-gray-dark'
          >
            <Image
              id='book_1'
              className=''
              alt='books cover'
              src={
                'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/romance-love-book-cover-design-template-1a3c7d9d576e8d5e0c79918ac44b2874.webp?ts=1698540908'
              }
              width={120}
              height={120}
            />
            <StaticRatingStars
              className='mx-auto h-fit w-28 pt-1'
              bookRating={3}
            />
          </Link>
        </div>
        <div className='col-span-1 mx-3 hover:cursor-pointer'>
          <Link
            href={''}
            className='relative mx-auto flex max-w-fit flex-col justify-center bg-my-gray-primary p-3 hover:bg-my-gray-dark'
          >
            <Image
              id='book_1'
              className=''
              alt='books cover'
              src={
                'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/romance-love-book-cover-design-template-1a3c7d9d576e8d5e0c79918ac44b2874.webp?ts=1698540908'
              }
              width={120}
              height={120}
            />
            <StaticRatingStars
              className='mx-auto h-fit w-28 pt-1'
              bookRating={3}
            />
          </Link>
        </div>
        <div className='col-span-1 mx-3 hover:cursor-pointer'>
          <Link
            href={''}
            className='relative mx-auto flex max-w-fit flex-col justify-center bg-my-gray-primary p-3 hover:bg-my-gray-dark'
          >
            <Image
              id='book_1'
              className=''
              alt='books cover'
              src={
                'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/romance-love-book-cover-design-template-1a3c7d9d576e8d5e0c79918ac44b2874.webp?ts=1698540908'
              }
              width={120}
              height={120}
            />
            <StaticRatingStars
              className='mx-auto h-fit w-28 pt-1'
              bookRating={3}
            />
          </Link>
        </div>
        <div className='col-span-1 mx-3 hover:cursor-pointer'>
          <Link
            href={''}
            className='relative mx-auto flex max-w-fit flex-col justify-center bg-my-gray-primary p-3 hover:bg-my-gray-dark'
          >
            <Image
              id='book_1'
              className=''
              alt='books cover'
              src={
                'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/romance-love-book-cover-design-template-1a3c7d9d576e8d5e0c79918ac44b2874.webp?ts=1698540908'
              }
              width={120}
              height={120}
            />
            <StaticRatingStars
              className='mx-auto h-fit w-28 pt-1'
              bookRating={3}
            />
          </Link>
        </div>
        <div className='col-span-1 mx-3 hover:cursor-pointer'>
          <Link
            href={''}
            className='relative mx-auto flex max-w-fit flex-col justify-center bg-my-gray-primary p-3 hover:bg-my-gray-dark'
          >
            <Image
              id='book_1'
              className=''
              alt='books cover'
              src={
                'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/romance-love-book-cover-design-template-1a3c7d9d576e8d5e0c79918ac44b2874.webp?ts=1698540908'
              }
              width={120}
              height={120}
            />
            <StaticRatingStars
              className='mx-auto h-fit w-28 pt-1'
              bookRating={3}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
