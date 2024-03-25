import React from 'react';
import Navbar from '@/components/UI/Navbar';
import Footer from '@/components/UI/Footer';

export default function Faq() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Navbar />
      <div className='min-h-sceen mx-auto w-full max-w-screen-md grow bg-white px-5'>
        <div className='flex flex-col items-center'>
          <h2 className='mt-5 text-5xl font-bold tracking-tight'>FAQ</h2>
          <p className='mt-3 text-xl text-neutral-500'>
            Frequenty asked questions
          </p>
        </div>
        <div className='mx-auto mt-8 grid divide-y divide-neutral-200'>
          <div className='py-5'>
            <details className='group'>
              <summary className='flex cursor-pointer list-none items-center justify-between font-medium'>
                <span> What is book rave?</span>
                <span className='transition group-open:rotate-180'>
                  <svg
                    fill='none'
                    height='24'
                    shapeRendering='geometricPrecision'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1.5'
                    viewBox='0 0 24 24'
                    width='24'
                  >
                    <path d='M6 9l6 6 6-6'></path>
                  </svg>
                </span>
              </summary>
              <p className='group-open:animate-fadeIn mt-3 text-neutral-600'>
                BookRave is a platform designed for avid readers to connect,
                share, and discover new books. Users can create accounts to
                submit reviews, discuss their favorite reads, and engage with
                fellow book enthusiasts. With features such as curated book
                lists, personalized recommendations, and user-generated content,
                our app aims to foster a vibrant community centered around the
                love of literature
              </p>
            </details>
          </div>
          <div className='py-5'>
            <details className='group'>
              <summary className='flex cursor-pointer list-none items-center justify-between font-medium'>
                <span> How do I create an account?</span>
                <span className='transition group-open:rotate-180'>
                  <svg
                    fill='none'
                    height='24'
                    shapeRendering='geometricPrecision'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1.5'
                    viewBox='0 0 24 24'
                    width='24'
                  >
                    <path d='M6 9l6 6 6-6'></path>
                  </svg>
                </span>
              </summary>
              <p className='group-open:animate-fadeIn mt-3 text-neutral-600'>
                To create an account, simply navigate to the &quot;Sign Up&quot;
                page and provide your email address, username, and password.
                Once you submit the required information, you&apos;ll be all set
                to start using the app.
              </p>
            </details>
          </div>
          <div className='py-5'>
            <details className='group'>
              <summary className='flex cursor-pointer list-none items-center justify-between font-medium'>
                <span> Is there a way to discover new books or genres?</span>
                <span className='transition group-open:rotate-180'>
                  <svg
                    fill='none'
                    height='24'
                    shapeRendering='geometricPrecision'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1.5'
                    viewBox='0 0 24 24'
                    width='24'
                  >
                    <path d='M6 9l6 6 6-6'></path>
                  </svg>
                </span>
              </summary>
              <p className='group-open:animate-fadeIn mt-3 text-neutral-600'>
                Yes, you can explore new books and genres by browsing through
                our curated lists and recommendations. We regularly update our
                recommendations based on user preferences and trending titles,
                so there&apos;s always something new to discover.
              </p>
            </details>
          </div>
          <div className='py-5'>
            <details className='group'>
              <summary className='flex cursor-pointer list-none items-center justify-between font-medium'>
                <span> Is there a mobile app available?</span>
                <span className='transition group-open:rotate-180'>
                  <svg
                    fill='none'
                    height='24'
                    shapeRendering='geometricPrecision'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1.5'
                    viewBox='0 0 24 24'
                    width='24'
                  >
                    <path d='M6 9l6 6 6-6'></path>
                  </svg>
                </span>
              </summary>
              <p className='group-open:animate-fadeIn mt-3 text-neutral-600'>
                Currently, we only offer a web app version of our platform.
                However, our website is optimized for mobile devices, so you can
                easily access it from your smartphone or tablet browser.
              </p>
            </details>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
