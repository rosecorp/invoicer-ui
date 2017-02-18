import axios from 'axios';

export const FETCH_CUSTOMER = 'FETCH_CUSTOMER';
export const CREATE_CUSTOMER = 'CREATE_CUSTOMER';

const ROOT_URL = 'http://localhost:9000';
const CUSTOMER_ALL = 'invoice/customer/all'
const CUSTOMER_CREATE = 'invoice/customer/create'

export function fetchCustomer() {
  const request = axios.get(`${ROOT_URL}/${CUSTOMER_ALL}`);
  return {
      type: FETCH_CUSTOMER,
      payload: request
  };
}

export function createCustomer(props) {
  const request = axios.post(`${ROOT_URL}/${CUSTOMER_CREATE}`, props);

  return {
      type: CREATE_CUSTOMER,
      payload: request
  };
}
