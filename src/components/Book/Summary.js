import React from 'react';
import { FormContent, SummaryWrapper, FormH1 } from './BookElements';
import Divider from '@material-ui/core/Divider';

const Summary = (props) => {
  return (
    <FormContent>
      <SummaryWrapper>
        <FormH1>SUMMARY</FormH1>
        <p>Date</p>
        {props.changeDateFormat(props.booking.dateFrom, props.booking.dateTo)}
        <Divider />
        {props.booking.roomType.name}
        <p>Rental price</p>
        {/* {props.booking.} */}
        <p>BTB Hotel Tax</p>
        <Divider />

        <Divider />
        <h2>Total</h2>
        <Divider />
        <p>Property's currency</p>
        <h4>Cancellation Policy</h4>
        <p>All paid prepayments are non-refundable.</p>
        <h4>Damage Protection Policy</h4>
        <p>No damage deposit is due.</p>
        <p></p>
        <p></p>
      </SummaryWrapper>
    </FormContent>
  );
};

export default Summary;
