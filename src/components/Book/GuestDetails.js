import React from 'react';
import { countries } from 'country-data';
import {
  FormContent,
  FormH1,
  FormInput,
  FormSelect,
  FormTextArea,
} from './BookElements';

const GuestDetails = (props) => {
  return (
    <>
      <FormContent>
        <FormH1>Enter Guest Details</FormH1>
        <FormInput
          type='text'
          name='firstName'
          placeholder='First Name'
          onChange={props.handleChange}
          required
        />
        <FormInput
          type='text'
          name='lastName'
          placeholder='Last Name'
          onChange={props.handleChange}
          required
        />
        <FormInput
          type='email'
          name='email'
          placeholder='Email'
          onChange={props.handleChange}
          required
        />
        <FormInput
          type='phone'
          name='phone'
          placeholder='Phone Number'
          onChange={props.handleChange}
          required
        />
        <FormSelect name='country' onChange={props.handleChange} required>
          <option>Select Country</option>
          {countries.all.map((country, key) => (
            <option key={key} value={country.alpha2}>
              {country.name}
            </option>
          ))}
        </FormSelect>
        <FormTextArea
          name='comments'
          placeholder='Comments'
          onChange={props.handleChange}
        />
      </FormContent>
    </>
  );
};

export default GuestDetails;
