'use client';

import { motion } from 'motion/react';

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedText = ({ children, className = '' }: AnimatedTextProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedText; 