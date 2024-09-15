'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AlignRight } from 'lucide-react';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from './ui/sheet';
import Logo from './Logo';
import Socials from './Socials';

const links = [
  { path: '/', name: 'home' },
  { path: '/projects', name: 'my projects' },
  { path: '/contact', name: 'contact' },
];

export const Nav = () => {
  return (
    <nav className="hidden items-center gap-x-8 xl:flex">
      {links.map(({ path, name }) => (
        <NavItem
          key={name}
          className="text-sm"
          name={name}
          path={path}
          underline
        />
      ))}
    </nav>
  );
};

export const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="xl:hidden" variant="ghost" size="icon">
          <AlignRight />
        </Button>
      </SheetTrigger>
      <SheetContent aria-describedby={undefined}>
        <VisuallyHidden.Root asChild>
          <SheetTitle>title</SheetTitle>
        </VisuallyHidden.Root>
        <div className="flex h-full flex-col items-center justify-between py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <nav className="flex flex-col items-center gap-y-6">
              {links.map(({ path, name }) => (
                <NavItem
                  key={name}
                  className="text-2xl"
                  path={path}
                  name={name}
                />
              ))}
            </nav>
          </div>
          <Socials className="flex gap-x-4" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

function NavItem({
  className,
  name,
  path,
  underline = false,
}: {
  className?: string;
  name: string;
  path: string;
  underline?: boolean;
}) {
  const pathname = usePathname();

  return (
    <Link
      className={cn(
        'relative capitalize transition-all hover:text-primary',
        className,
      )}
      href={path}
    >
      {underline && pathname === path && (
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
  );
}
