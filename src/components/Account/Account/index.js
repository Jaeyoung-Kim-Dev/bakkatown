import React, { useState, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../UserContext';
import {
  Container,
  FormWrap,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormPrimaryButton,
  FormSecondaryButton,
} from '../AccountElements';

const Account = () => {
  const { user, setUser } = useContext(UserContext);
  const currentAccount = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
  };
  const [account, setAccount] = useState(currentAccount);
  const [readMode, setReadMode] = useState(true);
  const history = useHistory();

  async function accountRequest(data) {
    try {
      // console.log({ data });
      return await axios.post('http://localhost:8080/api/account/', {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
      });
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event);

    const newAccount = {
      firstName: account.firstName,
      lastName: account.lastName,
      email: account.email,
      password: account.password,
    };

    accountRequest(newAccount)
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
          setReadMode(true);
          toast('Your account has been successfully updated.', {
            type: 'success',
          });
        }
        // console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAccount((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(account);
  };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setAccount((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

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
                value={account.firstName}
                readOnly={readMode}
                onChange={handleChange}
                required
              />
              <FormLabel htmlFor='lastName'>Last Name</FormLabel>
              <FormInput
                type='text'
                id='lastName'
                name='lastName'
                value={account.lastName}
                readOnly={readMode}
                onChange={handleChange}
                required
              />
              <FormLabel htmlFor='email'>Email</FormLabel>
              <FormInput
                type='email'
                id='email'
                name='email'
                value={account.email}
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
                placeholder={readMode ? '' : 'Only if you dont want to change'}
                onChange={handleChange}
              />
              {readMode ? (
                <>
                  <FormPrimaryButton
                    onClick={(e) => {
                      e.preventDefault();
                      setReadMode(false);
                    }}
                  >
                    E D I T
                  </FormPrimaryButton>
                  <FormSecondaryButton
                    onClick={(e) => {
                      e.preventDefault();
                      setReadMode(true);
                      history.push('/');
                    }}
                  >
                    H O M E
                  </FormSecondaryButton>
                </>
              ) : (
                <>
                  <FormPrimaryButton type='submit'>S A V E</FormPrimaryButton>
                  <FormSecondaryButton
                    onClick={(e) => {
                      e.preventDefault();
                      setReadMode(true);
                    }}
                  >
                    C A N C E L
                  </FormSecondaryButton>
                </>
              )}
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Account;
