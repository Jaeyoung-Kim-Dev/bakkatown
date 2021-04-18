import React from 'react';
import {
  ConfirmWrapper,
  FormH1,
  ReservationID,
  ButtonHomeFromBook,
} from './BookElements';

const Confirm = (props) => {
  return (
    <>
      <ConfirmWrapper>
        <FormH1>Booking confirmed</FormH1>
        <br />
        <FormH1>Your confirmation number is</FormH1>
        <br />
        <ReservationID>{props.reservationId}</ReservationID>
        <ButtonHomeFromBook to='/'>HOME</ButtonHomeFromBook>
      </ConfirmWrapper>
    </>
  );
};

export default Confirm;
