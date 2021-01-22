import styled from 'styled-components';

const backgroundDark = '#030929';
const backgroundLight = '#f5faff';
const topLine = '#01BF71';
const headingDark = '#f7f8fa';
const headingLight = '#030929';

export const GalleryContainer = styled.div`
  color: #fff;
  background: ${({ isDark }) => (isDark ? backgroundDark : backgroundLight)};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  } ;
`;

export const GalleryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  height: 90vh;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: auto;
  } ;
`;

export const TextWrapper = styled.div`
  justify-content: center;
  margin: 20px;

  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
  } ;
`;

export const TopLine = styled.p`
  color: ${topLine};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  letter-spacing: 0.3rem;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ isDark }) => (isDark ? headingDark : headingLight)};

  @media screen and (max-width: 480px) {
    font-size: 32px;
    margin-top: 50px;
  } ;
`;

export const ImgWrap = styled.div`
  /* max-width: 555px; */
  max-height: 60vh;
  justify-content: center;
  display: flex;

  @media screen and (max-width: 768px) {
    margin-bottom: 60px;
  } ;
`;

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  /* margin: 0 0 5px 0; */
  /* padding-right: 0; */
  border-radius: 10px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.5);
`;
