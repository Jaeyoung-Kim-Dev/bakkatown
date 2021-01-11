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
  ButtonA,
  Column2,
  ImgWrap,
} from './sectionElements';

const Map = ({ dark, imgStart }) => {
  const containerStyle = {
    width: '100%',
    height: '50vh',
  };

  const center = {
    lat: 17.9124717,
    lng: -87.9790681,
  };

  return (
    <InfoContainer isDark={dark} id={'map'}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>map</TopLine>
              <Heading isDark={dark}>Address</Heading>
              <Subtitle isDark={dark}>
                Bakkatown , San Pedro, 111111, Belize
              </Subtitle>
              <BtnWrap>
                <ButtonA
                  href='https://www.google.com/maps/search/Bakkatown+,+San+Pedro,+111111,+Belize/@17.9323856,-87.9884146,13z/data=!3m1!4b1'
                  offset={-document.documentElement.clientHeight * 0.1}
                  isDark={dark}
                >
                  Open in Google Map
                </ButtonA>
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
                  // onLoad={onLoad}
                  // onUnmount={onUnmount}
                ></GoogleMap>
              </LoadScript>
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default Map;
