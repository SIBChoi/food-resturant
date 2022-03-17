import React from 'react';
import FoodSection from '../FoodSection/FoodSection';
import HeroSection from '../HeroSection/HeroSection';
import OfferSection from '../OfferSection/OfferSection';
import Slide from '../Slide/Slide';

const Home = () => {
  return (
    <>
      <div className="position">
        <Slide>
          <HeroSection />
          <HeroSection />
          <HeroSection />
        </Slide>
      </div>
      <OfferSection />
      <FoodSection />
    </>
  );
};

export default Home;
