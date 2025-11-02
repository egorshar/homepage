'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import Image from 'next/image';

import SplitText from '@/components/SplitText/SplitText';

export default function ParallaxHero({ t }: { t: Record<string, any> }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const [hovered, setHovered] = useState(false);
  const [hoveredBlur, setHoveredBlur] = useState(false);

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const imageY = useTransform(scrollYProgress, [0, 0.5], ['0%', '-20%']);

  return (
    <div ref={containerRef} className='relative md:h-[1900px] h-[940px]'>
      <div className='sticky top-0 md:h-[750px] h-[690px] flex justify-center overflow-hidden'>
        <div className='relative w-full max-w-7xl mx-auto px-4 text-center'>
          <SplitText containerClassName='justify-center lg:mt-8 md:mt-10 mt-10 max-w-[380px] md:max-w-full mx-auto' text={t.shareware.title} style={{ opacity, scale }} />
          <SplitText containerClassName='justify-center max-w-[380px] md:max-w-full mx-auto' text={t.shareware.title2} style={{ opacity, scale }} />
        </div>

        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className='absolute inset-0 md:h-[499px] md:w-[400px] md:-ml-[200px] h-[375px] w-[300px] -ml-[150px] left-1/2  md:top-[200px] top-[200px] cursor-zoom-in'
          onClick={() => setHovered(!hovered)}
          onMouseEnter={() => setHoveredBlur(true)}
          onMouseLeave={() => setHoveredBlur(false)}
        >
          <motion.div
            className='absolute top-0 left-0 w-full h-full'
            initial={{ opacity: 1 }}
          >
            <motion.div
              className='absolute top-0 left-0 w-full h-full blur-lg md:blur-xl'
              initial={{ opacity: 0.5 }}
              animate={{ opacity: hoveredBlur ? 1 : 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src='/static/egor-toy.webp'
                width={499}
                height={400}
                className={'absolute object-cover w-full h-full rounded-3xl'}
                priority
                alt='Me'
              />
            </motion.div>

            <Image
              src='/static/egor.webp'
              className='relative z-1 object-cover w-full h-full rounded-3xl'
              width={499}
              height={400}
              priority
              alt='Me'
            />
          </motion.div>
          <motion.div
            className='absolute top-0 left-0 w-full h-full'
            initial={{ opacity: 0, scale: 0.75, translateY: 52, filter: 'blur(20px)' }}
            animate={{
              opacity: hovered ? 1 : 0,
              scale: hovered ? 1 : 0.8,
              translateY: hovered ? 0 : 52,
              filter: hovered ? '' : 'blur(20px)',
            }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src='/static/egor-toy.webp'
              width={499}
              height={400}
              className='relative z-2 object-cover w-full h-full rounded-3xl'
              priority
              alt='Me'
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}; 