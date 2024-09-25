'use client';

import { ReactNode } from 'react';
import CountUp from 'react-countup';
import { cn } from '@/lib/utils';

const Badge = ({
  className,
  icon,
  endCountNUm = 0,
  endCountText = '',
  badgeText = '',
}: {
  className?: string;
  icon?: ReactNode;
  endCountNUm?: number;
  endCountText?: string;
  badgeText?: string;
}) => {
  return (
    <div className={cn('badge', className)}>
      <div className="text-3xl text-primary dark:text-primary-foreground">
        {icon}
      </div>
      <div className="flex items-center gap-x-2">
        <div className="text-4xl font-bold leading-none text-primary dark:text-primary-foreground">
          <CountUp end={endCountNUm} delay={1} duration={4} />
          {endCountText}
        </div>
        <div className="max-w-[70px] text-[15px] font-medium leading-none text-foreground dark:text-primary-foreground">
          {badgeText}
        </div>
      </div>
    </div>
  );
};

export default Badge;
