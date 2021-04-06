import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
// import Overview from '../components/sections/indexOverview';
import Overview from '../components/Overview/index';
import Map from '../components/sections/indexMap';
import Gallery from '../components/Gallery/index';
import Rates from '../components/sections/indexRates';
import Availability from '../components/sections/indexAvailability';
import Reviews from '../components/Reviews/index';
import Contact from '../components/sections/indexContact';
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
      <Overview />
      <Map dark={false} imgStart={true} />
      <Gallery dark={true} imgStart={false} />
      <Rates dark={false} imgStart={true} />
      <Availability dark={true} imgStart={false} />
      <Reviews dark={false} imgStart={true} />
      {/* <Rooms /> */}
      <Contact dark={false} imgStart={false} />
      <Footer />
    </>
  );
};

export default Home;
