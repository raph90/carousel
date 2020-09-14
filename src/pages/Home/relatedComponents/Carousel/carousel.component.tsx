import React, { FC } from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "./carousel.styles.scss";

SwiperCore.use([Pagination, A11y]);
const Carousel: FC = () => {
  return (
    <div className="slide-container">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
