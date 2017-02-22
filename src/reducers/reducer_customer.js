import { FETCH_CUSTOMER, DELETE_CUSTOMER } from '../actions/index';
import _ from 'lodash';

const INITIAL_STATE = { customers: [], customer: null };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_CUSTOMER:
      return { ...state, customers: action.payload.data};
    case DELETE_CUSTOMER:
      let id = action.payload.request.responseURL.split('/').pop();
      let filteredCustomers = _.filter(state.customers, function(customer) { return customer.customerId != id; });
      return { ...state, customers: filteredCustomers};
    default:
      return state;
  }
}
