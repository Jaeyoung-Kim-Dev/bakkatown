import React, { useState, useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { toast } from 'react-toastify';
import formatCurrency from '../../util';
import {
  FormContent,
  SummaryWrapper,
  FormH1,
  SummaryDetailWrapper,
  SummaryPolicyWrapper,
} from './BookElements';
import Divider from '@material-ui/core/Divider';
import 'react-toastify/dist/ReactToastify.css';

const taxRate = 0.09;
toast.configure();

const Summary = (props) => {
  const [roomPrice, setRoomPrice] = useState({
    day: '',
    days: '',
    tax: '',
    total: '',
  });
  const { booking } = props.booking;
  const { dateFrom, dateTo, roomType, guests } = props.booking;
  const night = props.night;

  useEffect(() => {
    const _roomPrice = roomType.price;
    _roomPrice &&
      setRoomPrice({
        day: formatCurrency(_roomPrice),
        days: formatCurrency(_roomPrice * night),
        tax: formatCurrency(_roomPrice * night * taxRate),
        total: formatCurrency(_roomPrice * night * (1 + taxRate)),
      });
  }, [roomType, night]);

  async function handleToken(token) {
    console.log('post start');
    const response = await axios.post(`http://localhost:8080/charge`, {
      token,
      booking,
      amount: roomType.price * night * (1 + taxRate) * 100,
    });
    const { status } = response.data;
    console.log('Response:', response.data);
    if (status === 'success') {
      toast('Success! Check email for details', { type: 'success' });
    } else {
      toast('Something went wrong', { type: 'error' });
    }
  }

  return (
    <FormContent>
      <SummaryWrapper>
        <FormH1>SUMMARY</FormH1>
        <br />
        {dateFrom && dateTo && (
          <div>
            <br />
            <SummaryDetailWrapper>
              <p>Date</p>
              {props.changeDateFormat(dateFrom, dateTo)}
            </SummaryDetailWrapper>
            <Divider />
            <SummaryDetailWrapper>
              <p>Guests</p>
              {guests}
            </SummaryDetailWrapper>
          </div>
        )}
        {roomType && dateFrom && (
          <div>
            <Divider />
            <SummaryDetailWrapper>
              <h4>{roomType.name}</h4>
              <h4>{roomPrice.day}</h4>
            </SummaryDetailWrapper>
            <SummaryDetailWrapper>
              <h4>Night(s)</h4>
              <h4>{night}</h4>
            </SummaryDetailWrapper>
            <SummaryDetailWrapper>
              <p>Rental price</p>
              {roomPrice.days}
            </SummaryDetailWrapper>
            <SummaryDetailWrapper>
              <p>BTB Hotel Tax</p>
              {roomPrice.tax}
            </SummaryDetailWrapper>
            <SummaryDetailWrapper>
              <h4>SUBTOTAL</h4>
              <h4>{roomPrice.total}</h4>
            </SummaryDetailWrapper>
            <Divider />
            <SummaryDetailWrapper>
              <h3>Total</h3>
              <h3>{roomPrice.total}</h3>
            </SummaryDetailWrapper>
            <SummaryDetailWrapper>
              <p>Property's currency</p>
              {roomPrice.total}
            </SummaryDetailWrapper>
          </div>
        )}
        <Divider />
        <SummaryPolicyWrapper>
          <h4>Cancellation Policy:</h4>
          <p>All paid prepayments are non-refundable.</p>
          <h4>Damage Protection Policy:</h4>
          <p>No damage deposit is due.</p>
          <br />
        </SummaryPolicyWrapper>
        {/* {props.confirm && <ButtonPay to='./payment'>Compete Booking</ButtonPay>} */}
        {props.confirm && (
          <StripeCheckout
            stripeKey='pk_test_51IN11gDGhZ9LCyXGlTyb7qx9v99iwmLMZQt3YxsrSydM8WUe5KgPe7f1Ss2z47Ql9KOn4gKEFX9VcyMHFIkEt05X00gXrSdXYW'
            token={handleToken}
            totalAmount={roomType.price * night * (1 + taxRate) * 100}
            name={roomType.name}
            billingAddress
          />
        )}
      </SummaryWrapper>
    </FormContent>
  );
};

export default Summary;
