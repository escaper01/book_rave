import cn from './func';

const SVG_WIDTH = 17;
const SVG_HEIGHT = 17;

export const ArrowSvg = ({
  className,
  fill,
  isClicked,
  onClick,
}: {
  className: string;
  fill: string;
  isClicked: boolean;
  onClick: () => void;
}) => {
  return (
    <svg
      onClick={onClick}
      className={cn(className)}
      width={SVG_WIDTH}
      height={SVG_HEIGHT}
      viewBox='0 0 24 24'
      fill={`${isClicked ? fill : '0'}`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g strokeWidth='0'></g>
      <g strokeLinecap='round' strokeLinejoin='round'></g>
      <g id='SVGRepo_iconCarrier'>
        <path
          d='M12 3L21 10L16.0104 10L16 21L8 21L8 10L3 10L12 3Z'
          stroke='#000000'
          strokeWidth={`${isClicked ? '0' : '1.5'}`}
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
      </g>
    </svg>
  );
};

export const CommentSvg = ({ className }: { className: string }) => {
  return (
    <svg
      className={cn(className)}
      width={SVG_WIDTH}
      height={SVG_HEIGHT}
      viewBox='0 0 32 32'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      fill='#000000'
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        <title>comment-5</title> <desc>Created with Sketch Beta.</desc>
        <defs> </defs>
        <g
          id='Page-1'
          stroke='none'
          strokeWidth='1'
          fill='none'
          fillRule='evenodd'
        >
          <g
            id='Icon-Set'
            transform='translate(-360.000000, -255.000000)'
            fill='#000000'
          >
            <path
              d='M390,277 C390,278.463 388.473,280 387,280 L379,280 L376,284 L373,280 L365,280 C363.527,280 362,278.463 362,277 L362,260 C362,258.537 363.527,257 365,257 L387,257 C388.473,257 390,258.537 390,260 L390,277 L390,277 Z M386.667,255 L365.333,255 C362.388,255 360,257.371 360,260.297 L360,277.187 C360,280.111 362.055,282 365,282 L371.639,282 L376,287.001 L380.361,282 L387,282 C389.945,282 392,280.111 392,277.187 L392,260.297 C392,257.371 389.612,255 386.667,255 L386.667,255 Z'
              id='comment-5'
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

export const ShareSvg = ({ className }: { className: string }) => {
  return (
    <svg
      className={cn(className)}
      width={SVG_WIDTH}
      height={SVG_HEIGHT}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M3.75 4.5H5.25V18.75H19.5V20.25H3.75V4.5ZM17.6515 8.25001L15.2196 5.81812L16.2803 4.75746L20.4851 8.96229L16.2803 13.1671L15.2196 12.1065L17.5761 9.75001L14.25 9.75C11.7647 9.75 9.75 11.7647 9.75 14.25V16.5H8.25V14.25C8.25 10.9363 10.9363 8.25 14.25 8.25L17.6515 8.25001Z'
          fill='black'
        ></path>
      </g>
    </svg>
  );
};

export const SaveSvg = ({ className }: { className: string }) => {
  return (
    <svg
      className={cn(className)}
      width={SVG_WIDTH}
      height={SVG_HEIGHT}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        <path
          d='M16 8.98987V20.3499C16 21.7999 14.96 22.4099 13.69 21.7099L9.76001 19.5199C9.34001 19.2899 8.65999 19.2899 8.23999 19.5199L4.31 21.7099C3.04 22.4099 2 21.7999 2 20.3499V8.98987C2 7.27987 3.39999 5.87988 5.10999 5.87988H12.89C14.6 5.87988 16 7.27987 16 8.98987Z'
          stroke='#292D32'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
        <path
          d='M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.39999 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z'
          stroke='#292D32'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
        <path
          d='M7 12H11'
          stroke='#292D32'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
        <path
          d='M9 14V10'
          stroke='#292D32'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
      </g>
    </svg>
  );
};
