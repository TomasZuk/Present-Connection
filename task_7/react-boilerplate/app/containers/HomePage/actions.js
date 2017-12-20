/*
 *
 * HomePage actions
 *
 */

import {
  LOGIN,
} from './constants';

export function OnLogin(username) {
  return {
    type: LOGIN,
    username: username
  };
}
