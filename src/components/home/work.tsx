'use client';

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { buttonVariants } from '../ui/button';
import { projects } from '@/lib/projects';
import ProjectCard from '../project-card';

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container">
        {/* text */}
        <div className="mx-auto mb-12 flex max-w-[400px] flex-col items-center justify-center text-center xl:mx-0 xl:h-[400px] xl:items-start xl:text-left">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            showcase of the latest projects I&apos;ve worked on.
          </p>
          <Link className={buttonVariants()} href="/projects">
            All Projects{}
          </Link>
        </div>
        {/* slider */}
        <div className="right-0 top-0 xl:absolute xl:right-8 xl:max-w-[1000px]">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the sliders */}
            {projects.slice(0, 4).map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
