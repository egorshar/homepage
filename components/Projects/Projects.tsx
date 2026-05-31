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
          <Link href="https://kalyaki.com" className="no-underline">
            <button className="group flex w-full h-[100px] items-center rounded-3xl text-left border-2 border-[#ffd95f] bg-[#fff9eb] dark:bg-amber-950/50 dark:border-amber-700 px-8 py-3 text-3xl font-bold uppercase hover:bg-[#ffe9b4] dark:hover:bg-amber-900/50 focus:outline-none focus:ring-2 focus:ring-[#03883f] focus:ring-offset-2">
              <Image
                src="/static/kalyaki-icon.png"
                width={60}
                height={60}
                className="rounded-2xl mr-5"
                alt="Kalyaki"
              />
              <span className="font-hegel tracking-wide text-[#803f18] dark:text-amber-200">
                Kalyaki
              </span>
            </button>
          </Link>
        </AnimatedText>
        <AnimatedText>
          <Link href="https://wowlook.egor.sh" className="no-underline">
            <button className="flex w-full h-[100px] items-center rounded-3xl text-left border border-transparent bg-gradient-to-r from-orange-50 to-purple-50 dark:from-orange-950/40 dark:to-purple-950/40 px-8 py-3 text-3xl font-bold uppercase text-orange-600 hover:from-orange-100 hover:to-purple-100 dark:hover:from-orange-900/40 dark:hover:to-purple-900/40 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
              <Image
                src="/static/wowlook.jpeg"
                width={60}
                height={60}
                className="rounded-2xl mr-5"
                alt="WowLook"
              />
              <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                WowLook
              </span>
            </button>
          </Link>
        </AnimatedText>
        <AnimatedText>
          <Link href="https://wowcoder.chat" className="no-underline">
            <button className="flex w-full h-[100px] items-center rounded-3xl text-left border border-transparent bg-[#fef7ff] dark:bg-purple-950/40 px-8 py-3 text-3xl font-bold uppercase text-[#9d4ded] hover:bg-[#e9d9ff] dark:hover:bg-purple-900/40 focus:outline-none focus:ring-2 focus:ring-[#9d4ded] focus:ring-offset-2">
              <Image
                src="/static/wowcoder.png"
                width={60}
                height={60}
                className="mr-5"
                alt="WOWCODER"
              />
              WOWCODER
            </button>
          </Link>
        </AnimatedText>
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
                src="/static/howmuchin.png"
                width={60}
                height={60}
                className="rounded-2xl mr-5"
                alt="How Much In"
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
