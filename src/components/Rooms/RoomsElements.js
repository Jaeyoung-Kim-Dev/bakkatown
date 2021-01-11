import styled from 'styled-components';
import { Link } from 'react-scroll';

const backgroundDark = '#030929';
// const backgroundLight = '#f5faff';
// const topLine = '#01BF71';
// const headingDark = '#f7f8fa';
// const headingLight = '#030929';
// const subtitleDark = '#fff';
// const subtitleLight = '#030929';
const btnBgDark = '#01BF71';
const btnBgLight = '#030929';
const btnTxtDark = '#030929';
const btnTxtLight = '#fff';
const btnBgHoverDark = '#fff';
const btnBgHoverLight = '#01BF71';

export const RoomsContainer = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${backgroundDark};
  padding-top: 30px;

  @media screen and (max-width: 1400px) {
    padding-top: 30px;
    padding-bottom: 30px;
    height: auto;
  }
`;

export const RoomsWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1400px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 750px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const RoomsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 500px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const RoomsImage = styled.img`
  height: 160px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.5);
`;

export const RoomsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const RoomsH2 = styled.h2`
  font-size: 1.1rem;
  margin-bottom: 10px;
`;

export const RoomsP = styled.p`
  /* text-align: center; */
  /* align-items: center; */
  margin-top: 10px;
  margin-bottom: 20px;
  height: 40px;
  word-spacing: 5px;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Button = styled(Link)`
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

export const RoomSpecs = styled.ul`
  display: flex;
  width: 100%;
  /* align-items: center; */
  /* list-style: none; */
  /* text-align: center; */
  justify-content: space-between;
`;

export const RoomSpecList = styled.li`
  height: 40px;
  display: flex;
  align-items: center;
`;
