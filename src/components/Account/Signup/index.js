import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  FormPrimaryButton,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  // HomeLink,
  OtherLink,
  FormContent,
  Form,
  Text,
} from '../AccountElements';

const blankSignup = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const SignUp = () => {
  const [signup, setSignup] = useState(blankSignup);
  const [isSuccess, setIsSuccess] = useState(false);

  async function signupRequest(data) {
    try {
      // console.log({ data });
      return await axios.post('/api/registration', {
        firstName: data.firstName,
        lastName: signdataup.lastName,
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

    let newSignup = {
      firstName: signup.firstName,
      lastName: signup.lastName,
      email: signup.email,
      password: signup.password,
      // country: signup.country,
    };

    console.log('before sent');
    console.log(newSignup);

    signupRequest(newSignup)
      .then((response) => {
        // console.log(response.status);
        // console.log(response.data);
        // const { token, email } = response.data;
        if (response.status === 200) {
          setIsSuccess(true);
        }
        // console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });

    // ApiService.registerUser(
    //   newSignup.firstName,
    //   newSignup.lastName,
    //   newSignup.email,
    //   newSignup.password
    // )
    //   .then((response) => {
    //     console.log(response.status);
    //     console.log(response.data.token);
    //     // nope need to hit email first
    //     if (response.status === 200) {
    //       localStorage.setItem('token', response.data.token);
    //       localStorage.setItem('email', newSignup.email);
    //       // todo hash these later example below
    //       window.axios.defaults.headers.common['Authorization'] =
    //         response.data.token;
    //       document.location.href = 'http://localhost:3000/account';
    //     } else {
    //       console.log('bad signup');
    //       document.location.href = 'http://localhost:3000/signup';
    //     }
    //   })
    //   .catch((error) => {
    //     console.log('error : ', error);
    //   });
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
            {isSuccess ? (
              <Form>
                <FormH1>Your account has been successfully registered. </FormH1>
                <FormH1>Please check your email.</FormH1>
                <Text>
                  <OtherLink to='/login'>Log in</OtherLink>
                </Text>
              </Form>
            ) : (
              <Form onSubmit={handleSubmit}>
                <FormH1>Sign up for a new account</FormH1>
                <FormLabel htmlFor='firstName'>First Name</FormLabel>
                <FormInput
                  type='text'
                  id='firstName'
                  name='firstName'
                  onChange={handleChange}
                  required
                />
                <FormLabel htmlFor='lastName'>Last Name</FormLabel>
                <FormInput
                  type='text'
                  id='lastName'
                  name='lastName'
                  onChange={handleChange}
                  required
                />
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
                <FormPrimaryButton type='submit'>Submit</FormPrimaryButton>
                <Text>
                  Do you have an account? Log in{' '}
                  <OtherLink to='/login'>here</OtherLink>
                </Text>
              </Form>
            )}
          </FormContent>
        </FormWrap>
      </Container>

      {/* <Container className={classes.container}>
        <Icon className={classes.icon}>Bakkatown Belize</Icon>
        <div className={classes.root}>
          <form onSubmit={handleSubmit} className={classes.form}>
            <FormH1>Sign up for a new account</FormH1>

            <FormLabel htmlFor='firstname'>First Name</FormLabel>
            <FormInput
              name='firstname'
              id='firstname'
              onChange={handleChange}
              required
            />

            <FormLabel htmlFor='lastname'>Last Name</FormLabel>
            <FormInput
              name='lastname'
              id='lastname'
              onChange={handleChange}
              required
            />

            <FormLabel htmlFor='email'>Email</FormLabel>
            <FormInput
              name='email'
              id='email'
              onChange={handleChange}
              required
            />

            <FormLabel htmlFor='password'>Password</FormLabel>
            <FormInput
              name='password'
              type='password'
              id='password'
              onChange={handleChange}
              required
            />

            <FormButton onSubmit={handleSubmit}>Continue</FormButton>
            <Text>
              <A to='/forgot'>Forgot password</A>
            </Text>
          </form>
        </div>
      </Container> */}
    </>
  );
};

export default SignUp;
