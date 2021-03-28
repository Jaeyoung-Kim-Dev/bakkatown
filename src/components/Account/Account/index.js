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
  FormButton,
  Text,
} from '../SigninElements';

const blankSignIn = {
  email: '',
  password: '',
};

const Account = () => {
  const [signIn, setSignup] = useState(blankSignIn);
  const [readMode, setReadMode] = useState(false);
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
        }
        setUser({
          token: token,
          firstName: firstName,
          lastName: lastName,
          email: email,
        });
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
              <FormH1>My Account</FormH1>
              <FormLabel htmlFor='firstName'>First Name</FormLabel>
              <FormInput
                type='text'
                id='firstName'
                name='firstName'
                readOnly={readMode}
                onChange={handleChange}
                required
              />
              <FormLabel htmlFor='lastName'>Last Name</FormLabel>
              <FormInput
                type='text'
                id='lastName'
                name='lastName'
                readOnly={readMode}
                onChange={handleChange}
                required
              />
              <FormLabel htmlFor='email'>Email</FormLabel>
              <FormInput
                type='email'
                id='email'
                name='email'
                readOnly={readMode}
                onChange={handleChange}
                required
              />
              <FormLabel htmlFor='password'>Password</FormLabel>
              <FormInput
                type='password'
                id='password'
                name='password'
                readOnly={readMode}
                onChange={handleChange}
                required
              />
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Account;
