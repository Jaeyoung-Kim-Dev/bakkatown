import axios from 'axios';
import { FETCH_ROOMS } from '../types';

export const fetchRooms = () => async (dispatch) => {
  const res = await axios.get(`http://localhost:8080/room`);
  // .then((res) => res.data);
  dispatch({
    type: FETCH_ROOMS,
    payload: res.data,
  });
};
