'use client';

import { useEffect } from 'react';
import { useCookie } from 'react-use';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sphere = dynamic(() => import('./Sphere/Sphere'), { ssr: false });

const LogoWithIndex = () => {
  const pathname = usePathname();
  const [theme, setTheme, removeTheme] = useCookie('theme');

  useEffect(() => {
    if (!theme &&  window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, [])

  return (
    <div className='flex relative pr-[64px] select-none'>
      <h1 className='mb-0'>
        {pathname !== '/' ? (
          <Link href='/' className='outline-0 shadow-none'>egor</Link>
        ) : 'egor'}
      </h1>

      <Sphere
        className='absolute right-0 -mr-[24px] -mt-[57px] w-[100px]'
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
