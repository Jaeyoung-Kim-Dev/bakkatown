import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk'; // because used 'async' in action.
import { bookingReducer } from './reducers/bookingReducer';
import { roomsReducer } from './reducers/roomsReducer';

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

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    booking: bookingReducer,
    roomLists: roomsReducer,
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
