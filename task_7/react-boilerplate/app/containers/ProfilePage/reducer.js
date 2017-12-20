/*
 *
 * ProfilePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD,
} from './constants';

const initialState = fromJS({
  username: ''
});

function profilePageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      return state;
    default:
      return state;
  }
}

export default profilePageReducer;
