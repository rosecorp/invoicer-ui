import axios from 'axios';

export const FETCH_CUSTOMER = 'FETCH_CUSTOMER';
export const CREATE_CUSTOMER = 'CREATE_CUSTOMER';
export const DELETE_CUSTOMER = 'DELETE_CUSTOMER';

const ROOT_URL = 'http://localhost:9000';
const CUSTOMER_ALL = 'invoice/customer/all'
const CUSTOMER_CREATE = 'invoice/customer/create'
const CUSTOMER_DELETE = 'invoice/customer/delete'

export function deleteCustomer(customerId) {
  const request = axios.delete(`${ROOT_URL}/${CUSTOMER_DELETE}/${customerId}`);
  return {
      type: DELETE_CUSTOMER,
      payload: request
  };
}

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
