import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay,EffectFade } from "swiper";
import { Link } from "react-router-dom";


const Main = () => {
  return (
    <div className="h-screen w-screen">
    
      <div className="hero font-nunito w-screen h-screen absolute z-10">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl md:text-7xl font-bold">Hello there</h1>
            <p className="mb-5 text-2xl md:text-4xl">Welcome to my Blog Site</p>
            <Link to="/blog" className="btn btn-primary font-bold">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <Swiper
        spaceBetween={0}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay,EffectFade]}
        className="relative h-screen w-screen"
      >
        <SwiperSlide>
          <img src="img/1.jpg" className="object-cover h-full w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/2.jpg" className="object-cover h-full w-full"  />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/3.jpg" className="object-cover h-full w-full"  />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/4.jpg" className="object-cover h-full w-full"  />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/5.jpg" className="object-cover h-full w-full"  />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/6.jpg" className="object-cover h-full w-full"  />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/7.jpg" className="object-cover h-full w-full"  />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Main;
