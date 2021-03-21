import { FETCH_ROOMS } from '../types';

export const roomsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ROOMS:
      // console.log('here in store');
      return {
        // ...state,
        roomLists: action.payload,
      };
    default:
      return state;
  }
};
