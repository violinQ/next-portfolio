import Link from 'next/link';
import { Sparkles } from 'lucide-react';

import { MobileNav, Nav } from './Nav';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur transition-all supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-screen-2xl container flex h-14 items-center justify-between">
        <div>
          {/* logo */}
          <Link className="flex items-center space-x-2" href="/">
            <Sparkles className="text-primary" />
            <span className="font-bold">Portfolio</span>
          </Link>
        </div>
        <div className="flex items-center gap-x-6">
          {/* nav */}
          <Nav className="hidden xl:flex" />
          <ThemeToggle />
          {/* mobile nav */}
          <div className="xl:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
