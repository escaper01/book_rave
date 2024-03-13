'use client';

import Flicking from '@egjs/react-flicking';
import '@egjs/react-flicking/dist/flicking.css';
import { listOfImgUrl } from '@/utils/constants/config';
import Image from 'next/image';
import Link from 'next/link';

export default function BookSlider() {
  return (
    <div className=''>
      <Flicking
        deceleration={0.0055}
        align='center'
        circular={true}
        onMoveEnd={(e) => {
          console.log(e);
        }}
      >
        {listOfImgUrl.map((url, _i) => {
          return (
            <Link href={`book/${_i}`} key={_i}>
              <Image
                style={{ width: 'auto' }}
                className='h-full'
                src={url}
                width={100}
                height={100}
                alt={`image${_i}`}
              />
            </Link>
          );
        })}
      </Flicking>
    </div>
  );
}
