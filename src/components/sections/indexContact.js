import { FiPhone, FiMail } from 'react-icons/fi';
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
  Img,
} from './sectionElements';

const Contact = ({ dark, imgStart }) => {
  const id = 'contact';

  return (
    <InfoContainer isDark={dark} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{id}</TopLine>
              <Heading isDark={dark}>BAKKATOWN BELIZE</Heading>
              <Subtitle isDark={dark}>
                <FiMail style={{ marginRight: '15px' }} />
                bakkatown@gmail.com
              </Subtitle>
              <Subtitle isDark={dark}>
                <FiPhone style={{ marginRight: '15px' }} />
                +5016140034
              </Subtitle>
              <BtnWrap>
                <ButtonA
                  href='mailto:bakkatown@gmail.com?subject=Mail from Bakkatown Belize Website&body=Hello, Bakkatown Belize!'
                  offset={-document.documentElement.clientHeight * 0.1}
                  isDark={dark}
                >
                  LEAVE A MESSAGE
                </ButtonA>
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

export default Contact;
