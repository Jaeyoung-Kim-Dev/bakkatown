import styled from 'styled-components';
// import { Link } from 'react-scroll';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const HeroContainer = styled.div`
  display: flex;
  height: 90vh;
  justify-content: center;
  align-items: center;
`;

export const HeroContent = styled.div`
  height: 70%;
  width: 80%;
  position: absolute;

  &::after {
    content: '';
    border-radius: 10px;
    background: black;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.3;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 1);
  }
`;

export const HeroH1 = styled.h1`
  position: absolute;
  top: 85%;
  left: 15%;
  font-size: 4vw;
  line-height: 6rem;
  transform: translate(-20%, -70%);
  color: white;
  z-index: 3;

  @media screen and (max-width: 768px) {
    font-size: 7vw;
    line-height: 4rem;
    top: 85%;
    left: 25%;
  }
`;

export const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.5);
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled(Link)`
  border-radius: 25px;
  background: #01bf71;
  white-space: nowrap;
  padding: 12px 30px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.5);
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
  }
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const Slider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to left, #0178bd, #368dc5);
  z-index: -1;
`;
