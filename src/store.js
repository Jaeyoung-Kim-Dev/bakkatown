import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'react-redux'; // because used 'async' in action.
import { RoomsReducer } from './reducers/roomsReducer';

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

const composeEnhancer =
  (window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()) ||
  compose;

const store = createStore(
  combineReducers({
    roomLists: RoomsReducer,
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
