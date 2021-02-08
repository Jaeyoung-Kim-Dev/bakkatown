import React, { useState } from 'react';
import axios from 'axios';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import {
  Container,
  FormWrap,
  Icon,
  Form,
  BookTab,
  BookTabs,
  BookTabList,
  BookTabPanel,
} from './BookElements';
import Availability from './Availability';
import Rental from './Rental';
import GuestDetails from './GuestDetails';
import Payment from './Payment';

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
      dateFrom: booking.dateFrom,
      dateTo: booking.dateTo,
      guests: booking.guests,
      promoCode: booking.promoCode,
      roomType: booking.roomType,
      firstName: booking.firstName,
      lastName: booking.lastName,
      email: booking.email,
      phone: booking.phone,
      country: booking.country,
      comments: booking.comments,
      ccNumber: booking.ccNumber,
      ccMonth: booking.ccMonth,
      ccYear: booking.ccYear,
      cvc: booking.cvc,
      ccName: booking.ccName,
      ccAddress1: booking.ccAddress1,
      ccAddress2: booking.ccAddress2,
      ccZip: booking.ccZip,
    };

    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { newBook })
      // .post(`https://localhost:8080/`, { newBook })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
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
        <Icon to='/'>Bakkatown Belize</Icon>
        <FormWrap>
          <Form onSubmit={handleSubmit}>
            <BookTabs>
              <BookTabList>
                <BookTab>Availability</BookTab>
                <BookTab>Rental</BookTab>
                <BookTab>Guest Details</BookTab>
                <BookTab>Payment</BookTab>
              </BookTabList>
              <BookTabPanel>
                <Availability
                  setBooking={setBooking}
                  handleChange={handleChange}
                />
              </BookTabPanel>
              <BookTabPanel>
                <Rental handleChange={handleChange} />
              </BookTabPanel>
              <BookTabPanel>
                <GuestDetails handleChange={handleChange} />
              </BookTabPanel>
              <BookTabPanel>
                <Payment handleChange={handleChange} />
              </BookTabPanel>
            </BookTabs>
          </Form>
        </FormWrap>
      </Container>
    </>
  );
};

export default Book;
