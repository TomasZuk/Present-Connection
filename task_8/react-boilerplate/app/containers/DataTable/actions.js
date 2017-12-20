/*
 *
 * DataTable actions
 *
 */

import {
  GET_DATA,
  RESPONSE_SUCCESS
} from './constants';

export function getData() {
  return {
    type: GET_DATA
  };
}
export function response_success(data) {
  return {
    type: RESPONSE_SUCCESS,
    data: data
  };
}
