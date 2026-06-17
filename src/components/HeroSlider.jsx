import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import futuristicComputer from "../assets/images/futuristic-computer-banner.png";
import wondersGK from "../assets/images/new-wonders-of-gk-banner.png";
import universalGK from "../assets/images/revised-universal-gk-banner.png";
import progressiveGK from "../assets/images/revised-progressive-gk-banner.png";
import englishGrammar from "../assets/images/revised-english-grammer-banner-home.png";
import hindiVyakaran from "../assets/images/sampooran-hindi-viyakaran-banner.png";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const HeroSlider = () => {
  const banners = [
    futuristicComputer,
    wondersGK,
    universalGK,
    progressiveGK,
    englishGrammar,
    hindiVyakaran,
  ];
console.log(banners);
  return (
    <section className="w-full bg-no-repeat bg-cover bg-center py-8"
  style={{
    backgroundImage:
      "url('https://www.tukpublications.com/assets/images/banner-bg.png')",
  }}>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {banners.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <div className="absolute top-1 left-0 z-10 bg-yellow-400 px-3 py-1 rounded rounded-tl-none rounded-bl-none font-semibold">
                Newly Launched Series
              </div>

              <img
                src={image}
                alt={`Banner ${index + 1}`}
                className="w-full max-h-[500px] object-contain mx-auto"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
