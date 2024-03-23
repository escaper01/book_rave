import React from 'react';
import Navbar from '@/components/UI/Navbar';
import Footer from '@/components/UI/Footer';
export default function ReviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex min-h-screen flex-col '>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
