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
          <Form action='#'>
            <FormContent>
              <FormH1>Date</FormH1>
              <FormLabel htmlFor='bookFrom'>From</FormLabel>
              <FormInput type='date' id='bookFrom' required />
              <FormLabel htmlFor='bookTo'>To</FormLabel>
              <FormInput type='date' id='bookTo' required />
              <FormLabel htmlFor='guests'>Guests</FormLabel>
              <FormInput
                type='number'
                id='guests'
                min='1'
                placeholder='2'
                required
              />
              <FormLabel htmlFor='promoCode'>Promotion / Group Code</FormLabel>
              <FormInput type='text' id='promoCode' required />
            </FormContent>
            <FormContent>
              <FormH1>Choose Rental</FormH1>
              <FormLabel htmlFor='king'>
                <FormInput type='radio' id='king' name='roomType' required />
                King Studio Apartment
              </FormLabel>
              <FormLabel htmlFor='queen'>
                <FormInput type='radio' id='queen' name='roomType' required />
                Queen Apartments
              </FormLabel>
              <FormLabel htmlFor='tralapaCasita'>
                <FormInput
                  type='radio'
                  id='tralapaCasita'
                  name='roomType'
                  required
                />
                Tralapa Casita by the Sea
              </FormLabel>
              <FormLabel htmlFor='dorm'>
                <FormInput type='radio' id='dorm' name='roomType' required />
                Hostel Mixed Dorm Room
              </FormLabel>
            </FormContent>
            <FormContent>
              <FormH1>Enter Guest Details</FormH1>
              <FormInput type='text' placeholder='First Name' required />
              <FormInput type='text' placeholder='Last Name' required />
              <FormInput type='text' placeholder='Email' required />
              <FormInput type='text' placeholder='Phone Number' required />
              <select name='country' placeholder='Select Country' required>
                <option value='ca'>Canada</option>
                <option value='us'>United States</option>
              </select>
              <FormInput type='text' placeholder='Comments' />
            </FormContent>
            <FormContent>
              <FormH1>Enter Payment Details</FormH1>
              <Text>CREDIT CARD</Text>
              <FormInput
                type='text'
                placeholder='1234 1234 1234 1234'
                required
              />
              <FormInput type='text' placeholder='MM / YY' />
              <FormInput type='text' placeholder='CVC' />
              <FormInput type='text' placeholder='Name on card' />
              <FormInput type='text' placeholder='Address (1/2)' />
              <FormInput type='text' placeholder='Address (2/2)' />
              <FormInput type='text' placeholder='ZIP Code' />
              <Text>
                This site is protected by reCAPTCHA and the Google privacy
                policy and Terms of Service apply.
              </Text>
              <FormButton type='submit'>CONFIRM & PAY</FormButton>
            </FormContent>
          </Form>
        </FormWrap>
      </Container>
    </>
  );
};

export default Book;
