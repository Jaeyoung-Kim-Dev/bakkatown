import styled from 'styled-components';
// import { Link as LinkS } from 'react-scroll';

const backgroundDark = '#030929';
const backgroundLight = '#f5faff';
const topLine = '#01BF71';
const headingDark = '#f7f8fa';
const headingLight = '#030929';
const subtitleDark = '#fff';
const subtitleLight = '#030929';
// const btnBgDark = '#01BF71';
// const btnBgLight = '#030929';
// const btnTxtDark = '#030929';
// const btnTxtLight = '#fff';
// const btnBgHoverDark = '#fff';
// const btnBgHoverLight = '#01BF71';

export const OverviewContainer = styled.div`
  color: #fff;
  background: ${({ isDark }) => (isDark ? backgroundDark : backgroundLight)};
  /* padding: 5vh 10% 0; */
  display: flex;
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  } ;
`;

export const OverviewWrapper = styled.div`
  z-index: 1;
  height: 90vh;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: auto;
  } ;
`;

export const OverviewRow = styled.div`
  background: ${({ isDark }) => (isDark ? backgroundDark : backgroundLight)};
  padding-bottom: 40px;
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  overflow: hidden;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  } ;
`;

export const Column1 = styled.div`
  padding: 20px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  padding: 20px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  /* padding-top: 0; */
  margin-left: 10px;
  text-align: left;
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
  /* display: flex;
  align-items: center; */
  max-width: 440px;
  margin-bottom: 5px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ isDark }) => (isDark ? subtitleDark : subtitleLight)};
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
