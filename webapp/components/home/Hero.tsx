import Image from 'next/image';

export default function Hero() {
  return (
    <header>
      <div className='mx-auto max-w-7xl px-5 py-6 md:px-8 md:py-10 lg:py-14'>
        <div className='grid items-center justify-items-start gap-8 sm:gap-20 lg:grid-cols-2'>
          <div className='flex flex-col'>
            <h1 className='mb-4 text-4xl font-bold md:text-6xl'>
              Today a reader, tomorrow a leader.
            </h1>
            <p className='mb-6 max-w-lg text-sm text-[#636262] sm:text-xl md:mb-10 lg:mb-12'>
            Find your bookish soulmates here, where readers like you come together.
            </p>
          </div>
          <Image
            width={800}
            height={800}
            src='https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt=''
            className='inline-block h-full w-full max-w-[640px]'
          />
        </div>
      </div>
    </header>
  );
}
