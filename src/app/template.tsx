'use client';

import { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

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
  return (
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
  );
}
