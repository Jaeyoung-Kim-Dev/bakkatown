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

// const heroImageHorizontal = require(`../../images/heroImageH.jpg`)?.default;
// const heroImageVertical = require(`../../images/heroImageV.jpg`)?.default;

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const [heroImage, setHeroImage] = useState();

  const onHover = () => {
    setHover(!hover);
  };

  let content = useRef();
  let slider = useRef();

  useEffect(() => {
    // document.documentElement.clientHeight < document.documentElement.clientWidth
    const selectHeroImage = async () => {
      setHeroImage(
        window.innerHeight < window.innerWidth
          ? require(`../../images/heroImageH.jpg`)?.default
          : require(`../../images/heroImageV.jpg`)?.default
      );
    };
    selectHeroImage();

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
            <Button to='./book' onMouseEnter={onHover} onMouseLeave={onHover}>
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
