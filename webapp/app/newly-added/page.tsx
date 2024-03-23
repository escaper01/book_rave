import BookSlider from '@/components/book/BookSlider';
import { MOVIES_CATEGORIES } from '@/utils/constants/config';
export default function MyPosts() {
  return (
    <div className='grow bg-my-khaki-light'>
      <div className='mx-auto max-w-screen-md px-5'>
        {MOVIES_CATEGORIES.map((elem, index) => {
          return (
            <div key={index} className='my-4'>
              <h1 className='mb-2 text-xl font-bold'>{elem}</h1>
              <BookSlider query={elem} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
