import React, { useState } from 'react';
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroImg,
  HeroBtnWrapper,
  Button,
  ArrowForward,
  ArrowRight,
  Slider,
} from './HeroElements';
import heroImage from '../../images/heroImage.jpg';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <HeroContainer id='home'>
        <HeroContent>
          <HeroH1>Bakkatown Belize</HeroH1>
          <HeroImg src={heroImage}></HeroImg>
          <HeroBtnWrapper>
            <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}>
              BOOK{hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
      <Slider></Slider>
    </>
  );
};

export default HeroSection;
