import React, { FC } from "react";
import Carousel from "./relatedComponents/Carousel/carousel.component";
import HeroImageSection from "./relatedComponents/HeroImageSection/heroImageSection.component";

const Home: FC = () => {
  return (
    <div className="home">
      <Carousel />
      <HeroImageSection />
    </div>
  );
};

export default Home;
