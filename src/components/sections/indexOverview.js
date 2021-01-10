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

export default function Overview({ dark, imgStart }) {
  <InfoContainer isDark={dark} id={'overview'}>
    <InfoWrapper>
      <InfoRow imgStart={imgStart}>
        <Column1>
          <TextWrapper>
            <TopLine>overview</TopLine>
            <Heading isDark={dark}>What is BAKKATOWN?</Heading>
            <Subtitle isDark={dark}>
              BAKKATOWN is Back of Town. This is where the local working people
              live. Tourists stay in the high end properties on the reef side.
              The lagoon is on the back of San Pedro Town, where the island is
              only 4 blocks wide in town.
            </Subtitle>
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
                More..
              </Button>
            </BtnWrap>
          </TextWrapper>
        </Column1>
        <Column2>
          <ImgWrap>
            <Img
              src={require(`../../images/img1.jpg`)?.default}
              alt={'overview'}
              isDark={dark}
            />
          </ImgWrap>
        </Column2>
      </InfoRow>
    </InfoWrapper>
  </InfoContainer>;
}
