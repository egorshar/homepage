import Header from '@/components/Header/Header';
import SplitText from '@/components/SplitText/SplitText';
import AnimatedText from '@/components/AnimatedText/AnimatedText';

const mentoringHighlights = [
  {
    title: 'С нуля до продакшена',
    description: 'Помогаю собрать фундамент фронтенда: от базового HTML/CSS/JS до первого сайта, который выходит в прод.',
  },
  {
    title: 'Практика на ваших задачах',
    description: 'Работаем поверх вашего продукта или pet-проекта, превращая созвоны в конкретные коммиты и релизы.',
  },
  {
    title: 'AI как часть процесса',
    description: 'Показываю, как встроить AI-инструменты в ежедневную разработку: код-ревью, тесты, ресёрч и документацию.',
  },
  {
    title: 'Убираем слабые места',
    description: 'Разбираем архитектуру, перформанс, DX и командные процессы, пока система не станет устойчивой.',
  },
];

const collaborationSteps = [
  {
    title: 'Диагностика и маршрут',
    description: 'Погружаемся в ваш уровень, цели и контекст, фиксируем стартовую точку и собираем roadmap роста.',
  },
  {
    title: 'План и практика',
    description: 'Разбиваем трек на спринты: практикуем созвоны, созваниваемся по коду, собираем фичи и закрепляем знание.',
  },
  {
    title: 'Движение и поддержка',
    description: 'Меряем прогресс, корректируем курс и остаёмся на связи, чтобы сложные решения не откладывались.',
  },
];

const trustSignals = [
  '15+ лет строю фронтенд-команды и продукты: от стартапов до enterprise.',
  'Комбинирую опыт архитектора, тимлида и продакт-ментора — без теории ради теории.',
  'Работаем в формате «делаем вместе»: созвоны, ревью, чек-листы и понятные артефакты.',
];

export default function ConsultingMentoring() {
  return (
    <>
      <Header isShareware={true} />
      <main className='px-6 md:px-12 lg:px-16 space-y-24'>
        <section className='pt-8'>
          <SplitText text='FRONTEND МЕНТОРИНГ' />
          <AnimatedText className='mt-6 max-w-3xl text-2xl md:text-[28px] leading-snug text-slate-800 dark:text-slate-200'>
            <p>
              Менторю разработчиков и команды по фронтенду: от первых шагов без опыта до запуска продакшн-проектов. Помогаю
              встроить AI-инструменты в ежедневную работу и закрыть пробелы: архитектура, перформанс, лидерство, процессы.
            </p>
          </AnimatedText>
        </section>

        <section>
          <SplitText text='ЧЕМ ПОМОГУ' />
          <div className='mt-10 grid gap-6 md:grid-cols-2'>
            {mentoringHighlights.map((highlight, index) => {
              const isWhite = index % 2 === 0;
              return (
                <AnimatedText key={highlight.title} className='h-full'>
                  <div
                    className={`h-full rounded-3xl border border-slate-200 dark:border-slate-800 px-8 py-10 transition-colors ${
                      isWhite
                        ? 'bg-white text-slate-900'
                        : 'bg-black text-white'
                    }`}
                  >
                    <h2 className='text-2xl font-bold uppercase'>{highlight.title}</h2>
                    <p className={`mt-4 text-lg leading-relaxed ${isWhite ? 'text-slate-600' : 'text-slate-200'}`}>
                      {highlight.description}
                    </p>
                  </div>
                </AnimatedText>
              );
            })}
          </div>
        </section>

        <section>
          <SplitText text='Как мы работаем' />
          <div className='mt-10 grid gap-6 md:grid-cols-3'>
            {collaborationSteps.map((step, index) => (
              <AnimatedText key={step.title}>
                <div className='rounded-3xl border border-slate-200 dark:border-slate-800 bg-white px-8 py-10 h-full'>
                  <span className='text-sm font-semibold text-slate-400 uppercase'>Шаг {index + 1}</span>
                  <h3 className='mt-3 text-2xl font-bold uppercase text-slate-900'>{step.title}</h3>
                  <p className='mt-4 text-lg leading-relaxed text-slate-600'>{step.description}</p>
                </div>
              </AnimatedText>
            ))}
          </div>
        </section>

        <section className='grid gap-6 lg:grid-cols-[3fr_2fr] items-stretch'>
          <AnimatedText className='h-full'>
            <div className='flex h-full flex-col rounded-3xl border border-slate-200 dark:border-slate-800 bg-white px-8 py-10 text-slate-900'>
              <h2 className='text-2xl font-bold uppercase'>Что получите</h2>
              <ul className='mt-6 space-y-4 text-lg leading-relaxed'>
                {trustSignals.map((signal) => (
                  <li key={signal}>• {signal}</li>
                ))}
              </ul>
            </div>
          </AnimatedText>
          <AnimatedText className='h-full'>
            <div className='flex h-full flex-col rounded-3xl border border-slate-200 dark:border-slate-800 bg-black px-8 py-10 text-white'>
              <h2 className='text-2xl font-bold uppercase'>Опора на результат</h2>
              <p className='mt-4 text-lg leading-relaxed text-slate-200'>
                Упор на системные изменения: фиксируем чек-листы, регламенты и метрики, чтобы рост не заканчивался на нашем созвоне.
              </p>
            </div>
          </AnimatedText>
        </section>

        <section>
          <SplitText text='Про меня' />
          <AnimatedText className='mt-6'>
            <div className='rounded-3xl border border-slate-200 dark:border-slate-800 bg-white px-8 py-10 text-slate-800'>
              <p className='text-lg leading-relaxed'>
                15 лет руковожу фронтендом продуктов с frontend командами уровня 20+ разработчиков, строю команды, процессы и архитектуру. Подробнее про мой опыт на{' '}
                <a href='https://egor.sh' target='_blank' rel='noopener noreferrer' className='underline'>
                  https://egor.sh
                </a>
                .
              </p>
            </div>
          </AnimatedText>
        </section>

        <section className='pb-8'>
          <SplitText text='работаем?' />
          <AnimatedText className='mt-6 max-w-3xl text-xl leading-relaxed text-slate-700'>
            <div>
              <h3 className='text-2xl font-bold text-slate-900'>обычный формат работы</h3>
              <ul className='mt-4 list-disc space-y-3 pl-6 text-lg leading-relaxed text-slate-700'>
                <li>постоянная работа в асинхронном формате через telegram + github</li>
                <li>4 созвона в месяц по полтора часа</li>
                <li>на онбординг-звонке обсудим детальнее</li>
              </ul>
            </div>
          </AnimatedText>
          <AnimatedText className='mt-8'>
            <a
              href='mailto:i@egorshareware.ru?subject=%D0%A4%D1%80%D0%BE%D0%BD%D1%82%D0%B5%D0%BD%D0%B4%20%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D1%80%D0%B8%D0%BD%D0%B3'
              className='no-underline'
            >
              <button
                className='flex w-full h-[100px] items-center rounded-3xl text-left border border-transparent bg-black px-8 py-3 text-2xl md:text-3xl font-bold uppercase text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2'
              >
                499$ в месяц
              </button>
            </a>
          </AnimatedText>
        </section>
      </main>
    </>
  );
}
