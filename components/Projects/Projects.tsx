import Image from 'next/image';
import Link from 'next/link';
import AnimatedText from '@/components/AnimatedText/AnimatedText';
import SplitText from '@/components/SplitText/SplitText';

export default function Projects({ t }: { t: Record<string, any> }) {
  return (
    <div className="w-full py-12">
      <SplitText className="px-8" text={t.projects.header} />
      <div className="mt-8">
        <AnimatedText>
          <Link href="https://t.me/opg_dev" className="no-underline">
            <button className="flex w-full h-[100px] items-center rounded-3xl text-left border border-transparent bg-black px-8 py-3 text-3xl font-bold uppercase text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
              <Image
                src="/static/channel.jpeg"
                width={60}
                height={60}
                className="rounded-full mr-5"
                alt="Organized Programming Group"
              />
              <span className="hidden md:inline">{t.projects.opg}</span>
              <span className="inline md:hidden">{t.projects.opg_short}</span>
            </button>
          </Link>
        </AnimatedText>
        <AnimatedText>
          <Link href="https://how-much.in" className="no-underline">
            <button className="flex w-full h-[100px] items-center rounded-3xl text-left border border-transparent bg-[#ddd7ff] px-8 py-3 text-3xl font-bold uppercase text-black hover:bg-[#c8c3e8] focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
              <Image
                src="/static/howmuchin.webp"
                width={60}
                height={60}
                className="mr-5"
                alt="Organized Programming Group"
              />
              How Much In
            </button>
          </Link>
        </AnimatedText>
        <AnimatedText>
          <Link
            href="https://egorshar.github.io/jquery-ui-sortable-animation/"
            className="no-underline"
          >
            <button className="flex w-full h-[100px] items-center rounded-3xl text-left border border-transparent bg-[#f9f2f4] px-8 py-3 text-3xl font-bold uppercase text-[#c7254e] hover:bg-[#e9e0e3] focus:outline-none focus:ring-2 focus:ring-[#c7254e] focus:ring-offset-2">
              ⭐&nbsp;<span className="text-2xl mr-1">21</span>&nbsp;&nbsp;
              <span className="hidden md:inline">
                jQueryUI Sortable Animation
              </span>
              <span className="inline md:hidden">jQUI Sortable</span>
            </button>
          </Link>
        </AnimatedText>
      </div>
    </div>
  );
}
