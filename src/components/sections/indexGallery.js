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

const Gallery = ({ dark, imgStart }) => {
  const id = 'gallery';

  return (
    <InfoContainer isDark={dark} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{id}</TopLine>
              <Heading isDark={dark}>Gallery</Heading>
              <Subtitle isDark={dark}>Photos here...</Subtitle>
              <BtnWrap>
                <ButtonS
                  to='*'
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

export default Gallery;
