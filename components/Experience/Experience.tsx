import SplitText from '@/components/SplitText/SplitText';
import AnimatedText from '@/components/AnimatedText/AnimatedText';

export default function Experience({ t }: { t: Record<string, any>}) {
  const JOBS = [
    {
      name: 'NDA',
      time: '2024 - PRESENT',
      role: 'Head of Frontend',
      description: [t.experience.current],
    },
    {
      name: 'amo | Team Messenger',
      url: 'https://amo.tm',
      time: '2019/2022 - 2024',
      role: 'Frontend Team-Lead',
      description: [
        t.experience.amo1,
        t.experience.amo2,
        t.experience.amo3,
        t.experience.amo4,
      ],
    },
    {
      name: 'amoCRM / Kommo',
      url: 'https://kommo.com/',
      time: '2012 - 2024',
      role: 'Middle -> Senior -> Head of Frontend',
      description: [
        t.experience.amocrm1,
        t.experience.amocrm2,
        t.experience.amocrm3,
        t.experience.amocrm4,
      ],
    },
    {
      name: 'QSOFT',
      url: 'https://qsoft.ru',
      time: '2010 - 2012',
      role: 'Web Developer',
      description: [
        t.experience.first,
        t.experience.first2,
      ],
    },
  ];

  return (
    <div className='w-full py-12 px-8'>
      <SplitText text={t.experience.header} />
      <div className='mt-8'>
        <div className='space-y-12'>
          {JOBS.map((item, index) => (
            <div key={item.name} className='group relative pb-12'>
              <div className='flex flex-col md:flex-row md:items-start md:gap-12'>
                <div className='md:w-1/3'>
                  <AnimatedText>
                    <div className='text-3xl font-bold mb-4 uppercase'><a href={item.url} target="_blank">{item.name}</a></div>
                    <div className='text-lg text-slate-600 dark:text-slate-400'>{item.time}</div>
                  </AnimatedText>
                </div>
                <div className='md:w-2/3'>
                  <AnimatedText>
                    <div className='text-3xl font-bold mb-4 uppercase'>{item.role}</div>
                    {item.description.map((text) => (
                      <p key={text} className='text-lg text-slate-600 dark:text-slate-400'>
                        {text}
                      </p>
                    ))}

                  </AnimatedText>
                </div>
              </div>
              <div className='absolute bottom-0 left-0 w-full h-px bg-slate-200 dark:bg-slate-700'></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}