import React, { useState, useEffect, useRef } from 'react';
import { gsap, Power2 } from 'gsap';
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

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  let content = useRef();
  let slider = useRef();

  useEffect(() => {
    let tl = new gsap.timeline();
    tl.from(content.current, {
      duration: 1,
      height: '0%',
      ease: Power2.easeInOut,
    })
      .from(content.current, {
        duration: 1.2,
        width: '100%',
        ease: Power2.easeInOut,
      })
      .from(
        slider.current,
        { duration: 1.2, x: '-100%', ease: Power2.easeInOut },
        '-=1.2'
      );
  }, []);

  let heroImage;
  if (
    document.documentElement.clientHeight < document.documentElement.clientWidth
  ) {
    heroImage = require(`../../images/heroImageH.jpg`)?.default;
  } else heroImage = require(`../../images/heroImageV.jpg`)?.default;

  return (
    <>
      <HeroContainer id='home'>
        <HeroContent ref={content}>
          <HeroH1>
            BAKKATOWN
            <br /> BELIZE
          </HeroH1>
          <HeroImg src={heroImage}></HeroImg>
          <HeroBtnWrapper>
            <Button to='*' onMouseEnter={onHover} onMouseLeave={onHover}>
              BOOK{hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
      <Slider ref={slider}></Slider>
    </>
  );
};

export default HeroSection;
