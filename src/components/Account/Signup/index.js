import React, { useState } from 'react';
import {
  Container,
  FormButton,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  HomeLink,
  OtherLink,
  FormContent,
  Form,
  Text,
} from '../SigninElements';
import ApiService from '../ApiService';

const blankSignup = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  // country: '',
};

const SignUp = () => {
  const [signup, setSignup] = useState(blankSignup);

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);

    let newSignup = {
      firstname: signup.firstname,
      lastname: signup.lastname,
      email: signup.email,
      password: signup.password,
      // country: signup.country,
    };

    console.log('before sent');
    console.log(newSignup);

    ApiService.registerUser(
      newSignup.firstname,
      newSignup.lastname,
      newSignup.email,
      newSignup.password
    )
      .then((response) => {
        console.log(response.status);
        console.log(response.data.token);
        // nope need to hit email first
        if (response.status === 200) {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('email', newSignup.email);
          // todo hash these later example below
          window.axios.defaults.headers.common['Authorization'] =
            response.data.token;
          document.location.href = 'http://localhost:3000/account';
        } else {
          console.log('bad signup');
          document.location.href = 'http://localhost:3000/signup';
        }
      })
      .catch((error) => {
        console.log('error : ', error);
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
              <FormH1>Sign up for a new account</FormH1>
              <FormLabel htmlFor='firstName'>First Name</FormLabel>
              <FormInput
                type='text'
                id='firstName'
                onChange={handleChange}
                required
              />
              <FormLabel htmlFor='lastName'>Last Name</FormLabel>
              <FormInput
                type='text'
                id='lastName'
                onChange={handleChange}
                required
              />
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
                Do you have an account? Log in{' '}
                <OtherLink to='/login'>here</OtherLink>
              </Text>
            </Form>
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
