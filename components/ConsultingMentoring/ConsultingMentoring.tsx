import Header from '@/components/Header/Header';
import SplitText from '@/components/SplitText/SplitText';
import AnimatedText from '@/components/AnimatedText/AnimatedText';
import SocialProfiles from '@/components/SocialProfiles/SocialProfiles';
import Footer from '@/components/Footer/Footer';

const consultingPillars = [
  {
    title: 'Продуктовая стратегия',
    description: 'Собираем сигнал из данных, обратной связи и рынка, чтобы приоритизировать фичи, которые двигают метрики, а не копят техдолг.',
  },
  {
    title: 'Системы и процессы',
    description: 'Отстраиваем прозрачные процессы разработки и коммуникаций, чтобы команда работала в едином ритме и без микроменеджмента.',
  },
  {
    title: 'Масштабирование команды',
    description: 'Помогаю нанять или разогнать продуктовую команду, настроить ритуалы, onboarding и growth-планы для каждого ключевого игрока.',
  },
];

const mentoringAngles = [
  {
    title: 'Личный рост',
    description: 'Строим индивидуальную траекторию развития, которая синхронизирована с задачами бизнеса и вашими амбициями.',
  },
  {
    title: 'Практика вместо теории',
    description: 'Разбираем реальные кейсы, ваши текущие проекты и метрики. Каждая встреча заканчивается понятным планом действий.',
  },
  {
    title: 'Поддержка в сложных решениях',
    description: 'Вы не остаетесь один на один с неопределённостью: помогу разобрать конфликт, запустить сложный релиз или пройти апрув от стейкхолдеров.',
  },
];

const collaborationSteps = [
  {
    title: 'Диагностика и фокус',
    description: 'В первую сессию погружаемся в контекст, анализируем метрики и формулируем гипотезы роста.',
  },
  {
    title: 'План действий',
    description: 'Фиксируем приоритеты, шаги и ответственных. Я остаюсь рядом, чтобы помочь внедрить изменения без лишней бюрократии.',
  },
  {
    title: 'Измеримый результат',
    description: 'Отслеживаем показатели и ретроспективы, корректируем движение и документируем решения, чтобы команда могла масштабировать успех.',
  },
];

const trustSignals = [
  '15+ лет строю цифровые продукты: от стартапов до enterprise.',
  'Инженерное, продуктовое и операционное мышление в одной роли.',
  'Работаю в формате «сделаем вместе», а не выдаю отчёты в вакууме.',
];

export default function ConsultingMentoring({ t }: { t: Record<string, any> }) {
  return (
    <>
      <Header isShareware={true} />
      <main className='px-6 md:px-12 lg:px-16 space-y-24'>
        <section className='pt-8'>
          <SplitText text='Консалтинг и менторинг' />
          <AnimatedText className='mt-6 max-w-3xl text-2xl md:text-[28px] leading-snug text-slate-800 dark:text-slate-200'>
            <p>
              Помогаю продуктовым и инженерным командам расти быстрее: выходим на предсказуемые релизы,
              повышаем retention, наводим порядок в процессах и усиливаем людей, от которых зависит результат.
            </p>
          </AnimatedText>
        </section>

        <section className='grid gap-6 lg:grid-cols-3'>
          {consultingPillars.map((pillar) => (
            <AnimatedText key={pillar.title} className='h-full'>
              <div className='h-full rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 px-8 py-10 shadow-[0_20px_45px_-25px_rgba(15,23,42,0.3)]'>
                <h2 className='text-2xl font-bold uppercase text-slate-900 dark:text-white'>{pillar.title}</h2>
                <p className='mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300'>{pillar.description}</p>
              </div>
            </AnimatedText>
          ))}
        </section>

        <section className='grid gap-6 lg:grid-cols-[2fr_3fr] items-start'>
          <AnimatedText>
            <div className='rounded-3xl border border-slate-200 dark:border-slate-800 bg-[#fef7ff] px-8 py-10'>
              <h2 className='text-2xl font-bold uppercase text-[#9d4ded]'>Форматы консалтинга</h2>
              <ul className='mt-4 space-y-3 text-lg leading-relaxed text-slate-700 dark:text-slate-200'>
                <li>• Weekly-формат: глубокая сессия раз в неделю + async-поддержка для команды.</li>
                <li>• Sprint-формат: настраиваем процессы за 2-3 недели, фиксируем регламенты и метрики.</li>
                <li>• Anti-crisis: подключаюсь «вчера», чтобы привести систему к контролируемому состоянию.</li>
              </ul>
            </div>
          </AnimatedText>
          <AnimatedText className='grid gap-6 sm:grid-cols-2'>
            {mentoringAngles.map((angle) => (
              <div key={angle.title} className='rounded-3xl border border-slate-200 dark:border-slate-800 bg-black px-8 py-10 text-white'>
                <h3 className='text-xl font-bold uppercase'>{angle.title}</h3>
                <p className='mt-4 text-base leading-relaxed text-slate-100'>{angle.description}</p>
              </div>
            ))}
          </AnimatedText>
        </section>

        <section>
          <SplitText text='Как мы работаем' />
          <div className='mt-10 grid gap-6 md:grid-cols-3'>
            {collaborationSteps.map((step, index) => (
              <AnimatedText key={step.title}>
                <div className='rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 px-8 py-10 h-full'>
                  <span className='text-sm font-semibold text-slate-400 dark:text-slate-500 uppercase'>Шаг {index + 1}</span>
                  <h3 className='mt-3 text-2xl font-bold uppercase text-slate-900 dark:text-white'>{step.title}</h3>
                  <p className='mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300'>{step.description}</p>
                </div>
              </AnimatedText>
            ))}
          </div>
        </section>

        <section className='grid gap-6 lg:grid-cols-[3fr_2fr] items-center'>
          <AnimatedText>
            <div className='rounded-3xl border border-slate-200 dark:border-slate-800 bg-[#f9f2f4] px-8 py-10 text-[#c7254e]'>
              <h2 className='text-2xl font-bold uppercase'>Почему доверяют</h2>
              <ul className='mt-6 space-y-4 text-lg leading-relaxed'>
                {trustSignals.map((signal) => (
                  <li key={signal}>• {signal}</li>
                ))}
              </ul>
            </div>
          </AnimatedText>
          <AnimatedText className='rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-950 px-8 py-10 text-slate-100'>
            <h2 className='text-2xl font-bold uppercase text-white'>Результат для вас</h2>
            <p className='mt-4 text-lg leading-relaxed text-slate-200'>
              Сформулированная стратегия, работающие процессы и сильная команда, которая видит цель и понимает, как к ней прийти.
              Никаких расплывчатых отчетов — только конкретные артефакты, решения и шаги.
            </p>
          </AnimatedText>
        </section>

        <section className='pb-8'>
          <SplitText text='Выбирайте формат' />
          <AnimatedText className='mt-6 max-w-3xl text-xl leading-relaxed text-slate-700 dark:text-slate-200'>
            <p>
              Напишите письмо — и мы договоримся о первом созвоне. Я быстро погружаюсь в контекст, задаю прямые вопросы,
              после чего предлагаю конкретный план, с которым вам будет просто стартовать.
            </p>
          </AnimatedText>
          <div className='mt-8 flex flex-col md:flex-row gap-6'>
            <AnimatedText className='md:flex-1'>
              <a
                href='mailto:i@egorshareware.ru?subject=%D0%9A%D0%BE%D0%BD%D1%81%D0%B0%D0%BB%D1%82%D0%B8%D0%BD%D0%B3'
                className='no-underline'
              >
                <button
                  className='flex w-full h-[100px] items-center rounded-3xl text-left border border-transparent bg-black px-8 py-3 text-2xl md:text-3xl font-bold uppercase text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2'
                >
                  Консалтинг · 99$ в час
                </button>
              </a>
            </AnimatedText>
            <AnimatedText className='md:flex-1'>
              <a
                href='mailto:i@egorshareware.ru?subject=%D0%9C%D0%B5%D0%BD%D1%82%D0%BE%D1%80%D0%B8%D0%BD%D0%B3'
                className='no-underline'
              >
                <button
                  className='flex w-full h-[100px] items-center rounded-3xl text-left border border-transparent bg-[#fef7ff] px-8 py-3 text-2xl md:text-3xl font-bold uppercase text-[#9d4ded] hover:bg-[#e9d9ff] focus:outline-none focus:ring-2 focus:ring-[#9d4ded] focus:ring-offset-2'
                >
                  Менторинг · 499$ в месяц
                </button>
              </a>
            </AnimatedText>
          </div>
        </section>
      </main>
      <SocialProfiles t={t} />
      <Footer t={t} />
    </>
  );
}
