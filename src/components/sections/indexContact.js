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
  ButtonS,
  Column2,
  ImgWrap,
  Img,
} from './sectionElements';

const Contact = ({ dark, imgStart }) => {
  return (
    <InfoContainer isDark={dark} id={'contact'}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>contact</TopLine>
              <Heading isDark={dark}>BAKKATOWN BELIZE</Heading>
              <Subtitle isDark={dark}>
                <FiMail style={{ marginRight: '15px' }} />
                Bakkatown@gmail.com
              </Subtitle>
              <Subtitle isDark={dark}>
                <FiPhone style={{ marginRight: '15px' }} />
                +5016140034
              </Subtitle>
              <BtnWrap>
                <ButtonS
                  to='*'
                  offset={-document.documentElement.clientHeight * 0.1}
                  isDark={dark}
                >
                  Leave a Message
                </ButtonS>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img
                src={require(`../../images/img2.jpg`)?.default}
                alt={'overview'}
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
