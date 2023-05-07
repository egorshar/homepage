'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const Sphere = dynamic(() => import('./Sphere/Sphere'), { ssr: false });

const LogoWithIndex = () => {
  const pathname = usePathname();

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, []);

  return (
    <div className='flex relative pr-[64px] select-none'>
      <h1 className='mb-0'>
        {pathname !== '/' ? (
          <Link href='/' className='outline-0 shadow-none'>egor</Link>
        ) : 'egor'}
      </h1>

      <Sphere
        className='absolute right-0 -mr-[24px] -mt-[57px] w-[100px]'
        theme={localStorage.theme === 'dark' ? 'dark' : 'light'}
        toggleTheme={() => {
          if (localStorage.theme === 'dark') {
            localStorage.removeItem('theme');
            document.documentElement.classList.remove('dark');
          } else {
            localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
          }
        }}
      />
    </div>
  );
};

export default LogoWithIndex;
