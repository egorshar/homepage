'use client';

import { useEffect } from 'react';
import { useCookie } from 'react-use';
import dynamic from 'next/dynamic';

const Sphere = dynamic(() => import('./Sphere/Sphere'), { 
  ssr: false,
  loading: () => (
    <div
      className='absolute right-0 mr-[1px] -mt-[3px] w-[50px] h-[50px] bg-black dark:bg-gray-800 rounded-full' />
  )
});

const LogoWithIndex = () => {
  const [theme, setTheme, removeTheme] = useCookie('theme');

  useEffect(() => {
    if (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, [theme, setTheme]);

  return (
    <div className='flex relative pr-[64px] select-none'>
      <h1 className='mb-0'>egor</h1>

      <Sphere
        className='absolute right-0 -mr-[24px] -mt-[53px] w-[100px]'
        theme={theme === 'dark' ? 'dark' : 'light'}
        toggleTheme={() => {
          if (theme === 'dark') {
            removeTheme();
            document.documentElement.classList.remove('dark');
          } else {
            setTheme('dark');
            document.documentElement.classList.add('dark');
          }
        }}
      />
    </div>
  );
};

export default LogoWithIndex;
