import React, { useContext, useState } from 'react';
import axios from 'axios';
import {
  Container,
  FormPrimaryButton,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  OtherLink,
  FormContent,
  Form,
  Text,
  ButtonHome,
} from '../AccountElements';
import { UserContext } from '../../../UserContext';

const blankSignup = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const SignUp = () => {
  const [signup, setSignup] = useState(blankSignup);
  const [isSuccess, setIsSuccess] = useState(false);
  const { user, setUser } = useContext(UserContext);

  async function signupRequest(data) {
    try {
      return await axios.post('/api/account/registration', {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
      });
    } catch (error) {
      console.log(error);
    }
  }

  let handleSubmit = (event) => {
    event.preventDefault();

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
        if (response.status === 200) {
          setIsSuccess(true);
          const { token, firstName, lastName, email } = response.data;
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
          <ButtonHome to='/'>Bakkatown Belize</ButtonHome>
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
                <FormPrimaryButton type='submit'>SUBMIT</FormPrimaryButton>
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

            <FormLabel htmlFor='firstName'>First Name</FormLabel>
            <FormInput
              name='firstName'
              id='firstName'
              onChange={handleChange}
              required
            />

            <FormLabel htmlFor='lastName'>Last Name</FormLabel>
            <FormInput
              name='lastName'
              id='lastName'
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
