import { MAKE_BOOKING } from '../types';

export const bookingReducer = (state = {}, action) => {
  switch (action.type) {
    case MAKE_BOOKING:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
};
