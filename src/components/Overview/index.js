import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Overviews from './overview.json';
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
  const dark = true;

  return (
    <OverviewContainer isDark={dark} id={'overview'}>
      <OverviewWrapper>
        <Carousel>
          {Overviews.overviews.map((overview) => (
            <OverviewRow
              isDark={dark}
              imgStart={overview.imgStart}
              key={overview.id}
            >
              <Column1>
                <TextWrapper imgStart={overview.imgStart}>
                  <TopLine>Overview</TopLine>
                  <Heading isDark={dark}>{overview.heading}</Heading>
                  {overview.subtitles.map((subtitle, subKey) => (
                    <Subtitle isDark={dark} key={subKey}>
                      {subtitle}
                    </Subtitle>
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
