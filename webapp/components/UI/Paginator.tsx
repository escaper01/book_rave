import { Dispatch, SetStateAction } from 'react';
import { ReviewsResponseType } from '@/utils/types/ReviewTypes';
import { BookResponseType } from '@/utils/types/BookTypes';

export default function Paginator({
  objectRes,
  setCurrentUrl,
  totalNumber,
}: {
  objectRes: ReviewsResponseType | BookResponseType;
  setCurrentUrl: Dispatch<SetStateAction<string>>;
  totalNumber: number;
}) {
  return (
    <nav className='pb-4'>
      <ul className='flex justify-center'>
        {objectRes.previous && (
          <li>
            <button
              onClick={() => setCurrentUrl(objectRes.previous as string)}
              className='ml-0 rounded-l-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700'
            >
              Previous
            </button>
          </li>
        )}

        {objectRes.next && (
          <li>
            <button
              onClick={() => setCurrentUrl(objectRes.next as string)}
              className='rounded-r-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700'
            >
              Next
            </button>
          </li>
        )}
      </ul>
      {totalNumber > 0 && (
        <div className='pt-1 text-center text-xs font-semibold'>
          -{totalNumber}- {'  '} elements
        </div>
      )}
    </nav>
  );
}
