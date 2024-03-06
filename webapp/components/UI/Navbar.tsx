import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='bg-my-khaki-primary border-b-2 border-gray-300'>
      <div className='mx-4 flex flex-row items-center justify-normal py-2 lg:mx-20 lg:justify-between'>
        <div className='flex flex-row items-center justify-normal lg:w-1/2'>
          <Link href='/' className='pr-4'>
            <span className='text-2xl font-light'>Book</span>
            <span className='text-2xl font-semibold'>Rave</span>
          </Link>
          <div className=' mx-2 hidden w-full flex-row items-center justify-evenly font-medium lg:flex'>
            <Link href={'/my-posts'} className='mx-2 text-nowrap'>
              My Posts
            </Link>
            <Link href={'/trending'} className='mx-2 text-nowrap'>
              Trending
            </Link>
            <Link href={'/newly-added'} className='mx-2 text-nowrap'>
              New Added Books
            </Link>
          </div>
        </div>
        <div className='flex w-full flex-row items-center justify-end lg:justify-normal'>
          <div className='hidden w-full sm:inline-flex'>
            <input
              className=' ml-0 w-full p-2 md:ml-40'
              placeholder='Search books'
              type='search'
              name='query-books'
            />
          </div>
          <div className='flex flex-row items-center font-medium'>
            <Link href={'/login'} className='mx-3 text-nowrap'>
              Sign in
            </Link>
            <Link href={'/register'} className='mx-3'>
              Join
            </Link>
          </div>
        </div>
      </div>
      <div className='flex justify-center border-t-2 border-gray-300 py-1 lg:hidden'>
        <div className='mx-auto my-2 flex w-full max-w-lg flex-row items-center justify-evenly text-sm font-medium'>
          <div className='mx-2 text-nowrap'>menu 2</div>
          <div className='mx-2 text-nowrap'>menu 2</div>
          <div className='mx-2 text-nowrap'>menu 3</div>
        </div>
      </div>
    </nav>
  );
}
