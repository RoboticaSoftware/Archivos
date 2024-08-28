import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Scrollbar, A11y } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/swiper-bundle.css";

import "./Carrossel.scss";

export function Carrossel({ dato }) {
  return (
    <>
      <Swiper
        className="swiper-container"
        modules={[Navigation, Autoplay, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ clickable: true }}
        onSlideChange={() => console.log("Slide Change")}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{ delay: 3000 }}
        effect={"cube"}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
      >
        {dato.map((item, key) => (
          <SwiperSlide className="slide-item" key={key}>
            <button className="swiper-button-prev"></button>
            <img src={item.img} alt="" />
            <button className="swiper-button-next"></button>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
