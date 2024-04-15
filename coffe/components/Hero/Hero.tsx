import React from "react";
import HeroList from "./HeroList";
import HeroItem from "./HeroItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <div className="min-h-[600px] bg-brandDark flex items-center justify-center text-lightText">
      <div className="container ">
        <Swiper
          pagination={{ clickable: true, dynamicBullets: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {HeroList.map((item, idx) => (
            <SwiperSlide key={idx}>
              <HeroItem
                label1={item.label1}
                label2={item.label2}
                label3={item.label3}
                src={item.src}
                text1={item.text1}
                text2={item.text2}
              ></HeroItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
