import React from 'react';
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
  // const [countriesd, setCountries] = useState([]);
  // const countriesw = countries.all;
  // const countriesw = JSON.stringify(countries);
  // const test = [1, 2, 3];
  // const countriesw = countries;

  // useEffect(() => {
  //   fetch('./JSON/countries.json')
  //     .then((response) => response.json())
  //     .then((result) => setCountries(result));
  //   // setCountries(JSON.stringify(countries));
  // }, []);
  // console.log(typeof countriesw);
  // // console.log(countriesw.all);
  // console.log(test);
  // console.log(countriesd);

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
              <FormSelect name='guests' placeholder='2' required>
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
              <FormInput type='email' placeholder='Email' required />
              <FormInput type='phone' placeholder='Phone Number' required />
              <FormSelect name='country' required>
                <option>Select Country</option>
                {countries.all.map((country) => (
                  <option key={country.alpha2} value={country.alpha2}>
                    {country.name}
                  </option>
                ))}
              </FormSelect>
              <FormTextArea placeholder='Comments' />
            </FormContent>
            <FormContent>
              <FormH1>Enter Payment Details</FormH1>
              <FormLabel htmlFor='ccNumber'>CREDIT CARD</FormLabel>
              <FormInput
                type='text'
                id='ccNumber'
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
