import React, { FC } from "react";
import Carousel from "./relatedComponents/Carousel/carousel.component";
import HeroImageSection from "./relatedComponents/HeroImageSection/heroImageSection.component";
import TextSectionTop from "./relatedComponents/TextSectionTop/TextSectionTop.component";
import ThreeColumnSection from "./relatedComponents/ThreeColumnSection/threeColumnSection.component";

const Home: FC = () => {
  return (
    <div className="home">
      <Carousel />
      <TextSectionTop />
      <HeroImageSection />
      <ThreeColumnSection />
    </div>
  );
};

export default Home;
