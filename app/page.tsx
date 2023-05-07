import React from 'react';

import SocialProfiles from '../components/SocialProfiles/SocialProfiles';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function Page({ params }) {
  return (
    <>
      <Header lang={params.lang} />

      <div className='mt-6 max-w-2xl lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8'>
        <div className='pb-2 lg:col-span-2 lg:col-start-1 lg:pb-16 lg:pr-24'>
          <p className='mb-4'>
            Меня зовут Егор Шарапов. Я frontend-разработчик с более чем 10-летним
            опытом.
          </p>

          <p className='mb-4'>
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

          <p className='mb-4'>
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

          <p className='mb-4'>
            В свободное время я экспериментирую с технологиями и фреймворками (от
            Arduino до react-native), редко пишу в{' '}
            <a href='https://t.me/opg_dev' target='_blank' rel='noopener nofollow'>
              телеграм канал
            </a>
            .
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
            .
          </p>
        </div>

        <div className='mt-4 lg:row-span-3 lg:mt-0'>
          <SocialProfiles />
        </div>
      </div>

      <Footer lang="ru" />
    </>
  );
};
