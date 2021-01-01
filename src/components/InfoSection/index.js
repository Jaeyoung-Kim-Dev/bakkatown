import React, { useState, useEffect } from 'react';
import { Button } from '../ButtonElements';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
} from './InfoElements';

const InfoSection = ({ jsonFile }) => {
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    fetch(`./JSON/info/${jsonFile}.json`)
      .then((response) => response.json())
      .then((result) => setInfos(result));
  }, []);

  return (
    <>
      {infos.map((info) => (
        <InfoContainer dark={info.dark} id={info.id}>
          <InfoWrapper>
            <InfoRow imgStart={info.imgStart}>
              <Column1>
                <TextWrapper>
                  <TopLine>{info.topLine}</TopLine>
                  <Heading lightText={info.dark}>{info.headline}</Heading>
                  <Subtitle darkText={info.dark}>{info.description}</Subtitle>
                  <BtnWrap>
                    <Button
                      to='home'
                      smooth='true'
                      duration={500}
                      spy='true'
                      exact='true'
                      offset={-80}
                      primary={info.primary ? 1 : 0}
                      dark={info.dark ? 1 : 0}
                      dark2={info.dark2 ? 1 : 0}
                    >
                      {info.buttonLabel}
                    </Button>
                  </BtnWrap>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                  {/* <Img src={img} alt={alt} /> */}
                  <Img src={info.img} alt={info.alt} />
                </ImgWrap>
              </Column2>
            </InfoRow>
          </InfoWrapper>
        </InfoContainer>
      ))}
    </>
  );
};

export default InfoSection;
