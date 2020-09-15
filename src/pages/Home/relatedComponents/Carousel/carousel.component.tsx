import React, { FC } from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "./carousel.styles.scss";
import BlueGlasses from "../../../../assets/blue_glasses.jpg";
import useImage, {
  FetchedImage,
  ImageInterface,
  FetchLoading,
} from "../../../../utils/useImage";
import LoadingSpinner from "../../../../utils/components/LoadingSpinner/LoadingSpinner.component";

SwiperCore.use([Pagination, A11y]);

const dummyImage: FetchedImage = {
  ImageUrl: BlueGlasses,
  Title: "Lorem Ipsum",
  Subtitle:
    "Amet impedit accusantium at beatae ad. Non aspernatur possimus assumenda dignissimos voluptate reiciendis quas Ipsa velit voluptate dolorum sapiente consequatur?",
};

const Carousel: FC = () => {
  const [fetchedImages, loading] = useImage();

  const slides =
    fetchedImages && fetchedImages.images && !fetchedImages.error
      ? fetchedImages.images
      : [dummyImage, dummyImage, dummyImage];

  return (
    <div className="slide-container">
      {!loading ? (
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {slides.map((slide: FetchedImage) => {
            return (
              <SwiperSlide>
                <div
                  className="slide"
                  style={{
                    backgroundImage:
                      fetchedImages && !fetchedImages.error
                        ? `url("${slide.ImageUrl}")`
                        : `url(${BlueGlasses})`,
                  }}
                />
                <div className="slide__titles">
                  <h1 className="slide__titles__title">{slide.Title}</h1>
                  <h3 className="slide__titles__subtitle">{slide.Subtitle}</h3>
                  <button className="slide__titles__button">Contact Us</button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <div className="loading-container">
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
};

export default Carousel;
// style={{ backgroundImage:   }}
