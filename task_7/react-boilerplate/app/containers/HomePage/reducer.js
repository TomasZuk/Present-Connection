/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOGIN,
} from './constants';

const initialState = fromJS({
  username: ''
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return state.merge({username: action.username});
    default:
      return state;
  }
}

export default homePageReducer;
