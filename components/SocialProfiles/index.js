import map from 'lodash/map';

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

export default () => (
  <>
    <img src="/static/egor.jpg" alt="Me" />

    <ul>
      {map(socials, (social) => (
        <li className="social-item" key={social.url}>
          <a
            href={social.url}
            className="social-link"
            target="_blank"
            rel="nofollow noopener"
          >
            <span className="icon">{social.icon}</span>
            {social.name}
          </a>
        </li>
      ))}
    </ul>

    <style jsx>{`
      ul {
        padding: 0;
      }
      .social-item {
        display: flex;
      }
      .social-link {
        display: inline-flex;
        align-items: center;
      }
      .icon {
        display: flex;
        width: 16px;
        height: 16px;
        margin-right: 5px;
      }
      .icon :global(svg) {
        width: 100%;
      }
    `}</style>
  </>
);
