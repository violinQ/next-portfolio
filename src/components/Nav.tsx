'use client';

import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { cn } from '@/lib/utils';

const links = [
  { path: '/', name: 'home' },
  { path: '/projects', name: 'my projects' },
  { path: '/contact', name: 'contact' },
];

export const Nav = ({ className }: { className?: string }) => {
  const pathname = usePathname();

  return (
    <nav className={cn('flex items-center gap-x-8', className)}>
      {links.map(({ path, name }, index) => (
        <Link
          key={index}
          className="relative text-sm capitalize transition-all hover:text-primary"
          href={path}
        >
          {pathname === path && (
            <motion.span
              key="underline"
              className="absolute left-0 top-full w-full border-b-2 border-primary"
              layoutId="underline"
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              transition={{ type: 'tween' }}
            />
          )}
          {name}
        </Link>
      ))}
    </nav>
  );
};

export const MobileNav = () => {
  return <nav></nav>;
};
