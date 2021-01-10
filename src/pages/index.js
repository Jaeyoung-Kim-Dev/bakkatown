import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import Overview from '../components/sections/indexOverview';
import InfoSection from '../components/InfoSection';
import InfoSection2 from '../components/InfoSection2';
import Rooms from '../components/Rooms';
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
      {/* <InfoSection jsonFile={'overview'} dark={true} imgStart={false} /> */}
      <InfoSection2 jsonFile={'map'} dark={false} imgStart={true} />
      <InfoSection jsonFile={'gallery'} dark={true} imgStart={false} />
      <InfoSection jsonFile={'rates'} dark={false} imgStart={true} />
      <InfoSection jsonFile={'availability'} dark={true} imgStart={false} />
      <InfoSection jsonFile={'reviews'} dark={false} imgStart={true} />
      <Rooms />
      <InfoSection jsonFile={'contact'} dark={false} imgStart={false} />
      <Footer />
    </>
  );
};

export default Home;
