import React from 'react';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from './BookElements';

const Book = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>Bakkatown Belize</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Step 1</FormH1>
              <FormLabel htmlFor='for'>Date</FormLabel>
              <FormInput type='date' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required />
              <FormButton type='submit'>Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Book;
