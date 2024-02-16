import Link from 'next/link';

import Logo from '../Logo/Logo';

interface HeaderProps {
  lang: 'en' | 'ru';
  type?: 'feed';
}

function getHeaderByType(headerProps: HeaderProps) {
  const { lang, type } = headerProps;
  const heyEmoji = <span className='animate-wave origin-[70%_70%] inline-block'>👋</span>;

  return (
    <>
      {lang === 'en'
        ? (
          <>
            <Link href='/'>Привет</Link> / <span className='whitespace-nowrap'>hello {heyEmoji}</span>
          </>
            ) : (
          <>
            Привет / <span className='whitespace-nowrap'><Link href='/en'>hello</Link> {heyEmoji}</span>
          </>
        )
      }
    </>
  );
}

export default function Header({ lang, type }: HeaderProps) {
  return (
    <div className='flex items-baseline w-full max-w-2xl lg:max-w-7xl lg:my-10 my-8'>
      <h1 className='mb-0 mr-auto pr-4'>
        {getHeaderByType({ lang, type })}
      </h1>

      <Logo />
    </div>
  );
}