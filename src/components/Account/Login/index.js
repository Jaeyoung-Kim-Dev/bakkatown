import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  FormWrap,
  HomeLink,
  OtherLink,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from '../SigninElements';

const blankSignIn = {
  email: '',
  password: '',
};

const SignIn = () => {
  const [signIn, setSignup] = useState(blankSignIn);

  async function loginRequest(data) {
    try {
      console.log(data);
      return await axios.post('http://localhost:8080/api/v1/login', {
        email: data.email,
        password: data.password,
      });
    } catch (error) {
      console.log(error);
    }
  }

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);

    const newSignIn = {
      email: signIn.email,
      password: signIn.password,
    };

    loginRequest({ newSignIn })
      .then((response) => {
        console.log(response.status);
        console.log(response.data);

        if (response.status === 200) {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('email', response.data.email);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignup((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <Container>
        <FormWrap>
          <HomeLink to='/'>Bakkatown Belize</HomeLink>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <FormInput
                type='email'
                id='email'
                onChange={handleChange}
                required
              />
              <FormLabel htmlFor='password'>Password</FormLabel>
              <FormInput
                type='password'
                id='password'
                onChange={handleChange}
                required
              />
              <FormButton type='submit'>Continue</FormButton>
              <Text>
                Don't have an account? Make one{' '}
                <OtherLink to='/signup'>here</OtherLink>
              </Text>
              <Text>
                <OtherLink to='/forgot'>Forgot password</OtherLink>
              </Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
