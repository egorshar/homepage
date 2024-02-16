import Link from 'next/link';

import Logo from '../Logo/Logo';

interface HeaderProps {
  lang: 'en' | 'ru';
  type?: 'feed';
}

export default function Header({ lang }) {
  return (
    <div className='flex sm:items-baseline md:items-center w-full max-w-2xl lg:max-w-7xl mt-6'>
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