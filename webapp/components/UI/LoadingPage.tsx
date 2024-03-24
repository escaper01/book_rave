import React from 'react';
import { LoadingSpinner } from '@/utils/constants/svg_library';

export default function LoadingPage() {
  return (
    <div className='mx-5 flex grow items-center justify-center py-5 sm:py-10'>
      <LoadingSpinner />
    </div>
  );
}
