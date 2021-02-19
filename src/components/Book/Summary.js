import React from 'react';
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
  const roomPrice = props.booking.roomType
    ? {
        day: formatCurrency(props.booking.roomType.price),
        days: formatCurrency(props.booking.roomType.price * props.night),
        tax: formatCurrency(props.booking.roomType.price * props.night * 0.09),
        total: formatCurrency(
          props.booking.roomType.price * props.night * 1.09
        ),
      }
    : 0;

  // const roomPriceDay = formatCurrency(props.booking.roomType.price);
  // const roomPriceDays = formatCurrency(
  //   props.booking.roomType.price * props.night
  // );
  // const roomTax = formatCurrency(
  //   props.booking.roomType.price * props.night * 0.09
  // );
  // const roomTotalPrice = formatCurrency(
  //   props.booking.roomType.price * props.night * 1.09
  // );

  return (
    <FormContent>
      <SummaryWrapper>
        <FormH1>SUMMARY</FormH1>
        {props.booking.dateTo !== '' ? (
          <div>
            <br /> <br />
            {props.changeDateFormat(
              props.booking.dateFrom,
              props.booking.dateTo
            )}
          </div>
        ) : (
          ''
        )}
        {props.booking.roomType !== '' && props.night !== 0 ? (
          <div>
            <br />
            <Divider />
            <SummaryDetailWrapper>
              <h4>{props.booking.roomType.name}</h4>
              <h4>{roomPrice.day}</h4>
            </SummaryDetailWrapper>
            <SummaryDetailWrapper>
              <h4>Night(s)</h4>
              <h4>{props.night}</h4>
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
            <Divider />
            <SummaryPolicyWrapper>
              <h4>Cancellation Policy:</h4>
              <p>All paid prepayments are non-refundable.</p>
              <h4>Damage Protection Policy:</h4>
              <p>No damage deposit is due.</p>
            </SummaryPolicyWrapper>
          </div>
        ) : (
          ''
        )}
        {props.confirm ? <ButtonPay to='./payment'>P A Y</ButtonPay> : ''}
      </SummaryWrapper>
    </FormContent>
  );
};

export default Summary;
