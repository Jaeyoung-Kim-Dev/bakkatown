import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  /* overflow: hidden; */
  background: linear-gradient(to left, #0178bd, #368dc5);
`;

export const FormWrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    /* height: 80%; */
  }
`;

// export const HomeLink = styled(Link)`
//   margin-left: 32px;
//   margin-top: 32px;
//   text-decoration: none;
//   color: #fff;
//   font-weight: 700;
//   font-size: 32px;
// `;

export const OtherLink = styled(Link)`
  text-decoration: underline;
  color: #fff;
`;

export const FormContent = styled.div`
  /* height: 100%; */
  flex: 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
    height: 100%;
  }
`;

export const Form = styled.form`
  background: #102948;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 50px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 22px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 32px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  background: ${({ readOnly }) => (readOnly ? 'lightgrey' : '#fff')};
`;

export const FormPrimaryButton = styled.button`
  background: #01bf71;
  margin-bottom: 32px;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const FormSecondaryButton = styled.button`
  background: #ea6e03;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const Text = styled.span`
  text-align: center;
  /* margin-bottom: 24px; */
  color: #fff;
  font-size: 14px;
`;

export const TableWrapper = styled.div`
  background: #f3f4ff;
  width: 100%;
  max-width: 800px;
  height: auto;
  min-height: 700px;
  max-height: 80vh;
  z-index: 1;
  margin: 0 auto;
  padding: 50px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    /* padding: 22px 32px; */
  }
`;

export const ReviewForm = styled.form`
  background: #102948;
  max-width: 800px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 50px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 22px 32px;
  }
`;

export const ReviewTextArea = styled.textarea`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  background: ${({ readOnly }) => (readOnly ? 'lightgrey' : '#fff')};
`;

export const ButtonHome = styled(Link)`
  margin: 50px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 2rem;
  text-align: center;

  @media screen and (max-width: 480px) {
    margin: 20px;
    font-size: 1.7rem;
  }
`;
