import { SET_TICKETS } from '../constants';

const initialState = [];

export const ticketsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TICKETS:
      return payload;

    default:
      return state;
  }
};
