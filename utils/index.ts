import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const isDev = () => process.env.NODE_ENV !== 'production';
export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes));