'use client';

import { ReactNode } from 'react';
import CountUp from 'react-countup';
import { cn } from '@/lib/utils';

const CountUpBadge = ({
  className,
  icon,
  endCount = 0,
  suffix = '',
  label = '',
}: {
  className?: string;
  icon?: ReactNode;
  endCount?: number;
  suffix?: string;
  label?: string;
}) => {
  return (
    <div
      className={cn(
        'z-10 flex h-[68px] min-w-[200px] items-center gap-x-4 rounded-lg bg-background p-4 shadow-2xl dark:bg-foreground',
        className,
      )}
    >
      <div className="text-3xl text-primary dark:text-primary-foreground">
        {icon}
      </div>
      <div className="flex items-center gap-x-2">
        <div className="text-4xl font-bold leading-none text-primary dark:text-primary-foreground">
          <CountUp end={endCount} delay={1} duration={4} />
          {suffix}
        </div>
        <div className="max-w-[70px] text-[15px] font-medium leading-none text-foreground dark:text-primary-foreground">
          {label}
        </div>
      </div>
    </div>
  );
};

export { CountUpBadge };
