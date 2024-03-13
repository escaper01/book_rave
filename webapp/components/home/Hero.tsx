import Image from 'next/image';

export default function Hero() {
  return (
    <header>
      <div className='mx-auto max-w-7xl px-5 py-6 md:px-8 md:py-10 lg:py-14'>
        <div className='grid items-center justify-items-start gap-8 sm:gap-20 lg:grid-cols-2'>
          <div className='flex flex-col'>
            <h1 className='mb-4 text-4xl font-bold md:text-6xl'>
              The Website You Want Without The Dev Time.
            </h1>
            <p className='mb-6 max-w-lg text-sm text-[#636262] sm:text-xl md:mb-10 lg:mb-12'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus
            </p>
          </div>
          <Image
            width={100}
            height={100}
            src='https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a940836e6cf8d_Group%2047854%20(2).svg'
            alt=''
            className='inline-block h-full w-full max-w-[640px]'
          />
        </div>
      </div>
    </header>
  );
}
