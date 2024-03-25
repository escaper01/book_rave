import { cn } from './func';

const SVG_WIDTH = 17;
const SVG_HEIGHT = 17;

export const CloseSvg = ({
  className,
  onClick,
}: {
  className?: string;
  onClick: () => void;
}) => {
  return (
    <svg
      onClick={onClick}
      className={cn(className)}
      width={SVG_WIDTH}
      height={SVG_HEIGHT}
      viewBox='0 0 24 24'
      fill='white'
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
          d='M8.00386 9.41816C7.61333 9.02763 7.61334 8.39447 8.00386 8.00395C8.39438 7.61342 9.02755 7.61342 9.41807 8.00395L12.0057 10.5916L14.5907 8.00657C14.9813 7.61605 15.6144 7.61605 16.0049 8.00657C16.3955 8.3971 16.3955 9.03026 16.0049 9.42079L13.4199 12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134 16.0039 16.0039C15.6133 16.3945 14.9802 16.3945 14.5896 16.0039L12.0057 13.42L9.42097 16.0048C9.03045 16.3953 8.39728 16.3953 8.00676 16.0048C7.61624 15.6142 7.61624 14.9811 8.00676 14.5905L10.5915 12.0058L8.00386 9.41816Z'
          fill='#0F0F0F'
        ></path>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z'
          fill='#0F0F0F'
        ></path>
      </g>
    </svg>
  );
};

export const LoadingSpinner = ({ className }: { className?: string }) => {
  return (
    <svg
      width={SVG_WIDTH}
      height={SVG_HEIGHT}
      fill='none'
      className={cn('h-6 w-6 ', className)}
      viewBox='0 0 32 32'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        clipRule='evenodd'
        d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z'
        fill='currentColor'
        fillRule='evenodd'
      />
    </svg>
  );
};

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

export const SaveSvg = ({
  className,
  fill,
  onClick,
}: {
  className: string;
  fill?: string;
  onClick?: () => void;
}) => {
  return (
    <svg
      onClick={onClick}
      className={cn(className)}
      width={SVG_WIDTH}
      height={SVG_HEIGHT}
      viewBox='0 0 24 24'
      fill={fill ? fill : 'none'}
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

export const LogoutSvg = ({
  className,
  onClick,
}: {
  className: string;
  onClick?: () => void;
}) => {
  return (
    <svg
      className={cn(className)}
      onClick={onClick}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={SVG_WIDTH}
      height={SVG_HEIGHT}
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        {' '}
        <path
          d='M21 12L13 12'
          stroke='#323232'
          strokeWidth='2.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>{' '}
        <path
          d='M18 15L20.913 12.087V12.087C20.961 12.039 20.961 11.961 20.913 11.913V11.913L18 9'
          stroke='#323232'
          strokeWidth='2.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>{' '}
        <path
          d='M16 5V4.5V4.5C16 3.67157 15.3284 3 14.5 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H14.5C15.3284 21 16 20.3284 16 19.5V19.5V19'
          stroke='#323232'
          strokeWidth='2.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>{' '}
      </g>
    </svg>
  );
};

export const RemoveSvg = ({
  className,
  fill,
  onClick,
}: {
  className: string;
  fill?: string;
  onClick?: () => void;
}) => {
  return (
    <svg
      onClick={onClick}
      className={cn(className)}
      width={SVG_WIDTH}
      height={SVG_HEIGHT}
      viewBox='0 0 24 24'
      fill={fill ? fill : 'none'}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        {' '}
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M2.06935 5.25839C2 5.62595 2 6.06722 2 6.94975V14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14V11.7979C22 9.16554 22 7.84935 21.2305 6.99383C21.1598 6.91514 21.0849 6.84024 21.0062 6.76946C20.1506 6 18.8345 6 16.2021 6H15.8284C14.6747 6 14.0979 6 13.5604 5.84678C13.2651 5.7626 12.9804 5.64471 12.7121 5.49543C12.2237 5.22367 11.8158 4.81578 11 4L10.4497 3.44975C10.1763 3.17633 10.0396 3.03961 9.89594 2.92051C9.27652 2.40704 8.51665 2.09229 7.71557 2.01738C7.52976 2 7.33642 2 6.94975 2C6.06722 2 5.62595 2 5.25839 2.06935C3.64031 2.37464 2.37464 3.64031 2.06935 5.25839ZM9.25 13C9.25 12.5858 9.58579 12.25 10 12.25H14C14.4142 12.25 14.75 12.5858 14.75 13C14.75 13.4142 14.4142 13.75 14 13.75H10C9.58579 13.75 9.25 13.4142 9.25 13Z'
          fill='#1C274C'
        ></path>{' '}
      </g>
    </svg>
  );
};
