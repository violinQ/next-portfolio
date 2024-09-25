import Link from 'next/link';
import { Sparkles } from 'lucide-react';

const Logo = () => {
  return (
    <Link className="flex items-center space-x-2" href="/">
      <Sparkles className="text-primary" />
      <span className="font-bold">Portfolio</span>
    </Link>
  );
};

export default Logo;
