import StaticRatingStars from '@/components/book/StaticRatingStars';
import RatingStars from '@/components/book/StaticRatingStars';
import Image from 'next/image';

export default function ReviewsList() {
  return (
    <div className='my-3'>
      <span className='text-xs font-normal'>
        Displaying 1 - 10 of 15,186 reviews
      </span>

      <div>
        <div className='grid grid-cols-7 gap-x-3 border-b-1 py-4 '>
          <div className='col-span-1'>
            <Image
              className='h-14 w-14 rounded-full object-cover'
              width={50}
              height={50}
              src='https://img.freepik.com/free-photo/happy-business-man-standing-smiling-against-red-wall_155003-9367.jpg'
              alt='profile pic'
            />
            <h3 className='py-2 text-xs font-bold tracking-wider'>austin</h3>
          </div>
          <div className='col-span-6 col-start-2'>
            <div className='flex justify-between'>
              <StaticRatingStars
                bookRating={3}
                _className='max-w-[90px] w-28'
              />
              <h3 className='hover:cursor-pointer hover:underline'>
                February 23, 2024
              </h3>
            </div>
            <p className=''>
              This series has become akin for me to a relationship that I know
              isn&apos;t working anymore but which I cannot quit because every
              now and then something good will happen and for one brief blissful
              moment—I will forget all my reasons not to stay. I think my
              profound dissatisfaction with this series stems generally from my
              sense of its inadequate execution. At bottom, it all boils down to
              this: you’ve got this exciting premise and all these riveting
              characters caught up in a web of complicated relationships and
              carrying enough emotional baggage to fill an entire stadium—and
              yet. Well, as readers, we never get to spend enough time with
              them, and they never get a moment to just breathe. They are always
              running off after some new mystery or some new unexpected plot
              turn and we are always chasing after them, hoping they would just
              stop and sit and think. To me, that’s when the most powerfully
              rewarding moments of the story occur: in stillness, in the quiet
              interludes in which the characters are at last allowed to speak to
              us, to speak to each other, to be vulnerable, and to feel the
              depth of horror of what they experienced. I simultaneously
              hungered for these moments, so few and far between, and dreaded
              when the characters would inevitably be yanked back by the leash
              of a restless hectic plot that was far less interesting than the
              (mostly) human puzzles on the page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
