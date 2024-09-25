import Link from 'next/link';
import { buttonVariants } from '../ui/button';

const Cta = () => {
  return (
    <section className="bg-secondary py-24">
      <div className="container">
        <div className="flex flex-col items-center">
          <h2 className="mb-8 max-w-xl text-center">
            Prepared to turn your ideas into reality? I&apos;m here to help
          </h2>
          <Link className={buttonVariants()} href="/contact">
            Contact me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
