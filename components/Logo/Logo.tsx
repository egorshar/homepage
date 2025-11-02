'use client';

import { useEffect } from 'react';
import { useCookie } from 'react-use';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { egorShLink } from '@/utils/index';

const Sphere = dynamic(() => import('./Sphere/Sphere'), {
  ssr: false,
  loading: () => (
    <h1 className="absolute left-full ml-3 -mt-[3px] w-[50px] h-[50px] bg-black dark:bg-gray-800 rounded-full text-white flex pt-[3px] pl-[3px]">
      sh
    </h1>
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
    <div className="flex relative select-none">
      <div className="flex relative">
        <h1 className="mb-0">
          {isShareware ? <Link href={egorShLink}>egor</Link> : 'egor'}
        </h1>

        <Sphere
          className="absolute left-full -ml-[11px] -mt-[53px] w-[100px]"
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
      {isShareware && (
        <h1 className="mb-0 left-full ml-[4.8rem]">
          areware<sup> 🧠 💸</sup>
        </h1>
      )}
    </div>
  );
};

export default LogoWithIndex;
