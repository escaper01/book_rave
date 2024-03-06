import { cn } from '@/constants/func';

export default function ProgressBar({
  className,
  progress,
}: {
  className: string;
  progress: number;
}) {
  return (
    <div
      className={cn(
        'h-3 w-full overflow-hidden rounded-full bg-my-gray-primary',
        className
      )}
    >
      <span
        className='block h-full w-full rounded-full bg-my-yellow-dark'
        style={{ width: progress + '%' }}
      ></span>
    </div>
  );
}
