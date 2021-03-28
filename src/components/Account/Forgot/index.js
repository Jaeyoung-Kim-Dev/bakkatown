import React, { useState } from 'react';
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
import ApiService from '../ApiService';

const Forgot = () => {
  const [forgot, setForgot] = useState('');

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);

    ApiService.sendForgotRequest(forgot)
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
        if (response.status === 200) {
          if (localStorage.getItem('token') !== null) {
            localStorage.clear();
          }
        }
      })
      .then(
        () =>
          // alert("A email link will be sent");
          (document.location.href = 'http://localhost:3000/signin')
      )
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <FormH1>Reset Password</FormH1>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <FormInput
                type='email'
                id='email'
                onChange={(e) => setForgot(e.target.value)}
                required
              />
              <FormButton type='submit'>Continue</FormButton>
              <Text>
                <OtherLink to='/login'>Log in</OtherLink>
              </Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
      {/* <Container className={classes.container}>
        <Icon className={classes.icon}>Bakkatown Belize</Icon>
        <div className={classes.root}>
          <form onSubmit={handleSubmit} className={classes.form}>
            <FormH1>Please provide your account email</FormH1>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <FormInput
              name='email'
              id='email'
              onChange={handleChange}
              required
            />

            <FormButton onSubmit={handleSubmit}>Continue</FormButton>
            <Text>
              <A to='/signin'>Sign in</A>
            </Text>
          </form>
        </div>
      </Container> */}
    </>
  );
};

export default Forgot;
