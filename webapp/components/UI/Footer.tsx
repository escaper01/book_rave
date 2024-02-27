import React from 'react';

export default function Footer() {
  return (
    <div className=' w-full bg-my-yellow-primary py-7 '>
      <div className='mx-4 grid grid-cols-1 gap-2  sm:grid-cols-3 lg:mx-20'>
        <div className='max-w-sm text-center text-sm capitalize'>
          <div className='font-bold leading-8'>Company</div>
          <div>about us</div>
          <div>careers</div>
          <div>terms</div>
          <div>privacy</div>
          <div>help</div>
        </div>
        <div className='max-w-sm text-center text-sm capitalize'>
          <div className='font-bold leading-8'>work with us</div>
          <div>about us</div>
          <div>careers</div>
          <div>terms</div>
          <div>privacy</div>
          <div>help</div>
        </div>
        <div className='max-w-sm text-center text-sm capitalize'>
          <div className='font-bold leading-8'>connect</div>
          <div className='flex flex-row justify-evenly'>
            <div className='mx-1'>
              <svg
                height='20px'
                width='20px'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                <g
                  id='SVGRepo_tracerCarrier'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></g>
                <g id='SVGRepo_iconCarrier'>
                  {' '}
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z'
                    fill='#0F0F0F'
                  ></path>{' '}
                </g>
              </svg>
            </div>
            <div className='mx-1'>
              <svg
                fill='#000000'
                height='20px'
                width='20px'
                version='1.1'
                id='Layer_1'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='-268 289.4 262.6 222.6'
              >
                <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                <g
                  id='SVGRepo_tracerCarrier'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></g>
                <g id='SVGRepo_iconCarrier'>
                  {' '}
                  <g>
                    {' '}
                    <path d='M-5.6,392.5c-4.4-23.6-30.2-34.8-50.3-21.8c-1.4,0.9-2.3,0.8-3.6,0c-15.1-8.8-31.4-14.2-48.5-17.1 c-5.8-1-11.6-1.6-17.6-2.3c4.8-13.6,9.5-27.1,14.3-40.7c11.1,2.6,22,5.4,32.9,7.7c2.9,0.6,4,1.8,4.7,4.8 c2.9,13.6,16,22.4,30.2,20.7c13-1.5,23.4-13.3,23.5-26.6c0.1-12.3-7.8-23.1-19.5-26.6c-11.8-3.5-24.1,1.1-30.8,11.5 c-1,1.5-1.8,1.7-3.5,1.3c-9.1-2.3-18.2-4.4-27.4-6.6c-6.7-1.6-13.4-3.2-20.2-4.8c-0.4,1-0.7,1.8-1,2.6 c-6.4,18.2-12.8,36.4-19.2,54.6c-0.5,1.5-1.2,2.2-2.9,2.2c-3.2,0.1-6.3,0.3-9.5,0.6c-21,2.1-41.1,7.7-59.5,18.3 c-1.6,0.9-2.7,1-4.3-0.1c-15.4-9.9-36.1-5.1-45.3,10.7c-2.3,4-3.3,8.7-4.9,13.1c0,2.6,0,5.1,0,7.7c0.8,2.8,1.5,5.8,2.5,8.5 c1.9,5.1,5.2,9.2,9.3,12.7c0.7,0.6,1.4,1.7,1.3,2.4c-1.6,15.7,2.9,29.5,12.2,42c10.5,14.3,24.6,24,40.6,31.2 c23.9,10.7,49.1,14.6,75.2,13.1c22.7-1.3,44.3-6.6,64.4-17.6c14.7-8.1,27.2-18.5,35.8-33.2c6.3-10.8,9-22.4,7.9-34.9 c-0.1-0.7,0.1-1.8,0.6-2.2c6.9-5.5,11.1-12.6,12.5-21.4c0-0.2,0.2-0.5,0.3-0.7c0-2.7,0-5.5,0-8.2C-5.3,393.3-5.5,392.9-5.6,392.5z M-47.2,305.3c6.4,0,11.5,5.1,11.5,11.6c0,6.4-5.1,11.6-11.5,11.7c-6.4,0-11.8-5.3-11.7-11.7C-58.9,310.4-53.6,305.2-47.2,305.3z M-249.2,406.9c-4-6-3.5-14.2,1.1-19.7c4.6-5.5,12.2-7.7,18.4-5.1C-237.8,389.1-244.5,397.2-249.2,406.9z M-44.6,460.3 c-9.3,11.8-21.6,19.5-35.2,25.3c-18.2,7.7-37.3,10.9-59.6,10.9c-21.2-0.2-44-4.7-65.1-16.2c-9.9-5.4-18.7-12.3-25.4-21.6 c-12.9-17.8-12.4-38.5,1.3-55.6c9.4-11.7,21.6-19.5,35.3-25.2c22-9.1,44.9-12.1,68.5-10.4c19.9,1.4,38.9,6.2,56.4,16 c9.7,5.4,18.4,12.2,25,21.3C-30.5,422.5-30.9,442.9-44.6,460.3z M-23.5,406.9c-2.9-4.4-5.6-9-8.9-13.1c-3.2-4.1-7-7.8-10.7-11.8 c6.3-2.6,14.1-0.3,18.7,5.6C-19.9,393.2-19.6,401.4-23.5,406.9z'></path>{' '}
                    <path d='M-102.5,458c-3.5,2.4-7.1,4.8-11,6.4c-11.8,4.6-24.1,5.1-36.6,2.8c-7-1.3-13.7-3.6-19.2-8.5c-3.8-3.4-8.6-3.5-11.6-0.1 c-3.1,3.4-2.9,8.3,1,11.6c3.3,2.7,6.8,5.2,10.6,7.1c10.2,5.2,21.2,6.8,32.6,7.4c6.7-0.9,13.4-1.5,20-2.9 c9.2-1.9,17.7-5.6,24.8-12.1c3.3-3.1,3.5-7.8,0.6-11C-94.3,455.5-98.9,455.5-102.5,458z'></path>{' '}
                    <path d='M-96.7,396.7c-12.2-0.3-22,9.1-22.2,21.1c-0.2,11.5,9.3,21.3,20.7,21.5c12.1,0.2,21.7-9,22-21 C-76,406.8-85.3,397-96.7,396.7z'></path>{' '}
                    <path d='M-151.8,418.4c0.1-11.7-9.3-21.5-20.8-21.6c-12-0.2-21.6,9.1-21.8,21.1c-0.2,11.6,9.1,21.3,20.6,21.5 C-161.8,439.6-151.9,430.2-151.8,418.4z'></path>{' '}
                  </g>{' '}
                </g>
              </svg>
            </div>
            <div className='mx-1'>
              <svg
                height='20px'
                width='20px'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                <g
                  id='SVGRepo_tracerCarrier'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></g>
                <g id='SVGRepo_iconCarrier'>
                  {' '}
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M19.7828 3.91825C20.1313 3.83565 20.3743 3.75444 20.5734 3.66915C20.8524 3.54961 21.0837 3.40641 21.4492 3.16524C21.7563 2.96255 22.1499 2.9449 22.4739 3.11928C22.7979 3.29366 23 3.6319 23 3.99986C23 5.08079 22.8653 5.96673 22.5535 6.7464C22.2911 7.40221 21.9225 7.93487 21.4816 8.41968C21.2954 11.7828 20.3219 14.4239 18.8336 16.4248C17.291 18.4987 15.2386 19.8268 13.0751 20.5706C10.9179 21.3121 8.63863 21.4778 6.5967 21.2267C4.56816 20.9773 2.69304 20.3057 1.38605 19.2892C1.02813 19.0108 0.902313 18.5264 1.07951 18.109C1.25671 17.6916 1.69256 17.4457 2.14144 17.5099C3.42741 17.6936 4.6653 17.4012 5.6832 16.9832C5.48282 16.8742 5.29389 16.7562 5.11828 16.6346C4.19075 15.9925 3.4424 15.1208 3.10557 14.4471C2.96618 14.1684 2.96474 13.8405 3.10168 13.5606C3.17232 13.4161 3.27562 13.293 3.40104 13.1991C2.04677 12.0814 1.49999 10.5355 1.49999 9.49986C1.49999 9.19192 1.64187 8.90115 1.88459 8.71165C1.98665 8.63197 2.10175 8.57392 2.22308 8.53896C2.12174 8.24222 2.0431 7.94241 1.98316 7.65216C1.71739 6.3653 1.74098 4.91284 2.02985 3.75733C2.1287 3.36191 2.45764 3.06606 2.86129 3.00952C3.26493 2.95299 3.6625 3.14709 3.86618 3.50014C4.94369 5.36782 6.93116 6.50943 8.78086 7.18568C9.6505 7.50362 10.4559 7.70622 11.0596 7.83078C11.1899 6.61019 11.5307 5.6036 12.0538 4.80411C12.7439 3.74932 13.7064 3.12525 14.74 2.84698C16.5227 2.36708 18.5008 2.91382 19.7828 3.91825ZM10.7484 9.80845C10.0633 9.67087 9.12171 9.43976 8.09412 9.06408C6.7369 8.56789 5.16088 7.79418 3.84072 6.59571C3.86435 6.81625 3.89789 7.03492 3.94183 7.24766C4.16308 8.31899 4.5742 8.91899 4.94721 9.10549C5.40342 9.3336 5.61484 9.8685 5.43787 10.3469C5.19827 10.9946 4.56809 11.0477 3.99551 10.9046C4.45603 11.595 5.28377 12.2834 6.66439 12.5135C7.14057 12.5929 7.49208 13.0011 7.49986 13.4838C7.50765 13.9665 7.16949 14.3858 6.69611 14.4805L5.82565 14.6546C5.95881 14.7703 6.103 14.8838 6.2567 14.9902C6.95362 15.4727 7.65336 15.6808 8.25746 15.5298C8.70991 15.4167 9.18047 15.6313 9.39163 16.0472C9.60278 16.463 9.49846 16.9696 9.14018 17.2681C8.49626 17.8041 7.74425 18.2342 6.99057 18.5911C6.63675 18.7587 6.24134 18.9241 5.8119 19.0697C6.14218 19.1402 6.48586 19.198 6.84078 19.2417C8.61136 19.4594 10.5821 19.3126 12.4249 18.6792C14.2614 18.0479 15.9589 16.9385 17.2289 15.2312C18.497 13.5262 19.382 11.1667 19.5007 7.96291C19.51 7.71067 19.6144 7.47129 19.7929 7.29281C20.2425 6.84316 20.6141 6.32777 20.7969 5.7143C20.477 5.81403 20.1168 5.90035 19.6878 5.98237C19.3623 6.04459 19.0272 5.94156 18.7929 5.70727C18.0284 4.94274 16.5164 4.43998 15.2599 4.77822C14.6686 4.93741 14.1311 5.28203 13.7274 5.89906C13.3153 6.52904 13 7.51045 13 8.9999C13 9.28288 12.8801 9.5526 12.6701 9.74221C12.1721 10.1917 11.334 9.92603 10.7484 9.80845Z'
                    fill='#0F0F0F'
                  ></path>{' '}
                </g>
              </svg>
            </div>
            <div className='mx-1'>
              <svg
                height='20px'
                width='20px'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                <g
                  id='SVGRepo_tracerCarrier'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></g>
                <g id='SVGRepo_iconCarrier'>
                  {' '}
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z'
                    fill='#0F0F0F'
                  ></path>{' '}
                  <path
                    d='M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z'
                    fill='#0F0F0F'
                  ></path>{' '}
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z'
                    fill='#0F0F0F'
                  ></path>{' '}
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
