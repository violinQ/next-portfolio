'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { reviews } from '@/lib/reviews';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Avatar, AvatarImage } from '../ui/avatar';

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container">
        <h2 className="section-title mx-auto mb-12 text-center">Reviews</h2>
        {/* sliders */}
        <Swiper
          className="h-[350px]"
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
          {reviews.map(({ name, avatar, job, review }) => (
            <SwiperSlide key={name}>
              <Card className="min-h-[300px] bg-secondary/40 p-8">
                <CardHeader className="mb-0 p-0">
                  <div className="flex items-center gap-x-4">
                    {/* avatar */}
                    <Avatar>
                      <AvatarImage src={avatar} alt={name} />
                    </Avatar>
                    {/* name */}
                    <div className="flex flex-col">
                      <CardTitle>{name}</CardTitle>
                      <p>{job}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardDescription className="text-lg text-muted-foreground">
                  {review}
                </CardDescription>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
