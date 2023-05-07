import Link from 'next/link';

import Logo from '../Logo/Logo';

export default function Header({ lang }) {
  return (
    <div className='flex items-center w-full max-w-2xl lg:max-w-7xl mt-6'>
      <h1 className='mb-0 mr-auto pr-4'>
        {lang === 'en'
          ? (
            <>
              <Link href='/'>Привет</Link> / hello
            </>
          ) : (
            <>
              Привет / <Link href='/en'>hello</Link>
            </>
          )
        }
        &nbsp;
        <span className='animate-wave origin-[70%_70%] inline-block'>👋</span>
      </h1>

      <Logo />
    </div>
  );
}