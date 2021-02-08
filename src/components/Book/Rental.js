import React from 'react';
import { FormContent, FormH1, FormLabel, FormInput } from './BookElements';

const Rental = (props) => {
  return (
    <>
      <FormContent>
        <FormH1>Choose Rental</FormH1>
        <FormLabel htmlFor='king'>
          <FormInput
            type='radio'
            id='king'
            name='roomType'
            value='king'
            onChange={props.handleChange}
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
            onChange={props.handleChange}
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
            onChange={props.handleChange}
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
            onChange={props.handleChange}
            required
          />
          Hostel Mixed Dorm Room
        </FormLabel>
      </FormContent>
    </>
  );
};

export default Rental;
