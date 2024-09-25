import Logo from './logo';
import ThemeToggle from './theme-toggle';
import { MobileNav, Nav } from './nav';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur transition-all supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        {/* logo */}
        <Logo />
        <div className="flex items-center gap-x-2 xl:gap-x-6">
          {/* nav */}
          <Nav />
          <ThemeToggle />
          {/* mobile nav */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
