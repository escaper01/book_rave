import StaticRatingStars from '../book/StaticRatingStars';
import ProgressBar from './ProgressBar';
import useSWRImmutable from 'swr/immutable';
import { BASE_URL } from '@/utils/constants/config';
import { getData } from '@/utils/constants/api';
import { useState } from 'react';
import { BookStatsType } from '@/utils/types/BookTypes';
import { CalcSumList } from '@/utils/constants/func';

export default function ReviewsStatistics({ book_id }: { book_id: number }) {
  const [bookStatistics, setBookStatistics] = useState<
    BookStatsType | undefined
  >();

  const { isLoading } = useSWRImmutable(
    `${BASE_URL}/book/get-book-statistics/${book_id}`,
    getData,
    {
      onSuccess: (data) => {
        const all_ratings = [
          data.five_star_ratings,
          data.four_star_ratings,
          data.three_star_ratings,
          data.two_star_ratings,
          data.one_star_ratings,
        ];

        setBookStatistics({ ...data, review_total: CalcSumList(all_ratings) });
        console.log(data, 'book stats');
      },
      onError: (err) => {
        console.log(err, ' getting book rating');
      },
    }
  );

  return (
    bookStatistics && (
      <div>
        <span className='text-xl font-medium'>Community Reviews</span>
        <div className='mb-2 flex flex-col items-center sm:flex-row'>
          <StaticRatingStars
            bookRating={Math.floor(bookStatistics.global_rating)}
          />
          <div className='mx-5 mb-2 text-center text-3xl sm:mb-0'>
            {bookStatistics.global_rating.toFixed(1)}
          </div>
          <div className='text-nowrap text-xs'>
            {bookStatistics.review_total}{' '}
            {bookStatistics.review_total > 1 ? 'reviews' : 'review'}
          </div>
        </div>

        <div className='max-w-lg'>
          <div className='mb-3 flex items-center text-nowrap'>
            <div className='font-semibold underline'>5 stars</div>
            <ProgressBar
              className='mx-3'
              progress={
                (bookStatistics.five_star_ratings /
                  bookStatistics.review_total) *
                100
              }
            />
            <div className='font-extralight'>
              {bookStatistics.five_star_ratings} (
              {bookStatistics.review_total == 0
                ? '0'
                : (
                    (bookStatistics.five_star_ratings /
                      bookStatistics.review_total) *
                    100
                  ).toFixed(1)}
              %)
            </div>
          </div>
          <div className='mb-3 flex items-center text-nowrap'>
            <div className='font-semibold underline'>4 stars</div>
            <ProgressBar
              className='mx-3'
              progress={
                (bookStatistics.four_star_ratings /
                  bookStatistics.review_total) *
                100
              }
            />
            <div className='font-extralight'>
              {bookStatistics.four_star_ratings} (
              {bookStatistics.review_total == 0
                ? '0'
                : (
                    (bookStatistics.four_star_ratings /
                      bookStatistics.review_total) *
                    100
                  ).toFixed(1)}
              %)
            </div>
          </div>
          <div className='mb-3 flex items-center text-nowrap'>
            <div className='font-semibold underline'>3 stars</div>
            <ProgressBar
              className='mx-3'
              progress={
                (bookStatistics.three_star_ratings /
                  bookStatistics.review_total) *
                100
              }
            />
            <div className='font-extralight'>
              {bookStatistics.three_star_ratings} (
              {bookStatistics.review_total == 0
                ? '0'
                : (
                    (bookStatistics.three_star_ratings /
                      bookStatistics.review_total) *
                    100
                  ).toFixed(1)}
              %)
            </div>
          </div>
          <div className='mb-3 flex items-center text-nowrap'>
            <div className='font-semibold underline'>2 stars</div>
            <ProgressBar
              className='mx-3'
              progress={
                (bookStatistics.two_star_ratings /
                  bookStatistics.review_total) *
                100
              }
            />
            <div className='font-extralight'>
              {bookStatistics.two_star_ratings} (
              {bookStatistics.review_total == 0
                ? '0'
                : (
                    (bookStatistics.two_star_ratings /
                      bookStatistics.review_total) *
                    100
                  ).toFixed(1)}
              %)
            </div>
          </div>
          <div className=' flex items-center text-nowrap'>
            <div className='font-semibold underline'>1 stars</div>
            <ProgressBar
              className='mx-3'
              progress={
                (bookStatistics.one_star_ratings /
                  bookStatistics.review_total) *
                100
              }
            />
            <div className='font-extralight'>
              {bookStatistics.one_star_ratings} (
              {bookStatistics.review_total == 0
                ? '0'
                : (
                    (bookStatistics.one_star_ratings /
                      bookStatistics.review_total) *
                    100
                  ).toFixed(1)}
              %)
            </div>
          </div>
        </div>
      </div>
    )
  );
}
