'use client';

import Navbar from '@/components/UI/Navbar';
import Footer from '@/components/UI/Footer';
import BookSlider from '@/components/UI/BookSlider';
import ReviewPost from '@/components/UI/ReviewPost';

export default function MainWrapper() {
  return (
    <div>
      <Navbar />
      <div className='bg-my-yellow-light '>
        <div className='mx-auto max-w-screen-sm'>
          <BookSlider />
          <div className='mt-8'>
            <ReviewPost />
            <ReviewPost />
            <ReviewPost />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
