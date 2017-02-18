import { FETCH_CUSTOMER } from '../actions/index';

const INITIAL_STATE = { customers: [], customer: null };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_CUSTOMER:
      return { ...state, customers: action.payload.data };
    default:
      return state;
  }
}
