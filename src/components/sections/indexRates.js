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

const Rates = ({ dark, imgStart }) => {
  const id = 'rates';

  return (
    <InfoContainer isDark={dark} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{id}</TopLine>
              <Heading isDark={dark}>Local Rates</Heading>
              <Subtitle isDark={dark}>
                {/* <span style={{ fontWeight: 'bold' }}>Rates Table here...</span>
                <br /> <br />  */}
                <br />
                <span
                  style={{
                    fontWeight: 'bold',
                    fontSize: '1.7rem',
                    letterSpacing: '0.4rem',
                  }}
                >
                  POLICIES
                </span>
                <br />
                <br />
                <span style={{ fontWeight: 'bold' }}>Payment Schedule:</span>
                <br /> 50% due at time of booking. <br />
                Remaining balance due 7 days before arrival. <br />
                <span style={{ fontWeight: 'bold' }}>Cancellation Policy:</span>
                <br />
                All paid prepayments are non-refundable.
                <br />
                <span style={{ fontWeight: 'bold' }}>Damage deposit:</span>
                <br /> No damage deposit is due.
              </Subtitle>
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

export default Rates;
