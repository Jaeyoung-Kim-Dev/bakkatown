import { createStore } from 'redux';
import axios from 'axios';
import RoomLists from './components/Rooms/roomLists.json';

// const initialBook = {
//   dateFrom: '',
//   dateTo: '',
//   guests: 2,
//   promoCode: '',
//   roomId: '',
//   roomType: '',
//   firstName: '',
//   lastName: '',
//   email: '',
//   phone: '',
//   country: '',
//   comments: '',
// };
const initialState = {
  booking: {
    dateFrom: '',
    dateTo: '',
    guests: 2,
    promoCode: '',
    roomId: '',
    roomType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    comments: '',
  },
  roomLists: [],
};

export default createStore((state, action) => {
  if (state === undefined) {
    console.log('state is undefined');
    return initialState;
  }
  console.log({ state, action });

  switch (action.type) {
    case 'makeBooking':
      console.log('here in store');
      return {
        ...state,
        booking: { ...state.booking, [action.name]: action.value },
        // roomLists: await axios
        //   .get(`http://localhost:8080/room`)
        //   .then((res) => res.data),
      };
    case 'fetchRooms':
      // console.log('here in store');
      return {
        ...state,
        roomLists: RoomLists,
        // roomLists: await axios
        //   .get(`http://localhost:8080/room`)
        //   .then((res) => res.data),
      };
    default:
      return state;
  }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
