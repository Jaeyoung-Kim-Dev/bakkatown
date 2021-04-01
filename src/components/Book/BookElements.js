import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  /* min-height: 692px; */
  /* position: fixed; */
  /* bottom: 0;
  left: 0;
  right: 0;
  top: 0; 
  z-index: 0;
  /* overflow: hidden; */
  background: linear-gradient(to left, #0178bd, #368dc5);
`;

export const FormWrap = styled.div`
  /* height: 100%; */
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  margin-bottom: 5vh;

  @media screen and (max-width: 840px) {
    /* height: 80%; */
    flex-direction: column;
  }
`;

export const ButtonHome = styled(Link)`
  margin: 50px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 2rem;

  @media screen and (max-width: 480px) {
    margin: 20px;
    font-size: 1.7rem;
  }
`;

export const ButtonPay = styled(Link)`
  border-radius: 10px;
  background: #fdd835;
  padding: 10px;
  margin: 20px;
  color: #010606;
  font-size: 1.5rem;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  text-align: center;
  transition: all 0.2s ease-in-out;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.5);
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fd9d35;
  }
`;

export const Form = styled.form`
  height: auto;
  width: auto;
  z-index: 1;
  display: flex;
  margin-right: 20px;
  border-radius: 4px;
  justify-content: space-evenly;

  @media screen and (max-width: 840px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const FormH1 = styled.h1`
  /* margin: 40px; */
  /* color: #fff; */
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  /* color: #fff; */
`;

export const FormInput = styled.input`
  padding: 12px 12px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormSelect = styled.select`
  padding: 12px 12px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: #01bf71;
  padding: 12px 0;
  border: none;
  border-radius: 4px;
  /* color: #fff; */
  font-size: 20px;
  cursor: pointer;
`;

export const Text = styled.span`
  text-align: left;
  /* color: #fff; */
  font-size: 0.8rem;
`;

export const FormTextArea = styled.textarea`
  padding: 12px 12px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  resize: none;
  height: 100px;
`;

export const RoomsWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1300px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ButtonS = styled.div`
  border-radius: 50px;
  background: #95e450;
  white-space: nowrap;
  padding: 12px 30px;
  margin: 0 5px 0 5px;
  /* color: #fff; */
  font-size: 1.1rem;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #01bf71;
  }
`;

export const ButtonM = styled.button`
  border-radius: 50px;
  background: #d4d3c9;
  white-space: nowrap;
  padding: 12px 30px;
  margin: 0 5px 0 5px;
  /* color: #fff; */
  font-size: 0.9rem;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #b3b2ab;
  }
`;

export const GuestDetailWrapper = styled.div`
  /* max-width: 1400px; */
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 30px 50px;
  padding-bottom: 50px;
  width: 500px;

  @media screen and (max-width: 1300px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
    padding: 0 20px 20px;
    width: 300px;
  }
`;

export const RoomsCard = styled.div`
  background: ${({ roomId, selectedRoom }) =>
    roomId === selectedRoom ? '#ffe085' : '#fff'};
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

export const SummaryWrapper = styled.div`
  max-width: 394.39px;
  /* margin: 0 auto; */
  /* display: grid; */
  /* grid-template-columns: 1fr 1fr; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* grid-gap: 30px 80px; */
  /* margin-top: 50px; */
  /* padding: 20px 0 0 20px; */
  padding: 20px;
  background: #fff;
  border-radius: 5px;

  @media screen and (max-width: 1300px) {
    width: 90vw;
    /* display: none; */
  }
`;

export const SummaryDetailWrapper = styled.div`
  /* max-width: 1400px; */
  /* margin: 0 auto; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.8rem 0 0.8rem;
  /* padding: 0 50px 50px; */
`;
// export const SummaryDetailWrapper = styled.div`
//   /* max-width: 1400px; */
//   /* margin: 0 auto; */
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(var(—col-width), auto));
//   /* padding: 0 50px 50px; */
// `;

export const SummaryPolicyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 2rem;
  padding-top: 1rem;
`;

export const AccordionRoot = styled.div`
  max-width: '750px';
  min-width: '350px';

  @media screen and (max-width: 440px) {
    width: 90vw;
  }
`;

export const AppliedPromoCode = styled.div`
  border-radius: 10px;
  background: linear-gradient(to left, #0178bd, #368dc5);
  color: #fff;
  padding: 8px 15px;
  /* margin: 0 5px 0 5px; */
  /* font-size: 0.9rem; */
  outline: none;
  border: none;
  display: inline-block;
  justify-content: center;
  align-items: center;
`;

export const RemovePromoCode = styled.div`
  position: absolute;
  /* transform: translateX(50px); */
  transform: translate(340px, -20px);
  border-radius: 30px;
  background: #fff;
  color: #000;
  padding: 1px 7px 3px;
  border: 1px solid #0178bd;
  cursor: pointer;
`;
