import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

const backgroundDark = '#030929';
const backgroundLight = '#f5faff';
const topLine = '#01BF71';
const headingDark = '#f7f8fa';
const headingLight = '#030929';
const subtitleDark = '#fff';
const subtitleLight = '#030929';
const btnBgDark = '#01BF71';
const btnBgLight = '#030929';
const btnTxtDark = '#030929';
const btnTxtLight = '#fff';
const btnBgHoverDark = '#fff';
const btnBgHoverLight = '#01BF71';

export const ReviewsContainer = styled.div`
  color: #fff;
  background: ${({ isDark }) => (isDark ? backgroundDark : backgroundLight)};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  } ;
`;

export const ReviewsWrapper = styled.div`
  display: grid;
  z-index: 1;
  min-height: 90vh;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 10vh;
  /* padding: 0 24px; */
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: auto;
    /* padding: 3vh; */
  } ;
`;

export const ReviewsRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  } ;
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  justify-content: center;
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
  } ;
`;

export const Subtitle = styled.p`
  /* display: flex; */
  align-items: center;
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ isDark }) => (isDark ? subtitleDark : subtitleLight)};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ButtonS = styled(LinkS)`
  border-radius: 50px;
  background: ${({ isDark }) => (isDark ? btnBgDark : btnBgLight)};
  white-space: nowrap;
  padding: 12px 30px;
  color: ${({ isDark }) => (isDark ? btnTxtDark : btnTxtLight)};
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ isDark }) => (isDark ? btnBgHoverDark : btnBgHoverLight)};
  }
`;

export const ButtonA = styled.a`
  border-radius: 50px;
  background: ${({ isDark }) => (isDark ? btnBgDark : btnBgLight)};
  white-space: nowrap;
  padding: 12px 30px;
  color: ${({ isDark }) => (isDark ? btnTxtDark : btnTxtLight)};
  font-size: 16px;
  text-decoration: none;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ isDark }) => (isDark ? btnBgHoverDark : btnBgHoverLight)};
  }
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  justify-content: center;
  display: flex;
`;

export const Img = styled.img`
  width: 100%;
  max-height: 65vh;
  margin: 0 0 5px 0;
  /* padding-right: 0; */
  border-radius: 10px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 768px) {
    max-height: 45vh;
  } ;
`;
