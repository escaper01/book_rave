'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Teams() {
  return (
    <section>
      <div className='mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32'>
        <h2 className='text-center text-3xl font-bold md:text-5xl'>
          Our Team Members
        </h2>
        <p className='mx-auto mb-8 mt-4 text-center text-sm text-[#636262] sm:text-base md:mb-12 lg:mb-16'>
          Say hello to our team of book lovers, excited to build a fun place for
          fellow readers
        </p>
        <div className='grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 sm:justify-items-stretch md:grid-cols-2 md:gap-4 lg:gap-6'>
          <div className='mx-auto flex w-full flex-col items-center gap-4 py-8 text-center md:px-8 md:py-4 lg:px-12'>
            <Image
              height={300}
              width={300}
              src='https://s3.amazonaws.com/alx-intranet.hbtn.io/users/photos/000/421/876/thumb/profile-pic.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20240314%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240314T225811Z&X-Amz-Expires=600&X-Amz-SignedHeaders=host&X-Amz-Signature=7b82a0a7a273b939c294ee7b280a3209e9fb9416625ad769ee33e89ee2c8ed39'
              alt=''
              className='mb-4 inline-block h-40 w-40 rounded-full'
            />
            <p className='font-bold'>escaper</p>
            <p className='text-center text-sm text-[#636262]'>
              self taught Developer
            </p>
            <div className=' flex text-xs font-bold capitalize'>
              <Link
                className='mx-2'
                href='https://www.linkedin.com/in/osama-slame-7230a2245/'
              >
                linkedin
              </Link>

              <Link className='mx-2' href='https://github.com/escaper01'>
                github
              </Link>
            </div>
          </div>
          <div className='mx-auto flex w-full flex-col items-center gap-4 py-8 text-center md:px-8 md:py-4 lg:px-12'>
            <Image
              height={300}
              width={300}
              src='https://media.licdn.com/dms/image/D4E03AQGk-nRWKCVc4A/profile-displayphoto-shrink_200_200/0/1709228340844?e=2147483647&v=beta&t=ufeEuhAoZH5-33bW3M5NnBIbtp6Fgkjc_oTqfb2-qcI'
              alt=''
              className='mb-4 inline-block h-40 w-40 rounded-full'
            />
            <p className='font-bold'>Younes Bousfiha</p>
            <p className='text-center text-sm text-[#636262]'>
              Security Researcher | Software Engineer Student
            </p>
            <div className=' flex text-xs font-bold capitalize'>
              <Link
                className='mx-2'
                href='https://ma.linkedin.com/in/younes-bousfiha-9838361a6'
              >
                linkedin
              </Link>

              <Link className='mx-2' href='https://github.com/Coderyounes'>
                github
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
