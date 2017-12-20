/*
 *
 * DataTable reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_DATA,
  RESPONSE_SUCCESS
} from './constants';

const initialState = fromJS({
  data: null
});

function dataTableReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA:
      return state;
    case RESPONSE_SUCCESS:
      return state.set("data", action.data);
    default:
      return state;
  }
}

export default dataTableReducer;
