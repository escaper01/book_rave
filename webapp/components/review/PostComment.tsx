import { CommentSchemaType } from '@/utils/types/CommentType';
import { SubmitHandler, useForm } from 'react-hook-form';
import { commentScheme } from '@/utils/schemes/comment_schema';
import { zodResolver } from '@hookform/resolvers/zod';
import useSWRMutation from 'swr/mutation';
import { BASE_URL } from '@/utils/constants/config';
import { postDataAuth } from '@/utils/constants/api';
import toast, { Toaster } from 'react-hot-toast';
import { CommentFormType } from '@/utils/types/CommentType';
import { Dispatch, SetStateAction } from 'react';

export default function PostComment({
  review_id,
  relatedCommentsState,
}: {
  review_id: number;
  relatedCommentsState: [
    CommentFormType[],
    Dispatch<SetStateAction<[] | CommentFormType[]>>,
  ];
}) {
  const [relatedComments, setRelatedComments] = relatedCommentsState;
  const { trigger: startingPostingComment } = useSWRMutation(
    `${BASE_URL}/comment/add-comment/${review_id}`,
    postDataAuth,
    {
      revalidate: false,
      onError: (err) => {
        for (const elem in err) {
          toast.error(err[elem], { id: 'toaster' });
        }
      },
      onSuccess(data) {
        resetField('content');
        setRelatedComments([data, ...relatedComments]);
        toast.success('your comment was posted successfully');
      },
    }
  );

  const {
    resetField,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CommentSchemaType>({
    resolver: zodResolver(commentScheme),
  });

  const onSubmit: SubmitHandler<CommentSchemaType> = (data) => {
    startingPostingComment(data);
  };

  return (
    <div className='h-fit border-t-1 border-my-gray-dark py-5'>
      <div className=''>
        <Toaster />
        <div className='text-xl font-medium'>Post ReviewToaster</div>
        <form onSubmit={handleSubmit(onSubmit)} className='mx-auto max-w-sm'>
          <div className='flex flex-col'>
            <h2>Description: </h2>
            {errors.content && (
              <p className='mt-1 text-xs italic text-red-500'>
                {' '}
                {errors.content?.message}
              </p>
            )}
            <textarea
              {...register('content')}
              className='mb-4 border-1 border-my-gray-dark p-2'
              rows={5}
              required
            />
          </div>
          <button
            type='submit'
            className='rounded-full bg-black px-6 py-2 text-white'
          >
            post my review
          </button>
        </form>
      </div>
    </div>
  );
}
