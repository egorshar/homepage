import React from 'react';
import SplitText from '@/components/SplitText/SplitText';
import NextJSIcon from '@/components/SocialProfiles/Icons/NextJS';
import TailwindCSSIcon from '@/components/SocialProfiles/Icons/TailwindCSS';
import VercelIcon from '@/components/SocialProfiles/Icons/Vercel';
import CursorAIIcon from '@/components/SocialProfiles/Icons/CursorAI';

const LINKS = [
  {
    url: 'https://cursor.com/',
    text: <><span>VIBE</span><span className="hidden lg:inline">&nbsp;CODING</span></>,
    icon: <CursorAIIcon />,
  },
  {
    url: 'https://nextjs.org/',
    text: 'NextJS',
    icon: <NextJSIcon />,
  },
  {
    url: 'https://tailwindcss.com/',
    text: 'Tailwind CSS',
    icon: <TailwindCSSIcon />
  },
  {
    url: 'https://vercel.com/',
    text: 'Vercel',
    icon: <VercelIcon />
  }
];

export default function Footer({ t }: { t: Record<string, any>}) {
  return (
    <div className="py-12 w-full px-8">
      <SplitText text={t.footer.header} />
      <div className="mt-8 flex justify-between flex-col md:flex-row">
        {LINKS.map((link) => (
          <a
            key={link.url}
            href={link.url}
            className='group flex items-center hover:text-slate-900 dark:hover:text-white transition-colors duration-200'
            target='_blank'
            rel='nofollow noopener'
          >
            <span
              className='w-6 h-6 mr-3 flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-200'>
              {link.icon}
            </span>
            <span className='text-3xl font-bold uppercase'>
              {link.text}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}