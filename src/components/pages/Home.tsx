import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import Slide from '../Slide/Slide';

const Home = () => {
  return (
    <div className="overflow-hid">
      <Slide>
        <HeroSection />
        <HeroSection />
        <HeroSection />
      </Slide>
    </div>
  );
};

export default Home;
