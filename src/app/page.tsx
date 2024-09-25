import Hero from '@/components/home/hero';
import About from '@/components/home/about';
import Services from '@/components/home/services';
import Work from '@/components/home/work';
import Reviews from '@/components/home/reviews';
import Cta from '@/components/home/cta';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Work />
      <Reviews />
      <Cta />
    </>
  );
}
