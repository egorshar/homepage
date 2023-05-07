'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => (
  <div className='shrink-0 w-[83px] h-[73px] overflow-hidden' title='Sphere pronounces like "shar" in Russian'>
    <Image
      src='/static/shar.webp'
      className='w-[100px] max-w-[100px] h-[100px] -ml-4 -mt-5'
      width={600}
      height={600}
      alt='Sphere pronounces like "shar" in Russian'
    />
  </div>
);

const LogoWithIndex = () => {
  const pathname = usePathname();

  return (
    pathname !== '/' ? (
      <Link href='/' className='outline-0 shadow-none'>
        <Logo />
      </Link>
    ) : (
      <Logo />
    )
  );
};

export default LogoWithIndex;
