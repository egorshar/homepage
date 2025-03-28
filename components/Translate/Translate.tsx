import Link from 'next/link';
import AnimatedText from '@/components/AnimatedText/AnimatedText';

export default function Translate({ locale, t }: { locale: 'en' | 'ru', t: Record<string, any> }) {
  return (
    <div className='w-full py-12 text-center'>
      <AnimatedText>
        <Link href={locale !== 'ru' ? '/ru' : '/'}
              className='lg:text-[6rem] md:text-[5rem] text-[3rem] -ml-5 mt-2 w-full uppercase font-bold'>
          {t.translate_flag}
        </Link>
      </AnimatedText>
    </div>
  );
}