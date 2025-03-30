'use client';

import { animate, stagger, inView } from 'motion';
import { HTMLMotionProps, motion } from 'motion/react';
import { splitText } from 'motion-plus';
import React, { useEffect, useRef } from 'react';
import { cn } from '@/utils/index';

interface SplitTextProps extends HTMLMotionProps<'div'> {
  containerClassName?: string;
  className?: string;
  text: string;
}

export default function SplitText({ containerClassName, className, style, text }: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      const { words } = splitText(
        containerRef.current!.querySelector('h1')!,
      );

      // Устанавливаем начальное состояние для всех слов
      words.forEach(w => {
        w.style.opacity = '0';
        w.style.transform = 'translateY(10px)';
        w.classList.add('will-change-[transform,opacity]');
        w.classList.add('whitespace-nowrap');
      });

      // Делаем контейнер видимым только после установки начального состояния
      containerRef.current.style.visibility = 'visible';

      // Animate the words in the h1 only when in view
      inView(containerRef.current, () => {
        animate(
          words,
          { opacity: [0, 1], y: [10, 0] },
          {
            type: 'spring',
            duration: 2,
            bounce: 0,
            delay: stagger(0.05),
          },
        );
      }, { amount: 0.1, margin: '-100px' });
    });
  }, []);

  return (
    <motion.div className={cn('flex invisible w-full', containerClassName)} ref={containerRef} style={style}>
      <h1
        className={cn('lg:text-[6rem] md:text-[5rem] text-[3rem] w-full uppercase font-bold leading-none mb-0', className)}>
        {text}
      </h1>
    </motion.div>
  );
}
