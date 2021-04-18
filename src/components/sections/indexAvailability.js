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
  ButtonR,
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
              <Heading isDark={dark}>Availability</Heading>
              {/* <Subtitle isDark={dark}>Check availability</Subtitle> */}
              <BtnWrap>
                <ButtonR
                  to='./book'
                  offset={-document.documentElement.clientHeight * 0.1}
                  isDark={dark}
                >
                  BOOK
                </ButtonR>
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
