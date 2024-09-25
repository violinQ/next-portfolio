'use client';

import { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

import { useScrollProgress } from '@/hooks/use-scroll-progress';

// variants
const variants: Variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

export default function Template({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const completion = useScrollProgress();

  return (
    <>
      <motion.main
        key="template"
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{
          type: 'linear',
          delay: 0.2,
          duration: 0.4,
        }}
      >
        {children}
      </motion.main>
      {/* completion bar */}
      <span
        className="fixed bottom-0 right-0 top-0 z-50 w-1 bg-primary transition-all duration-700"
        style={{
          transform: `translateY(${completion - 100}%)`,
        }}
      ></span>
      <div className="h-[4000px]"></div>
    </>
  );
}
