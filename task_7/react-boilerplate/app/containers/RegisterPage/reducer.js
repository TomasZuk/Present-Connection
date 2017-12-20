/*
 *
 * RegistrerPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  VIEW_PROFILE,
} from './constants';

const initialState = fromJS({
  username: '',
  password: '',
  date: '',
  photo: ''});

function registerPageReducer(state = initialState, action) {
  switch (action.type) {
    case VIEW_PROFILE:
      return state.merge({
        username: action.username,
        password: action.password,
        date: action.date,
        photo: action.photo
      });
    default:
      return state;
  }
}

export default registerPageReducer;
