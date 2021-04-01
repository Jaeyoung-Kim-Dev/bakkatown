import React, { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../../UserContext';
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
} from '../AccountElements';

const blankSignIn = {
  email: '',
  password: '',
};

const SignIn = () => {
  const [signIn, setSignup] = useState(blankSignIn);
  const { user, setUser } = useContext(UserContext);

  async function loginRequest(data) {
    try {
      // console.log({ data });
      return await axios.post('http://localhost:8080/login', {
        email: data.email,
        password: data.password,
      });
    } catch (error) {
      console.log(error);
    }
  }

  let handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event);

    const newSignIn = {
      email: signIn.email,
      password: signIn.password,
    };

    loginRequest(newSignIn)
      .then((response) => {
        // console.log(response.status);
        // console.log(response.data);
        const { token, firstName, lastName, email } = response.data;
        console.log(token, firstName, lastName, email);
        if (response.status === 200) {
          localStorage.setItem('token', token);
          localStorage.setItem('firstName', firstName);
          localStorage.setItem('lastName', lastName);
          localStorage.setItem('email', email);
          setUser({
            token: token,
            firstName: firstName,
            lastName: lastName,
            email: email,
          });
        }
        console.log(user);
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
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <FormInput
                type='email'
                id='email'
                name='email'
                onChange={handleChange}
                required
              />
              <FormLabel htmlFor='password'>Password</FormLabel>
              <FormInput
                type='password'
                id='password'
                name='password'
                onChange={handleChange}
                required
              />
              <FormPrimaryButton type='submit'>Log In</FormPrimaryButton>
              <Text>
                Don't have an account? Make one{' '}
                <OtherLink to='/signup'>here</OtherLink>
              </Text>
              <br />
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
