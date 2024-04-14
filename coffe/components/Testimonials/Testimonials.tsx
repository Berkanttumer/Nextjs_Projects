import React from "react";
import UserLists from "./UserLists";
import CardItem from "./CardItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Testimonials = () => {
  return (
    <section>
      <div className="container">
        <div>
          <h1 className="text-center text-5xl font-sriracha font-bold mt-12">
            Testimonials
          </h1>
          <div className="   flex mt-4 justify-center ">
            <div className="h-1 w-full max-w-xl bg-gradient-to-r opacity-50 from-primaryText to-secondaryText rounded-full"></div>
          </div>
        </div>
        <div className=" flex gap-9 mt-12 justify-center">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {UserLists.map((item) => (
              <SwiperSlide key={item.id}>
                <CardItem
                  aosDelay={item.aosDelay}
                  description={item.description}
                  id={item.id.toString()}
                  img={item.img}
                  name={item.name}
                  key={item.id}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
