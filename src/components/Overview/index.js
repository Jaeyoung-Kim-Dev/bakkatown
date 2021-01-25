import React, { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {
  OverviewContainer,
  OverviewWrapper,
  OverviewRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Column2,
  ImgWrap,
  Img,
} from './OverviewElements';

const Overview = () => {
  const [overviews, setOverviews] = useState([]);
  const dark = true;

  useEffect(() => {
    fetch('./JSON/overview.json')
      .then((response) => response.json())
      .then((result) => setOverviews(result));
  }, []);

  return (
    <OverviewContainer isDark={dark} id={'overview'}>
      <OverviewWrapper>
        <Carousel>
          {overviews.map((overview) => (
            <OverviewRow
              isDark={dark}
              imgStart={overview.imgStart}
              key={overview.id}
            >
              <Column1>
                <TextWrapper>
                  <TopLine>Overview</TopLine>
                  <Heading isDark={dark}>{overview.heading}</Heading>
                  {overview.subtitles.map((subtitle, subKey) => (
                    <Subtitle isDark={dark}>{subtitle}</Subtitle>
                  ))}
                  {/* 
                  <Subtitle isDark={dark}>
                    BAKKATOWN is Back of Town. <br />
                    This is where the local working people live. <br />
                    Tourists stay in the high end properties on the reef side.
                    <br /> The lagoon is on the back of San Pedro Town, where
                    the island is only 4 blocks wide in town.
                  </Subtitle> */}
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                  <Img
                    src={
                      require(`../../images/overview/${overview.id}.jpg`)
                        ?.default
                    }
                    alt={'overview'}
                    isDark={dark}
                  />
                </ImgWrap>
              </Column2>
            </OverviewRow>
          ))}
        </Carousel>
      </OverviewWrapper>
    </OverviewContainer>
  );
};

export default Overview;
