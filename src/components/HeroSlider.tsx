
'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { useState } from "react";
import { Swiper as SwiperType } from "swiper";
import Berikutnya from "../../public/assets/img/Berikutnya.svg";
import Sebelumnya from "../../public/assets/img/Sebelumnya.svg";

const HeroSlider = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const handlePrev = () => {
    swiperInstance?.slidePrev(); 
  };

  const handleNext = () => {
    swiperInstance?.slideNext();
  };

  return (
    <div className="relative  w-full z-10 md:pt-28">
      <Swiper
        onSwiper={(swiper) => setSwiperInstance(swiper)} 
        modules={[Navigation, Pagination, Autoplay]}
        navigation={false} 
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        speed={800} 
        className="h-full"
      >
        <SwiperSlide>
          <div className="relative w-full h-[173px] md:h-[656px]">
            <Image
              src="/assets/img/hero1.png"
              alt="Slider 1"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[173px] md:h-[656px]">
            <Image
              src="/assets/img/hero2.png"
              alt="Slider 2"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[173px] md:h-[656px]">
            <Image
              src="/assets/img/hero3.png"
              alt="Slider 3"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </SwiperSlide>
      </Swiper>

 
 
       <div className="container mx-auto absolute inset-0 flex justify-between items-center px-5 md:px-20  ">
        <div
          className="swiper-button-prev cursor-pointer absolute top-1/2 left-4 md:left-0 transform -translate-y-auto md:ml-12"
          onClick={handlePrev}
        >
          <Image src={Sebelumnya} alt="Sebelumnya" className="w-12 h-12 md:w-20 md:h-20" />
          <span className="hidden">Previous</span>
        </div>

        <div
          className="swiper-button-next cursor-pointer absolute top-1/2 right-4 md:right-0 transform -translate-y-auto md:mr-12"
          onClick={handleNext}
        >
          <Image src={Berikutnya} alt="Berikutnya" className="w-12 h-12 md:w-20 md:h-20" />
          <span className="hidden">Next</span>
        </div>
      </div>

    </div>
  );
};

export default HeroSlider;
