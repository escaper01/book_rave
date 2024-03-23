import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}

export const CalcSumList = (ls: number[]) => {
  const sum = ls.reduce(function (a: number, b: number) {
    return a + b;
  });
  return sum;
};
