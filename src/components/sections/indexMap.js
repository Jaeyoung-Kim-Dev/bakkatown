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
  MapIframe,
} from './sectionElements';

const Map = ({ dark, imgStart }) => {
  const containerStyle = {
    width: '100%',
    height: '100%',
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
                  href='https://www.google.com/maps/place/Bakkatown+Guest+House/@17.9194655,-87.9668486,18.5z/data=!4m8!1m2!2m1!1sBakkatown+,+San+Pedro,+111111,+Belize!3m4!1s0x8f5c9b14e8e5c7bb:0x14c2ea57e6f2bbe9!8m2!3d17.9189098!4d-87.9656405'
                  offset={-document.documentElement.clientHeight * 0.1}
                  rel='noreferrer'
                  target='_blank'
                  isDark={dark}
                >
                  OPEN IN GOOGLE MAP
                </ButtonA>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <div style={containerStyle}>
              <MapIframe
                title='Bakkatown Tralapa'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1596.1520291332695!2d-87.96541246163159!3d17.91765677258533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5c9b2b164ed25d%3A0x6ee9e34e7e8963bc!2sBakkatown%20Tralapa!5e0!3m2!1sen!2sca!4v1618170713228!5m2!1sen!2sca'
                allowFullScreen='True'
                loading='lazy'
              ></MapIframe>
            </div>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default Map;
