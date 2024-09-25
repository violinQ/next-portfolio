'use client';

import Link from 'next/link';
import {
  RiFacebookFill,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiYoutubeFill,
} from 'react-icons/ri';

import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

const socials = [
  {
    name: 'youtube',
    link: '/',
    icon: <RiYoutubeFill />,
  },
  {
    name: 'linkedin',
    link: '/',
    icon: <RiLinkedinFill />,
  },
  {
    name: 'github',
    link: '/',
    icon: <RiGithubFill />,
  },
  {
    name: 'facebook',
    link: '/',
    icon: <RiFacebookFill />,
  },
  {
    name: 'instagram',
    link: '/',
    icon: <RiInstagramFill />,
  },
];

const Socials = ({ className }: { className?: string }) => {
  return (
    <div className={cn('mx-auto flex gap-x-6 xl:mx-0', className)}>
      {socials.map(({ name, link, icon }) => (
        <TooltipProvider key={name}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                className="text-[22px] text-foreground transition-all hover:text-primary"
                href={link}
              >
                {icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p className="capitalize">{name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};

export default Socials;
