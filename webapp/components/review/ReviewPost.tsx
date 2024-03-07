import { useState } from 'react';
import Image from 'next/image';
import {
  ArrowSvg,
  CommentSvg,
  SaveSvg,
  ShareSvg,
} from '@/utils/constants/svg_library';
import Link from 'next/link';

export default function ReviewPost() {
  const [isButtonClicked, setButtonClicked] = useState(false);

  const GoToReview = () => {
    if (!isButtonClicked) {
      console.log('going to the review');
    }
    setButtonClicked(false);
  };

  const UpVote = () => {
    console.log('up vote');
    setButtonClicked(true);
  };

  const DownVote = () => {
    console.log('down vote');
    setButtonClicked(true);
  };
  const Comment = () => {
    console.log('comment');
    setButtonClicked(true);
  };
  const SharePost = () => {
    console.log('share post');
    setButtonClicked(true);
  };
  const SavePost = () => {
    console.log('save post');
    setButtonClicked(true);
  };

  return (
    <div
      onClick={() => GoToReview()}
      className='my-5 flex flex-col border-1 border-gray-300 bg-white p-5 text-sm hover:cursor-pointer hover:bg-gray-100'
    >
      <div className='flex flex-row items-start pb-4'>
        <div>
          <Image
            alt='bk image'
            src={
              'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/romance-love-book-cover-design-template-1a3c7d9d576e8d5e0c79918ac44b2874.webp?ts=1698540908'
            }
            height={300}
            width={600}
          />
        </div>
        <div className='pl-5 align-text-top'>
          <div className=' text-lg font-bold '>
            Tips for being able to read for longer?
          </div>
          <div className='text-sm font-medium'>
            All sorcerers are evil. Elisabeth has known that as long as she has
            known anything. Raised as a foundling in one of Austermeer’s Great
            Libraries, Elisabeth has grown up among the tools of sorcery—magical
            grimoires that whisper on shelves and rattle beneath iron chains. If
            provoked, they transform into grotesque monsters of ink and leather.
            She hopes to become a warden, charged with protecting ....
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-evenly'>
        <div className='flex w-20 items-center justify-evenly rounded-full bg-blue-500 px-2.5 py-1'>
          <ArrowSvg
            fill='white'
            className='rotate-0 cursor-pointer hover:scale-120'
            isClicked={true}
            onClick={() => UpVote()}
          />
          <span className='mx-0.5 font-medium'>23</span>
          <ArrowSvg
            fill='none'
            className='rotate-180 cursor-pointer hover:scale-120'
            isClicked={false}
            onClick={() => DownVote()}
          />
        </div>

        <div
          onClick={() => console.log('comment')}
          className='flex w-20 cursor-pointer items-center justify-evenly rounded-2xl bg-blue-500 px-2.5 py-1 hover:scale-103'
        >
          <CommentSvg className=' ' />
          <span className='font-medium'>14</span>
        </div>

        <div
          onClick={() => SharePost()}
          className='flex w-20 items-center justify-center rounded-2xl bg-blue-500 px-2.5 py-1 hover:scale-103 '
        >
          <ShareSvg className='cursor-pointer ' />
        </div>
        <div
          onClick={() => SavePost()}
          className='z-50 flex w-20 cursor-pointer items-center justify-center rounded-2xl bg-blue-500 px-2.5 py-1 hover:scale-103 '
        >
          <SaveSvg className='' />
        </div>
      </div>
    </div>
  );
}
