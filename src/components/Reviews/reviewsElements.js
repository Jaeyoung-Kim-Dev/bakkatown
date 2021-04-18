import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

const backgroundDark = '#030929';
const backgroundLight = '#f5faff';
const topLine = '#01BF71';
const headingDark = '#f7f8fa';
const headingLight = '#030929';
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
  touch-action: pan-y;
  --ms-touch-action: pan-y;

  @media screen and (max-width: 768px) {
    height: auto;
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

export const TextWrapper = styled.div`
  justify-content: center;
  margin: 50px;

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
