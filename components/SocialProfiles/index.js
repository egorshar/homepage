import map from 'lodash/map';

import InstagramIcon from './Icons/Instagram';
import FacebookIcon from './Icons/Facebook';
import GithubIcon from './Icons/Github';
import LinkedInIcon from './Icons/LinkedIn';
import VKIcon from './Icons/VK';

const socials = [
  {
    url: 'https://www.facebook.com/egorshar',
    name: 'Facebook',
    icon: <FacebookIcon />,
  },
  { url: 'https://vk.com/egorshar', name: 'VK', icon: <VKIcon /> },
  { url: 'https://github.com/egorshar', name: 'GitHub', icon: <GithubIcon /> },
  {
    url: 'https://www.linkedin.com/in/egor-sharapov-18a7a262/',
    name: 'Linked In',
    icon: <LinkedInIcon />,
  },
  {
    url: 'https://www.instagram.com/egorshar/',
    name: 'Instagram',
    icon: <InstagramIcon />,
  },
];

export default () => (
  <>
    <p>My social profiles:</p>
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
