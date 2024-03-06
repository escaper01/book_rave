import Image from 'next/image';
import LOGO from '@/public/assets/logo.png';
import Link from 'next/link';

export default function Register() {
  return (
    <main className='sm:px-auto bg-my-khaki-light flex grow justify-center px-4'>
      <div className='flex w-full max-w-sm flex-col '>
        <Image
          src={LOGO}
          alt='book rave logo'
          width={200}
          height={100}
          className='mx-auto'
        />
        <h1 className='text-center text-4xl'>Create Account</h1>
        <form className='flex w-full flex-col py-5'>
          <div className='my-2'>
            <label htmlFor='username' className='mb-2 block font-normal'>
              username
            </label>
            <input
              type='text'
              name='username'
              placeholder='username'
              className={
                'bg-my w-full rounded-full border-1  border-black bg-my-gray-light px-3 py-2.5 hover:bg-my-gray-primary'
              }
            />
          </div>

          <div className='my-2'>
            <label htmlFor='email' className='mb-2 block font-normal'>
              email
            </label>
            <input
              type='text'
              name='email'
              placeholder='email'
              className={
                'bg-my w-full rounded-full border-1  border-black bg-my-gray-light px-3 py-2.5 hover:bg-my-gray-primary'
              }
            />
          </div>
          <div className='my-2'>
            <label htmlFor='password' className='mb-2 block font-normal'>
              password
            </label>
            <input
              type='password'
              name='password'
              placeholder='password'
              className={
                'bg-my w-full rounded-full border-1  border-black bg-my-gray-light px-3 py-2.5 hover:bg-my-gray-primary'
              }
            />
          </div>
          <div className='my-2'>
            <label
              htmlFor='confirm_password'
              className='mb-2 block font-normal'
            >
              confirm password
            </label>
            <input
              type='password'
              name='confirm_password'
              placeholder='confirm_password'
              className={
                'bg-my w-full rounded-full border-1  border-black bg-my-gray-light px-3 py-2.5 shadow hover:bg-my-gray-primary focus:shadow-2xl'
              }
            />
          </div>
          <div className='my-1'>
            <input
              type='checkbox'
              name='consent'
              className='hover:cursor-pointer'
            />
            <span className='ml-3 text-sm'>
              By creating an account you access our{' '}
              <Link className='text-xs font-bold' href={'/terms'}>
                Terms of use
              </Link>
            </span>
          </div>

          <div className='my-2 block font-normal'>
            <button className='w-full rounded-full bg-black px-3 py-2.5 text-white'>
              create account
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
