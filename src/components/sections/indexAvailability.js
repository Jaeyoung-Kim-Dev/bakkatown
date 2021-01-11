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
  ButtonS,
  Column2,
  ImgWrap,
  Img,
} from './sectionElements';

const Availability = ({ dark, imgStart }) => {
  const id = 'availability';

  return (
    <InfoContainer isDark={dark} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{id}</TopLine>
              <Heading isDark={dark}>Availability...</Heading>
              <Subtitle isDark={dark}>Calendar here</Subtitle>
              <BtnWrap>
                <ButtonS
                  to='home'
                  smooth='true'
                  duration={500}
                  spy='true'
                  exact='true'
                  offset={-document.documentElement.clientHeight * 0.1}
                  isDark={dark}
                >
                  More..
                </ButtonS>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img
                src={require(`../../images/${id}.jpg`)?.default}
                alt={id}
                isDark={dark}
              />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default Availability;
