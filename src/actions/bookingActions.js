import axios from 'axios';
import { MAKE_BOOKING } from '../types';

export const makeBooking = (name, value) => (dispatch) => {
  // const booking = getState().booking.slice();
  // const { name, value } = event.target;
  // console.log(getState);
  // console.log(value, name);
  console.log('hi');
  dispatch({
    type: MAKE_BOOKING,
    payload: {
      name: name,
      value: value,
    },
  });
};
