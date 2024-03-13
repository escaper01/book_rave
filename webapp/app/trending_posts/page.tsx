'use client';
import { useState } from 'react';
import Navbar from '@/components/UI/Navbar';
import Footer from '@/components/UI/Footer';
import BookSlider from '@/components/book/BookSlider';
import ReviewPost from '@/components/review/ReviewPost';
import { ProfileFormType } from '@/utils/types/ProfileType';

export default function Home() {
  const [profileInfo, setProfileInfo] = useState<ProfileFormType | undefined>();
  return (
    <div>
      <Navbar />
      <div className=' bg-my-khaki-light '>
        <div className='mx-auto max-w-screen-sm py-5'>
          <BookSlider query='lala' />
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
