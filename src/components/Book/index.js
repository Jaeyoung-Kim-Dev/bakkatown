import React, { useState } from 'react';
import { countries } from 'country-data';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormSelect,
  FormButton,
  Text,
  FormTextArea,
} from './BookElements';

const Book = () => {
  const initialBook = {
    dateFrom: '',
    dateTo: '',
    guests: 2,
    promoCode: '',
    roomType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    comments: '',
    ccNumber: '',
    ccMonth: '',
    ccYear: '',
    cvc: '',
    ccName: '',
    ccAddress1: '',
    ccAddress2: '',
    ccZip: '',
  };

  const [booking, setBooking] = useState(initialBook);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newBook = {
      dateFrom: '',
      dateTo: '',
      guests: '',
      promoCode: '',
      roomType: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      country: '',
      comments: '',
      ccNumber: '',
      ccMonth: '',
      ccYear: '',
      cvc: '',
      ccName: '',
      ccAddress1: '',
      ccAddress2: '',
      ccZip: '',
    };
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBooking((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  console.log(booking);

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>Bakkatown Belize</Icon>
          <Form onSubmit={handleSubmit}>
            <FormContent>
              <FormH1>Date</FormH1>
              <FormLabel htmlFor='dateFrom'>From</FormLabel>
              <FormInput
                type='date'
                id='dateFrom'
                name='dateFrom'
                onChange={handleChange}
                required
              />
              <FormLabel htmlFor='dateTo'>To</FormLabel>
              <FormInput
                type='date'
                id='dateTo'
                name='dateTo'
                onChange={handleChange}
                required
              />
              <FormLabel htmlFor='guests'>Guests</FormLabel>
              <FormSelect
                name='guests'
                onChange={handleChange}
                placeholder='2'
                required
              >
                <option value={1}>1</option>
                <option value={2} selected>
                  2
                </option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
              </FormSelect>
              <FormLabel htmlFor='promoCode'>Promotion / Group Code</FormLabel>
              <FormInput
                type='text'
                id='promoCode'
                name='promoCode'
                onChange={handleChange}
                required
              />
            </FormContent>
            <FormContent>
              <FormH1>Choose Rental</FormH1>
              <FormLabel htmlFor='king'>
                <FormInput
                  type='radio'
                  id='king'
                  name='roomType'
                  value='king'
                  onChange={handleChange}
                  required
                />
                King Studio Apartment
              </FormLabel>
              <FormLabel htmlFor='queen'>
                <FormInput
                  type='radio'
                  id='queen'
                  name='roomType'
                  value='queen'
                  onChange={handleChange}
                  required
                />
                Queen Apartments
              </FormLabel>
              <FormLabel htmlFor='tralapaCasita'>
                <FormInput
                  type='radio'
                  id='tralapaCasita'
                  name='roomType'
                  value='tralapaCasita'
                  onChange={handleChange}
                  required
                />
                Tralapa Casita by the Sea
              </FormLabel>
              <FormLabel htmlFor='dorm'>
                <FormInput
                  type='radio'
                  id='dorm'
                  name='roomType'
                  value='dorm'
                  onChange={handleChange}
                  required
                />
                Hostel Mixed Dorm Room
              </FormLabel>
            </FormContent>
            <FormContent>
              <FormH1>Enter Guest Details</FormH1>
              <FormInput
                type='text'
                name='firstName'
                placeholder='First Name'
                onChange={handleChange}
                required
              />
              <FormInput
                type='text'
                name='lastName'
                placeholder='Last Name'
                onChange={handleChange}
                required
              />
              <FormInput
                type='email'
                name='email'
                placeholder='Email'
                onChange={handleChange}
                required
              />
              <FormInput
                type='phone'
                name='phone'
                placeholder='Phone Number'
                onChange={handleChange}
                required
              />
              <FormSelect name='country' onChange={handleChange} required>
                <option>Select Country</option>
                {countries.all.map((country) => (
                  <option key={country.alpha2} value={country.alpha2}>
                    {country.name}
                  </option>
                ))}
              </FormSelect>
              <FormTextArea
                name='comments'
                placeholder='Comments'
                onChange={handleChange}
              />
            </FormContent>
            <FormContent>
              <FormH1>Enter Payment Details</FormH1>
              <FormLabel htmlFor='ccNumber'>CREDIT CARD</FormLabel>
              <FormInput
                type='text'
                id='ccNumber'
                name='ccNumber'
                placeholder='1234 1234 1234 1234'
                onChange={handleChange}
                required
              />
              <FormInput
                type='text'
                name='ccMonth'
                placeholder='MM'
                onChange={handleChange}
              />
              <FormInput
                type='text'
                name='ccYear'
                placeholder='YY'
                onChange={handleChange}
              />
              <FormInput
                type='text'
                name='cvc'
                placeholder='CVC'
                onChange={handleChange}
              />
              <FormInput
                type='text'
                name='ccName'
                placeholder='Name on card'
                onChange={handleChange}
              />
              <FormInput
                type='text'
                name='ccAddress1'
                placeholder='Address (1/2)'
                onChange={handleChange}
              />
              <FormInput
                type='text'
                name='ccAddress2'
                placeholder='Address (2/2)'
                onChange={handleChange}
              />
              <FormInput
                type='text'
                name='ccZip'
                placeholder='ZIP Code'
                onChange={handleChange}
              />
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
