import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {
  FormContent,
  FormH1,
  FormLabel,
  FormInput,
  FormSelect,
} from './BookElements';

const Availability = (props) => {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  function dateHandleChange(ranges) {
    setDateRange(ranges);
    props.setBooking((prevState) => ({
      ...prevState,
      dateFrom: ranges[0].startDate,
      dateTo: ranges[0].endDate,
    }));
  }

  return (
    <>
      <FormContent>
        <FormH1>Date</FormH1>
        <DateRange
          onChange={(item) => dateHandleChange([item.selection])}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={2}
          ranges={dateRange}
          minDate={new Date()}
          direction='horizontal'
        />
        <FormLabel htmlFor='guests'>Guests</FormLabel>
        <FormSelect
          name='guests'
          onChange={props.handleChange}
          placeholder='2'
          defaultValue={2}
          required
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
        </FormSelect>
        <FormInput
          type='text'
          id='promoCode'
          name='promoCode'
          placeholder='Promotion / Group Code'
          onChange={props.handleChange}
          required
        />
      </FormContent>
    </>
  );
};

export default Availability;
