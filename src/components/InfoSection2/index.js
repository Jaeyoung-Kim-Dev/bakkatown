import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
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

const InfoSection2 = ({ jsonFile, dark, imgStart }) => {
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    fetch(`./JSON/info/${jsonFile}.json`)
      .then((response) => response.json())
      .then((result) => setInfos(result));
  }, [jsonFile]);

  const containerStyle = {
    width: '400px',
    height: '400px',
  };

  const center = {
    lat: 17.9124717,
    lng: -87.9790681,
  };

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

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
                  <LoadScript>
                    {/* googleMapsApiKey='YOUR_API_KEY'> */}
                    <GoogleMap
                      mapContainerStyle={containerStyle}
                      center={center}
                      zoom={10}
                      onLoad={onLoad}
                      onUnmount={onUnmount}
                    ></GoogleMap>
                  </LoadScript>
                </ImgWrap>
              </Column2>
            </InfoRow>
          </InfoWrapper>
        </InfoContainer>
      ))}
    </>
  );
};

export default InfoSection2;
