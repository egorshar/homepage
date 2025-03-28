import SplitText from '@/components/SplitText/SplitText';

import GithubIcon from './Icons/Github';
import LinkedInIcon from './Icons/LinkedIn';
import NPMIcon from './Icons/NPM';
import TelegramIcon from './Icons/Telegram';
import AnimatedText from '@/components/AnimatedText/AnimatedText';

const socials = [
  {
    url: 'https://t.me/egorshar',
    name: 'TELEGRAM',
    icon: <TelegramIcon />,
  },
  {
    url: 'https://github.com/egorshar',
    name: 'GITHUB',
    icon: <GithubIcon />,
  },
  {
    url: 'https://www.linkedin.com/in/egor-sharapov-18a7a262/',
    name: 'LINKED IN',
    icon: <LinkedInIcon />,
  },
  {
    url: 'https://www.npmjs.com/package/jquery-ui-sortable-animation',
    name: 'NPM',
    icon: <NPMIcon />,
  },
];

export default function SocialProfiles({ t }: { t: Record<string, any> }) {
  return (
    <div className='w-full py-12 px-8'>
      <SplitText text={t.social.header} />
      <div className='mt-8 flex justify-between flex-col md:flex-row'>
        {socials.map((social) => (
          <AnimatedText>
            <a
              key={social.url}
              href={social.url}
              className='group flex items-center hover:text-slate-900 dark:hover:text-white transition-colors duration-200'
              target='_blank'
              rel='nofollow noopener'
            >
            <span
              className='w-6 h-6 mr-3 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-200'>
              {social.icon}
            </span>
              <span className='text-3xl font-bold uppercase'>
              {social.name}
            </span>
            </a>
          </AnimatedText>
        ))}
      </div>
    </div>
  );
}
