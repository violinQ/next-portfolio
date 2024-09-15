import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Download, Send } from 'lucide-react';
import { RiBriefcase4Fill, RiTeamFill, RiTodoFill } from 'react-icons/ri';

import { Button, buttonVariants } from './ui/button';
import Socials from './Socials';
import Badge from './Badge';

const Hero = () => {
  return (
    <section className="h-[84vh] bg-gradient-to-b from-background from-35% to-secondary py-12 xl:py-24 xl:pt-28">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="mx-auto flex max-w-[600px] flex-col justify-center text-center xl:mx-0 xl:text-left">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-primary">
              Web Developer
            </div>
            <h1 className="title">Hello, I&apos;m Chen</h1>
            <p className="subtitle mx-auto max-w-[490px] xl:mx-0">
              Brief description with insights into myself, my vocational
              journey, and what I engage in professionally.
            </p>
            {/* buttons */}
            <div className="mx-auto mb-12 flex flex-col gap-x-3 gap-y-3 md:flex-row xl:mx-0">
              <Link
                className={buttonVariants({
                  className: 'gap-x-2',
                })}
                href="/contact"
              >
                Contact me <Send size={18} />
              </Link>
              <Button className="gap-x-2" variant="secondary">
                Download CV <Download size={18} />
              </Button>
            </div>
            {/* socials */}
            <Socials />
          </div>
          {/* image */}
          <div className="relative hidden xl:flex">
            {/* badge 1 */}
            <Badge
              className="absolute -left-[5rem] top-[24%]"
              badgeText="Years Of Experience"
              icon={<RiBriefcase4Fill />}
              endCountNUm={2}
            />
            {/* badge 2 */}
            <Badge
              className="absolute -left-[1rem] top-[80%]"
              badgeText="Finished Projects"
              icon={<RiTodoFill />}
              endCountNUm={10}
              endCountText="+"
            />
            {/* badge 3 */}
            <Badge
              className="absolute -right-4 top-[55%]"
              badgeText="Happy Clients"
              icon={<RiTeamFill />}
              endCountNUm={10}
              endCountText="+"
            />
            <Image
              src="/hero/hero.png"
              height={510}
              width={510}
              alt="hero"
              priority
            />
          </div>
        </div>
        {/* icon */}
        <div className="absolute bottom-44 left-2/4 hidden animate-bounce md:flex xl:bottom-12">
          <ChevronDown className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
