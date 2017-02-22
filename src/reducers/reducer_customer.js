import { FETCH_CUSTOMER, DELETE_CUSTOMER } from '../actions/index';
import _ from 'lodash';

const INITIAL_STATE = { customers: [] };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_CUSTOMER:
      return { ...state, customers: action.payload.data};
    case DELETE_CUSTOMER:
      return { ...state, customers: filteredCustomers(state, action)};
    default:
      return state;
  }
}

function filteredCustomers(state, action) {
  let id = action.payload.request.responseURL.split('/').pop();
  return _.filter(state.customers, function(customer) { return customer.customerId != id; });
}
