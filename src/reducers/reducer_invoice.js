import { INVOICES } from '../actions/index';

const INITIAL_STATE = { invoices: [] };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INVOICES:
      return { ...state, invoices: action.payload.data};
    default:
      return state;
  }
}
