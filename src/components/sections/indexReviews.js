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

const Reviews = ({ dark, imgStart }) => {
  const id = 'reviews';

  return (
    <InfoContainer isDark={dark} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{id}</TopLine>
              <Heading isDark={dark}>What do you think?</Heading>
              <Subtitle isDark={dark}>
                There are no reviews for this house.
                <br /> Be the first to add one.
              </Subtitle>
              <BtnWrap>
                <ButtonS
                  to='*'
                  offset={-document.documentElement.clientHeight * 0.1}
                  isDark={dark}
                >
                  Add a review
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

export default Reviews;
