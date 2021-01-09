import React, { useState, useEffect } from 'react';
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
  Button,
  Column2,
  ImgWrap,
  Img,
} from './InfoElements';

const InfoSection = ({ jsonFile, dark, imgStart }) => {
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    fetch(`./JSON/info/${jsonFile}.json`)
      .then((response) => response.json())
      .then((result) => setInfos(result));
  }, [jsonFile]);

  return (
    <>
      {infos.map((info) => (
        <InfoContainer isDark={dark} id={info.id} key={info.id}>
          <InfoWrapper>
            <InfoRow imgStart={imgStart}>
              <Column1>
                <TextWrapper>
                  <TopLine>{info.topLine}</TopLine>
                  <Heading isDark={dark}>{info.headline}</Heading>
                  <Subtitle isDark={dark}>{info.description}</Subtitle>
                  <BtnWrap>
                    <Button
                      to='home'
                      smooth='true'
                      duration={500}
                      spy='true'
                      exact='true'
                      offset={-document.documentElement.clientHeight * 0.1}
                      isDark={dark}
                    >
                      {info.buttonLabel}
                    </Button>
                  </BtnWrap>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                  <Img src={info.img} alt={info.alt} isDark={dark} />
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
