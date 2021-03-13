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
  const { dateFrom, dateTo, roomId, roomType, guests } = props.booking;
  const night = props.night;

  useEffect(() => {
    const _roomPrice = roomType.roomCost;
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
      booking: props.booking,
      roomId: props.booking.roomId,
      totalAmount: roomType.roomCost * night * (1 + taxRate),
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
              <h4>{roomType.roomTitle}</h4>
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
            stripeKey={process.env.REACT_APP_STRIPE_API_KEY}
            token={handleToken}
            name={roomType.roomTitle}
            billingAddress
            amount={roomType.roomCost * night * (1 + taxRate) * 100}
          />
        )}
      </SummaryWrapper>
    </FormContent>
  );
};

export default Summary;
