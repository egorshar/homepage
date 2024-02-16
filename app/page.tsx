import Image from 'next/image';

import SocialProfiles from '../components/SocialProfiles/SocialProfiles';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Link from 'next/link';

export default function Page({ params }) {
  return (
    <>
      <Header lang={params.lang} />

      <div className='max-w-2xl lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 mb-auto'>
        <div className='pb-2 lg:col-span-2 lg:col-start-1 lg:pb-16 lg:pr-24'>
          <p>
            Меня зовут Егор Шарапов. Я frontend-разработчик с более чем 10-летним
            опытом.
          </p>

          <p>
            Последние{' '}
            {Math.floor(
              (Date.now() - Number(new Date('Sat Sep 15 2012 11:34:49 GMT+0300 (MSK)'))) /
              (1000 * 60 * 60 * 24 * 30 * 12),
            )}{' '}
            (OMG) лет я работаю в{' '}
            <a href='https://amocrm.ru' target='_blank' rel='noopener nofollow'>
              amoCRM
            </a>
            .
          </p>

          <p>
            До этого пару лет (с 2010) работал в одной из ведущих веб-студий России{' '}
            <a
              href='https://www.google.com/search?q=site%3Aqsoft.ru+%D0%B5%D0%B3%D0%BE%D1%80+%D1%88%D0%B0%D1%80%D0%B0%D0%BF%D0%BE%D0%B2'
              target='_blank'
              rel='noopener nofollow'
            >
              QSOFT
            </a>
            , потом, примерно, полгода фрилансил. За время фриланса почти в одиночку
            реализовал всю механику первой версии интернет-магазина городских
            велосипедов{' '}
            <a href='https://citycycle.ru' target='_blank' rel='noopener nofollow'>
              CityCycle
            </a>
            .
          </p>

          <p>
            В свободное время я экспериментирую с технологиями и фреймворками (от
            Arduino до react-native), пишу в телеграм канал:
          </p>

          <p>
            {/*<Link href="/feed" className="no-underline">*/}
            <Link href="https://t.me/opg_dev" className="no-underline">
              <button className='flex w-full items-center justify-center rounded-md sm:text-left md:text-center border border-transparent bg-black px-8 py-3 text-base font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:bg-slate-200 dark:text-slate-800 dark:hover:bg-slate-400 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-800'>
                <Image src="/static/channel.jpeg" width={40} height={40} className="rounded-full mr-2 md:w-[32px]" alt="Организованная Программерская Группировка" />Организованная Программерская Группировка
              </button>
            </Link>
          </p>

          <p>
            Помимо разработки увлекаюсь футболом. До университета играл на уровне
            ДЮСШ, последние годы &mdash; на любительском уровне в{' '}
            <a
              href='https://training.cityfootball.ru/player/view/134522'
              target='_blank'
              rel='noopener nofollow'
            >
              CityFootball
            </a>
            . На данный момент просто хожу в зал, чтобы держать себя в хорошей форме.
          </p>
        </div>

        <div className='mt-4 lg:row-span-3 lg:mt-0'>
          <SocialProfiles />
        </div>
      </div>

      <Footer lang='ru' />
    </>
  );
};
