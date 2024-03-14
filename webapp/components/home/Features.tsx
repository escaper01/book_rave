import Image from 'next/image';

export default function Features() {
  return (
    <section>
      <div className='mx-auto max-w-7xl px-5 py-6 md:px-8 md:py-10 lg:py-14'>
        <div className='mx-auto text-center'>
          <h2 className='text-3xl font-bold md:text-5xl'>
            Explore our platform&apos;s rich features
          </h2>
          <p className='mx-auto mb-8 mt-4 max-w-lg text-[#647084] md:mb-12 lg:mb-16'>
            offering personalized book recommendations, vibrant community
            discussions, and seamless access to your favorite reads.
          </p>
        </div>
        <div className='grid gap-5 sm:grid-cols-2 md:grid-cols-3'>
          <div className='grid gap-8 border border-solid border-[#dfdfdf] p-8 md:p-10'>
            <Image
              width={100}
              height={100}
              src='https://www.svgrepo.com/show/234736/passport.svg'
              alt=''
              className='inline-block h-16'
            />
            <p className='text-xl font-semibold'>
              Personalized Recommendations
            </p>
            <p className='text-sm text-[#636262]'>
              Tailored book suggestions based on users&apos; reading preferences
              and past activity.
            </p>
          </div>
          <div className='grid gap-8 border border-solid border-[#dfdfdf] p-8 md:p-10'>
            <Image
              width={100}
              height={100}
              src='https://www.svgrepo.com/show/213928/rate.svg'
              alt=''
              className='inline-block h-16'
            />
            <p className='text-xl font-semibold'>User Reviews</p>
            <p className='text-sm text-[#636262]'>
              Access to a diverse range of user-generated reviews, allowing
              readers to gauge the quality and appeal of books from multiple
              perspectives.
            </p>
          </div>
          <div className='grid gap-8 border border-solid border-[#dfdfdf] p-8 md:p-10'>
            <Image
              width={100}
              height={100}
              src='https://www.svgrepo.com/show/230777/rating-rate.svg'
              alt=''
              className='inline-block h-16'
            />
            <p className='text-xl font-semibold'>Community Discussions</p>
            <p className='text-sm text-[#636262]'>
              Engage in vibrant discussions with fellow readers, sharing
              thoughts, insights, and recommendations on various books and
              literary topics.
            </p>
          </div>
          <div className='grid gap-8 border border-solid border-[#dfdfdf] p-8 md:p-10'>
            <Image
              width={100}
              height={100}
              src='https://www.svgrepo.com/show/429818/discussion-conversation-message.svg'
              alt=''
              className='inline-block h-16'
            />
            <p className='text-xl font-semibold'>Book Ratings</p>
            <p className='text-sm text-[#636262]'>
              View aggregated ratings for books, providing an overall indication
              of a book&apos;s popularity and reception within the community.
            </p>
          </div>
          <div className='grid gap-8 border border-solid border-[#dfdfdf] p-8 md:p-10'>
            <Image
              width={100}
              height={100}
              src='https://www.svgrepo.com/show/260235/rating-rate.svg'
              alt=''
              className='inline-block h-16'
            />
            <p className='text-xl font-semibold'>Writing Reviews</p>
            <p className='text-sm text-[#636262]'>
              Enable users to contribute their own reviews and ratings for books
              they&apos;ve read, fostering a collaborative environment where
              readers can share their experiences and opinions.
            </p>
          </div>
          <div className='grid gap-8 border border-solid border-[#dfdfdf] p-8 md:p-10'>
            <Image
              width={100}
              height={100}
              src='https://www.svgrepo.com/show/532551/search-alt-1.svg'
              alt=''
              className='inline-block h-16'
            />
            <p className='text-xl font-semibold'>Book Search and Discovery</p>
            <p className='text-sm text-[#636262]'>
              Powerful search functionality and curated lists to help users
              discover new and trending books across genres, ensuring they
              always find their next great read.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
