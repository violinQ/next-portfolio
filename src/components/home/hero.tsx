import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Download, Send } from 'lucide-react';

import { achievement } from '@/lib/profile';
import { Button, buttonVariants } from '../ui/button';
import { CountUpBadge } from '../ui/count-up-badge';
import Socials from '../socials';

const [badge1, badge2, badge3] = achievement;

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
            <h1>Hello, I&apos;m Chen</h1>
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
            <CountUpBadge
              className="absolute -left-[5rem] top-[24%]"
              label={badge1.label}
              icon={<badge1.icon />}
              endCount={badge1.endCount}
            />
            {/* badge 2 */}
            <CountUpBadge
              className="absolute -left-[1rem] top-[80%]"
              label={badge2.label}
              icon={<badge2.icon />}
              endCount={badge2.endCount}
              suffix={badge2.suffix}
            />
            {/* badge 3 */}
            <CountUpBadge
              className="absolute -right-4 top-[55%]"
              label={badge3.label}
              icon={<badge3.icon />}
              endCount={badge3.endCount}
              suffix={badge3.suffix}
            />
            <div className="absolute -right-2 -top-1 h-[500px] w-[500px] bg-[url('/hero/shape-2-light.svg')] bg-no-repeat dark:bg-[url('/hero/shape-2-dark.svg')]" />
            <div className="relative h-[462px] w-[510px] bg-[url('/hero/shape-1.svg')] bg-bottom bg-no-repeat">
              {/* svg for clip-path */}
              <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <clipPath id="shap">
                    <path d="M430.684 91.8476C485.587 148.958 523.332 231.872 503.773 294.831C483.871 357.79 406.664 400.451 331.516 429.351C256.711 458.25 183.965 473.388 128.376 448.617C72.4443 423.846 32.983 358.822 13.0808 285.198C-6.47826 211.917 -7.16455 130.036 32.2967 76.3658C72.1011 22.6955 151.71 -2.76337 227.544 0.332983C303.722 3.08531 375.781 34.7369 430.684 91.8476Z" />
                  </clipPath>
                </defs>
              </svg>
              <Image
                style={{ clipPath: 'url(#shap)' }}
                src="/hero/developer.png"
                alt="Hero Image"
                sizes="auto"
                priority
                fill
              />
            </div>
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
