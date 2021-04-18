import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  FormWrap,
  OtherLink,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormPrimaryButton,
  Text,
  ButtonHome,
} from '../AccountElements';

const Forgot = () => {
  const [forgot, setForgot] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  async function forgotRequest(data) {
    try {
      return await axios.post('http://localhost:8080/api/account/forgot', {
        email: data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  let handleSubmit = (event) => {
    event.preventDefault();

    forgotRequest(forgot)
      .then((response) => {
        if (response.status === 200) {
          setIsSuccess(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Container>
        <FormWrap>
          <ButtonHome to='/'>Bakkatown Belize</ButtonHome>
          <FormContent>
            {isSuccess ? (
              <Form>
                <FormH1>We sent you an email to reset your password.</FormH1>
                <Text>
                  <OtherLink to='/login'>Log in</OtherLink>
                </Text>
              </Form>
            ) : (
              <Form onSubmit={handleSubmit}>
                <FormH1>
                  Please provide your email <br /> to reset the password
                </FormH1>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <FormInput
                  type='email'
                  id='email'
                  onChange={(e) => setForgot(e.target.value)}
                  required
                />
                <FormPrimaryButton type='submit'>
                  Send Password Reset Email
                </FormPrimaryButton>
                <Text>
                  <OtherLink to='/login'>Log in</OtherLink>
                </Text>
              </Form>
            )}
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Forgot;
