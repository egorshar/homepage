'use client';

import { useEffect } from 'react';
import { useCookie } from 'react-use';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { egorShLink } from '@/utils/index';

const Sphere = dynamic(() => import('./Sphere/Sphere'), {
  ssr: false,
  loading: () => (
    <h1
      className='absolute right-0 mr-[1px] -mt-[3px] w-[50px] h-[50px] bg-black dark:bg-gray-800 rounded-full text-white flex pt-[3px] pl-[3px]'>sh</h1>
  ),
});

const LogoWithIndex = ({ isShareware = false }: { isShareware?: boolean }) => {
  const [theme, setTheme, removeTheme] = useCookie('theme');

  useEffect(() => {
    if (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, [theme, setTheme]);

  return (
    <div className='flex relative pr-[64px] select-none'>
      <h1 className='mb-0'>
        {isShareware ? (<Link href={egorShLink}>egor</Link>) : 'egor'}
      </h1>

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
      {isShareware && <h1 className='absolute mb-0 left-full ml-3'>areware</h1>}
    </div>
  );
};

export default LogoWithIndex;
