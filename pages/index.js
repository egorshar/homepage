import Link from 'next/link';

import Layout from '../components/Layout';
import SocialProfiles from '../components/SocialProfiles';

export default () => (
  <Layout>
    <r-cell order="-10" span="4" span-s="4">
      <h1>
        Hello / <Link href="/ru">привет</Link> 👋
      </h1>
    </r-cell>

    <r-cell span="3" span-s="row" class="intro">
      <p>
        My name is Egor Sharapov. I'm a frontend developer with more than 10
        years of relevant experience.
      </p>

      <p>
        Over the last{' '}
        {Math.floor(
          (Date.now() - new Date('Sat Sep 15 2012 11:34:49 GMT+0300 (MSK)')) /
            (1000 * 60 * 60 * 24 * 30 * 12)
        )}{' '}
        (OMG) years I have been working at{' '}
        <a href="https://amocrm.com" target="_blank" rel="noopener nofollow">
          amoCRM
        </a>
        .
      </p>

      <p>
        Before that a couple of years (since 2010) I've worked in one of the top
        Russian web-agencies &mdash;{' '}
        <a
          href="https://www.google.com/search?q=site%3Aqsoft.ru+%D0%B5%D0%B3%D0%BE%D1%80+%D1%88%D0%B0%D1%80%D0%B0%D0%BF%D0%BE%D0%B2"
          target="_blank"
          rel="noopener nofollow"
        >
          QSOFT
        </a>
        . After QSOFT I have developed the first version of Moscow based fixed gear e-store{' '}
        <a href="https://citycycle.ru" target="_blank" rel="noopener nofollow">
          CityCycle
        </a>
        .
      </p>

      <p>
        In my spare time I experiment with technologies and frameworks (from
        Arduino to react-native).
      </p>

      <p>
        Besides programming I like football. Before university I have played
        football at the Youth sports school level. Most recently &mdash; at the
        amateur level in{' '}
        <a
          href="https://training.cityfootball.ru/player/view/134522"
          target="_blank"
          rel="noopener nofollow"
        >
          CityFootball
        </a>{' '}
        Moscow.
      </p>
    </r-cell>

    <r-cell class="bio" order-xs="-1" span="5-6" span-s="row">
      <SocialProfiles />
    </r-cell>

    <r-cell class="footer" span="6">
      <h4>This website</h4>

      <ul>
        <li class="next">
          Developed with
          <a href="https://nextjs.org/" target="_blank" rel="noopener nofollow">
            <svg width="82" height="40" viewBox="0 0 148 90">
              <path
                d="M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z"
                fill="black"
                fill-rule="nonzero"
              />
            </svg>
          </a>
        </li>
        <li class="vercel">
          Deployed with
          <a href="https://vercel.com/" target="_blank" rel="noopener nofollow">
            <svg
              height="20"
              viewBox="0 0 283 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
                fill="#000"
              />
            </svg>
          </a>
        </li>
      </ul>
    </r-cell>
  </Layout>
);
