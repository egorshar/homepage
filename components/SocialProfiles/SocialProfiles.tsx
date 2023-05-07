import map from 'lodash/map';

import Image from 'next/image';
import Link from 'next/link';

import GithubIcon from './Icons/Github';
import LinkedInIcon from './Icons/LinkedIn';
import NPMIcon from './Icons/NPM';
import TelegramIcon from './Icons/Telegram';

const socials = [
  {
    url: 'https://t.me/egorshar',
    name: 'Telegram',
    icon: <TelegramIcon />,
  },
  { url: 'https://github.com/egorshar', name: 'GitHub', icon: <GithubIcon /> },
  {
    url: 'https://www.linkedin.com/in/egor-sharapov-18a7a262/',
    name: 'Linked In',
    icon: <LinkedInIcon />,
  },
  {
    url: 'https://www.npmjs.com/package/jquery-ui-sortable-animation',
    name: 'NPM',
    icon: <NPMIcon />,
  },
];

export default function SocialProfiles() {
  return (
    <>
      <div className='aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 overflow-hidden rounded-lg mb-1 relative'>
        <Image src='/static/egor.webp' className='object-left' width={1080} height={1350} alt='Me' />

        <div className='absolute bottom-0 bg-white bg-opacity-50 px-2 rounded-tr-lg'>
          <Link href='https://www.google.com/maps?q=45.81543,9.08026' className='text-slate-500 text-xs' target="_blank">
            📍 Porto di Como, 2018
          </Link>
        </div>
      </div>

      <ul className='p-0 mt-4'>
        {map(socials, (social) => (
          <li className='flex mb-2' key={social.url}>
            <a
              href={social.url}
              className='inline-flex items-center'
              target='_blank'
              rel='nofollow noopener'
            >
              <span className='flex w-4 h-4 mr-1.5'>{social.icon}</span>
              {social.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
