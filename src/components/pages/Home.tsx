import React from 'react';
import AboutSection from '../AboutSection/AboutSection';
import BookSection from '../BookSection/BookSection';
import ClientSection from '../ClientSection/ClientSection';
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
      <AboutSection />
      <BookSection />
      <ClientSection />
    </>
  );
};

export default Home;
