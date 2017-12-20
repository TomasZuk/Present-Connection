/*
 *
 * RegistrerForm actions
 *
 */

import {
  VIEW_PROFILE,
} from './constants';

export function viewProfileAction(username, password, date, photo) {
  return {
    type: VIEW_PROFILE,
    username: username,
    password: password,
    date: date,
    photo: photo 
  };
}
