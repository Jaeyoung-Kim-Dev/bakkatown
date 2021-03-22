import axios from 'axios';
import { MAKE_BOOKING } from '../types';

export const makeBooking = (target) => (dispatch, getState) => {
  // const booking = getState().booking.slice();
  // const res = await axios.get(`http://localhost:8080/room`);
  // .then((res) => res.data);
  // const { name, value } = event.target;
  // console.log(getState);
  console.log('hi');
  dispatch({
    type: MAKE_BOOKING,
    payload: {
      // name: name,
      // value: value,
    },
  });
};
