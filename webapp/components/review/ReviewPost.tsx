import { useState } from 'react';
import Image from 'next/image';
import {
  ArrowSvg,
  CommentSvg,
  SaveSvg,
  ShareSvg,
} from '@/utils/constants/svg_library';
import { useRouter } from 'next/navigation';
import { ReviewFormType } from '@/utils/types/ReviewTypes';
import useSWRMutation from 'swr/mutation';
import { BASE_URL } from '@/utils/constants/config';
import { putAuth } from '@/utils/constants/api';
import { useAuthStore } from '@/utils/store/store_auth';
import toast, { Toaster } from 'react-hot-toast';

export default function ReviewPost({ data }: { data: ReviewFormType }) {
  const user = useAuthStore((state) => state.user);
  const router = useRouter();
  const [likesCount, setLikesCount] = useState(data.likes_count);
  const [disLikesCount, setDisLikesCount] = useState(data.dislikes_count);

  let shouldBeRedirected = true;

  const { trigger: startLikingReview } = useSWRMutation(
    `${BASE_URL}/vote/review/${data.id}/like`,
    putAuth,
    {
      onSuccess: (data) => {
        console.log(
          'likes ',
          data.post_likes_count,
          'dislikes ',
          data.post_dislikes_count
        );
        setLikesCount(data.post_likes_count);
        setDisLikesCount(data.post_dislikes_count);
      },
    }
  );
  const { trigger: startDisLikingReview } = useSWRMutation(
    `${BASE_URL}/vote/review/${data.id}/dislike`,
    putAuth,
    {
      onSuccess: (data) => {
        console.log(
          'likes ',
          data.post_likes_count,
          'dislikes ',
          data.post_dislikes_count
        );
        setLikesCount(data.post_likes_count);
        setDisLikesCount(data.post_dislikes_count);
      },
    }
  );

  const GoToReview = () => {
    if (shouldBeRedirected) {
      console.log('going to the review');
      router.push(`/review/${data.id}`);
    }
    shouldBeRedirected = false;
  };

  const UpVote = () => {
    if (user.username) {
      startLikingReview();
    } else {
      toast.error('you need to login first', { id: 'toaster2' });
    }

    shouldBeRedirected = false;
    console.log('up vote');
  };

  const DownVote = () => {
    if (user.username) {
      startDisLikingReview();
    } else {
      toast.error('you need to login first', { id: 'toaster1' });
    }

    shouldBeRedirected = false;
    console.log('down vote');
  };

  const SharePost = () => {
    shouldBeRedirected = false;

    const message = `checkout this post review ${window.location.host}/review/${data.id}`;
    router.push(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`
    );
    console.log('share post');
  };
  // const SavePost = () => {
  //   console.log('save post');
  //   shouldBeRedirected = false;
  //   console.log(shouldBeRedirected);
  // };

  return (
    <div
      onClick={() => GoToReview()}
      className='my-5 flex flex-col border-1 border-gray-300 bg-white p-5 text-sm hover:cursor-pointer hover:bg-gray-100'
    >
      <Toaster />
      <div className='gri grid-cols-1 items-start pb-4'>
        <div className='mx-auto'>
          {data.media && (
            <Image
              className='mx-auto max-w-md'
              alt='bk image'
              src={data.media as string}
              height={900}
              width={800}
            />
          )}
        </div>
        <div className=' pl-5 align-text-top'>
          <div className='mb-2 text-2xl font-light leading-10'>
            {data.title}
          </div>
          <div className='text-base font-medium'>
            {`${data.content.slice(0, 260)}...`}
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-evenly'>
        <div className='flex min-w-20 items-center justify-evenly rounded-full bg-blue-500 px-2.5 py-1'>
          <ArrowSvg
            fill='white'
            className='rotate-0 cursor-pointer hover:scale-120'
            isClicked={true}
            onClick={() => UpVote()}
          />

          {likesCount && (
            <span className='mx-0.5 text-nowrap font-normal'>{likesCount}</span>
          )}
          {' - '}
          {disLikesCount && (
            <span className='mx-0.5 text-nowrap font-medium'>
              {disLikesCount}
            </span>
          )}

          <ArrowSvg
            fill='none'
            className='rotate-180 cursor-pointer hover:scale-120'
            isClicked={false}
            onClick={() => DownVote()}
          />
        </div>

        <div
          // onClick={() => console.log('comment')}
          className='flex min-w-20 cursor-pointer items-center justify-evenly rounded-2xl bg-blue-500 px-2.5 py-1 hover:scale-103'
        >
          <CommentSvg className=' ' />
          <span className='font-medium'>{data.comments_count}</span>
        </div>

        <div
          onClick={() => SharePost()}
          className='flex min-w-20 items-center justify-center rounded-2xl bg-blue-500 px-2.5 py-1 hover:scale-103 '
        >
          <ShareSvg className='cursor-pointer ' />
        </div>
        {/* <div
          onClick={() => SavePost()}
          className='z-50 flex min-w-20 cursor-pointer items-center justify-center rounded-2xl bg-blue-500 px-2.5 py-1 hover:scale-103 '
        >
          <SaveSvg className='' />
        </div> */}
      </div>
    </div>
  );
}
