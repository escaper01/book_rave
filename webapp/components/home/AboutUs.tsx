import Image from 'next/image';

export default function AboutUs() {
  return (
    <section>
      <div className='mx-auto max-w-7xl px-5 py-6 md:px-8 md:py-10 lg:py-14'>
        <div className='grid gap-10 lg:grid-cols-2 lg:gap-12'>
          <Image
            height={900}
            width={900}
            src='https://plus.unsplash.com/premium_photo-1661962617265-b88538dc15e4?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt=''
            className='inline-block h-full w-full rounded-2xl object-cover'
          />
          <div className='flex flex-col gap-5 rounded-2xl border border-solid border-black p-10 sm:p-20'>
            <h2 className='text-3xl font-bold md:text-5xl'>Our Mission</h2>
            <p className='text-sm text-[#808080] sm:text-base'>
              {' '}
              Discover, engage, and share your love for literature with our
              vibrant book community. Our mission is to connect readers
              worldwide, offering personalized recommendations, insightful
              reviews, and a collaborative platform for exploring the endless
              realms of literature.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
