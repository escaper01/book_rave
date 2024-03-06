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
          width={300}
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

          <div className='mt-3 block font-normal'>
            <button className='w-full rounded-full bg-black px-3 py-2.5 text-white'>
              login
            </button>
          </div>

          <div className='my-2'>
            <span className='ml-3 text-sm'>
              you don&apos;t have an account{' '}
              <Link className='font-semibold text-blue-500' href={'/register'}>
                create one
              </Link>
            </span>
          </div>
        </form>
      </div>
    </main>
  );
}
