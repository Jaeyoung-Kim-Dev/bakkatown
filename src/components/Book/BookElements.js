import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  /* display: flex; */
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  /* min-height: 692px; */
  /* position: fixed; */
  /* bottom: 0;
  left: 0;
  right: 0;
  top: 0; 
  z-index: 0;
  /* overflow: hidden; */
  background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  );
`;

export const FormWrap = styled.div`
  /* height: 100%; */
  /* display: flex; */
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 300px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const Form = styled.form`
  height: auto;
  width: 100%;
  z-index: 1;
  display: flex;
  margin: 0 auto;
  padding: 50px 32px;
  border-radius: 4px;
  justify-content: space-evenly;

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormContent = styled.div`
  /* background: #010101; */
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* max-width: 350px; */
  padding: 20px;
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9); */

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

  @media screen and (max-width: 400px) {
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
  grid-gap: 30px 80px;
  padding: 0 50px;

  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const RoomsCard = styled.div`
  background: ${({ roomName, selectedRoom }) =>
    roomName === selectedRoom ? '#ffe085' : '#fff'};
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
