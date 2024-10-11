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
    <div className="relative md:pt-20 w-full z-10 ">
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

      {/* kustom ikon*/}
      <div
        className="swiper-button-prev absolute left-8 px-4 md:px-14  top-1/2 transform -translate-y-auto z-10 cursor-pointer"
        onClick={handlePrev}
      >
        <Image src={Sebelumnya} alt="Sebelumnya" className="w-12 h-12 md:w-20 md:h-20" />
        <span className="hidden">Previous</span>
      </div>

      <div
        className="swiper-button-next absolute right-8 px-4 md:px-14  top-1/2 transform -translate-y-auto z-10 cursor-pointer"
        onClick={handleNext}
      >
        <Image src={Berikutnya} alt="Berikutnya" className="w-12 h-12 md:w-20 md:h-20" />
        <span className="hidden">Next</span>
      </div>
    </div>
  );
};

export default HeroSlider;
