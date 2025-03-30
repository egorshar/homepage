import SplitText from '@/components/SplitText/SplitText';
import AnimatedText from '@/components/AnimatedText/AnimatedText';

export default function About({ t }: { t: Record<string, any> }) {
  return (
    <div className='w-full py-12 pt-0 px-8'>
      <SplitText text={t.about.header} />
      <div className='mt-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='space-y-12'>
            <div className='grid md:grid-cols-2 md:gap-12 gap-4'>
              <div className='space-y-8 text-lg leading-relaxed'>
                <AnimatedText>
                  <p className='text-slate-600 dark:text-slate-400'>
                    <b>{t.about.my_name_is}</b>{t.about.my_name_description}
                  </p>

                  <p className='text-slate-600 dark:text-slate-400'>
                    {t.about.expert}
                  </p>
                </AnimatedText>
              </div>

              <div className='space-y-8 text-lg leading-relaxed'>
                <AnimatedText>
                  <p className='text-slate-600 dark:text-slate-400'>
                    {t.about.good_man}
                  </p>

                  <p className='text-slate-600 dark:text-slate-400'>
                    {t.about.hobby}&nbsp;
                    <a
                      href='https://training.cityfootball.ru/player/view/134522'
                      target='_blank'
                    >
                      CityFootball
                    </a>
                  </p>
                  <p className='text-slate-600 dark:text-slate-400'>{t.about.fitness}</p>
                </AnimatedText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}