import React from 'react';

import SocialProfiles from '../../components/SocialProfiles/SocialProfiles';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function Page() {
  return (
    <>
      <Header lang="en"/>

      <div className='max-w-2xl lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 mb-auto'>
        <div className='pb-2 lg:col-span-2 lg:col-start-1 lg:pb-16 lg:pr-24'>
          <p className='mb-4'>
            My name is Egor Sharapov. I&apos;m a frontend developer with more than 10
            years of relevant experience.
          </p>

          <p className='mb-4'>
            For the last{' '}
            {Math.floor(
              (Number(new Date('Fri May 17 2024 20:00 GMT+0300 (MSK)')) - Number(new Date('Sat Sep 15 2012 11:34:49 GMT+0300 (MSK)'))) /
              (1000 * 60 * 60 * 24 * 30 * 12),
            )}{' '}
            (OMG) years I have worked at{' '}
            <a href='https://www.kommo.com' target='_blank' rel='noopener nofollow'>
              Kommo
            </a>
            .
          </p>

          <p className='mb-4'>
            Before that a couple of years (since 2010) I&apos;ve worked in one of the top
            Russian web-agencies &mdash;{' '}
            <a
              href='https://www.google.com/search?q=site%3Aqsoft.ru+%D0%B5%D0%B3%D0%BE%D1%80+%D1%88%D0%B0%D1%80%D0%B0%D0%BF%D0%BE%D0%B2'
              target='_blank'
              rel='noopener nofollow'
            >
              QSOFT
            </a>
            . After QSOFT I have developed the first version of Moscow based fixed gear e-store{' '}
            <a href='https://citycycle.ru' target='_blank' rel='noopener nofollow'>
              CityCycle
            </a>
            .
          </p>

          <p className='mb-4'>
            In my spare time I experiment with technologies and frameworks (from
            Arduino to react-native).
          </p>

          <p>
            Besides programming I like football. Before university I have played
            football at the Youth sports school level. Now I go in for fitness
            to stay in a good shape.
          </p>
        </div>

        <div className='mt-4 lg:row-span-3 lg:mt-0'>
          <SocialProfiles />
        </div>
      </div>

      <Footer lang="en" />
    </>
  );
};
