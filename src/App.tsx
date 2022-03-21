import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import AboutSection from './components/AboutSection/AboutSection';
import BookSection from './components/BookSection/BookSection';
import FoodSection from './components/FoodSection/FoodSection';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/pages/Home';
import './index.css';

function App() {
  const [full, setFull] = useState('100%');
  const { pathname } = useLocation();

  useEffect(() => {
    pathname === '/' ? setFull('100vh') : setFull('80px');
  }, [pathname]);

  return (
    <div>
      <Header full={full} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<FoodSection />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/book" element={<BookSection />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
