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
} from '../AccountElements';

const Forgot = () => {
  const [forgot, setForgot] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  async function forgotRequest(data) {
    try {
      // console.log({ data });
      return await axios.post('http://localhost:8080/forgot', {
        email: data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  let handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event);

    forgotRequest(forgot)
      .then((response) => {
        // console.log(response.status);
        // console.log(response.data);
        // const { token, email } = response.data;
        if (response.status === 200) {
          setIsSuccess(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    // ApiService.sendForgotRequest(forgot)
    //   .then((response) => {
    //     console.log(response.status);
    //     console.log(response.data);
    //     if (response.status === 200) {
    //       if (localStorage.getItem('token') !== null) {
    //         localStorage.clear();
    //       }
    //     }
    //   })
    //   .then(
    //     () =>
    //       // alert("A email link will be sent");
    //       (document.location.href = 'http://localhost:3000/signin')
    //   )
    //   .catch((error) => {
    //     console.log(error.message);
    //   });
  };

  return (
    <>
      <Container>
        <FormWrap>
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
