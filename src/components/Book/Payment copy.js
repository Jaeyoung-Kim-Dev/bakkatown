import React from 'react';
import {
  FormContent,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from './BookElements';

const Payment = (props) => {
  return (
    <>
      <FormContent>
        <FormH1>Enter Payment Details</FormH1>
        <FormLabel htmlFor='ccNumber'>CREDIT CARD</FormLabel>
        <FormInput
          type='text'
          id='ccNumber'
          name='ccNumber'
          placeholder='1234 1234 1234 1234'
          onChange={props.handleChange}
          required
        />
        <FormInput
          type='text'
          name='ccMonth'
          placeholder='MM'
          onChange={props.handleChange}
        />
        <FormInput
          type='text'
          name='ccYear'
          placeholder='YY'
          onChange={props.handleChange}
        />
        <FormInput
          type='text'
          name='cvc'
          placeholder='CVC'
          onChange={props.handleChange}
        />
        <FormInput
          type='text'
          name='ccName'
          placeholder='Name on card'
          onChange={props.handleChange}
        />
        <FormInput
          type='text'
          name='ccAddress1'
          placeholder='Address (1/2)'
          onChange={props.handleChange}
        />
        <FormInput
          type='text'
          name='ccAddress2'
          placeholder='Address (2/2)'
          onChange={props.handleChange}
        />
        <FormInput
          type='text'
          name='ccZip'
          placeholder='ZIP Code'
          onChange={props.handleChange}
        />
        <Text>
          This site is protected by reCAPTCHA and the Google privacy policy and
          Terms of Service apply.
        </Text>
        <FormButton type='submit'>CONFIRM & PAY</FormButton>
      </FormContent>
    </>
  );
};

export default Payment;
