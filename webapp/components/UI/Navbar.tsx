import React from 'react';

export default function Navbar() {
  return (
    <nav className='border-b-2 border-gray-300 bg-my-yellow-primary'>
      <div className='mx-4 flex flex-row items-center justify-normal py-2 lg:mx-20 lg:justify-between'>
        <div className='flex flex-row items-center justify-normal lg:w-1/2'>
          <div className='pr-4'>
            <span className='text-2xl font-light'>Book</span>
            <span className='text-2xl font-semibold'>Rave</span>
          </div>
          <div className=' mx-2 hidden w-full flex-row items-center justify-evenly font-medium lg:flex'>
            <div className='mx-2 text-nowrap'>menu 2</div>
            <div className='mx-2 text-nowrap'>menu 2</div>
            <div className='mx-2 text-nowrap'>menu 3</div>
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
            <div className='mx-3 text-nowrap'>Sign in</div>
            <div className='mx-3'>Join</div>
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
