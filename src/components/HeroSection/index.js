import React, { useState, useEffect, useRef } from 'react';
import { TimelineMax, Power2 } from 'gsap';
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

  let tl = new TimelineMax();
  let content = useRef(null);
  let slider = useRef(null);

  useEffect(() => {
    tl.from(content, 1, { height: '0%', ease: Power2.easeInOut })
      .from(content, 1.2, {
        width: '100%',
        ease: Power2.easeInOut,
      })
      .from(slider, 1.2, { x: '-100%', ease: Power2.easeInOut }, '-=1.2');
  });

  return (
    <>
      <HeroContainer id='home'>
        <HeroContent ref={(el) => (content = el)}>
          <HeroH1>Bakkatown Belize</HeroH1>
          <HeroImg src={heroImage}></HeroImg>
          <HeroBtnWrapper>
            <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}>
              BOOK{hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
      <Slider ref={(el) => (slider = el)}></Slider>
    </>
  );
};

export default HeroSection;
