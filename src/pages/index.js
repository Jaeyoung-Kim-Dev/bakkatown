import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Services from '../components/Services';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <InfoSection jsonFile={'about'} dark={true} imgStart={false} />
      <InfoSection jsonFile={'discover'} dark={false} imgStart={true} />
      <Services />
      <InfoSection jsonFile={'signup'} dark={false} imgStart={false} />
      <Footer />
    </>
  );
};

export default Home;
