'use client';
import { useState } from 'react';
import BookSlider from '@/components/book/BookSlider';
import ReviewPost from '@/components/review/ReviewPost';

export default function Home() {
  return (
    <div className=' bg-my-khaki-light '>
      <div className='mx-auto max-w-screen-sm py-5'>
        {/*<BookSlider query='lala' />*/}
        <div className='mt-8'>
          <ReviewPost />
          <ReviewPost />
          <ReviewPost />
        </div>
      </div>
    </div>
  );
}
