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

  let content = useRef();
  let slider = useRef();
  let button = useRef();

  useEffect(() => {
    let tl = new TimelineMax();
    tl.from(content.current, { height: '0%', ease: Power2.easeInOut })
      .from(content.current, {
        width: '100%',
        ease: Power2.easeInOut,
      })
      .from(
        slider.current,

        { x: '-100%', ease: Power2.easeInOut },
        '-=1.2'
      )
      .from(
        button.current,

        { height: '0%', ease: Power2.easeInOut },
        '-=1.2'
      ); //TODO: button animation doesn't work
  }, []);

  return (
    <>
      <HeroContainer id='home'>
        <HeroContent ref={content}>
          <HeroH1>Bakkatown Belize</HeroH1>
          <HeroImg src={heroImage}></HeroImg>
          <HeroBtnWrapper>
            <Button
              ref={button}
              to='*'
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
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
