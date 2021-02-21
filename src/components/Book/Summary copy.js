import React, { useState, useEffect } from 'react';
import formatCurrency from '../../util';
import {
  FormContent,
  SummaryWrapper,
  FormH1,
  ButtonPay,
  SummaryDetailWrapper,
  SummaryPolicyWrapper,
} from './BookElements';
import Divider from '@material-ui/core/Divider';

const Summary = (props) => {
  const [roomPrice, setRoomPrice] = useState({
    day: '',
    days: '',
    tax: '',
    total: '',
  });
  const { dateFrom, dateTo, roomType } = props.booking;
  const night = props.night;

  useEffect(() => {
    const _roomPrice = roomType.price;
    _roomPrice &&
      setRoomPrice({
        day: formatCurrency(_roomPrice),
        days: formatCurrency(_roomPrice * night),
        tax: formatCurrency(_roomPrice * night * 0.09),
        total: formatCurrency(_roomPrice * night * 1.09),
      });
  }, [roomType, night]);

  return (
    <FormContent>
      <SummaryWrapper>
        <FormH1>SUMMARY</FormH1>
        <br />
        {dateFrom && dateTo && (
          <div>
            <br />
            {props.changeDateFormat(dateFrom, dateTo)}
            <br />
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
        </SummaryPolicyWrapper>
        {props.confirm && <ButtonPay to='./payment'>Compete Booking</ButtonPay>}
      </SummaryWrapper>
    </FormContent>
  );
};

export default Summary;
