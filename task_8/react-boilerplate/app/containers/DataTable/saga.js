import { take, call, put, select ,takeEvery} from 'redux-saga/effects';
import getDataResponse from '../../api/index';
import {GET_DATA, RESPONSE_SUCCESS} from './constants';
import {response_success} from './actions';
// Individual exports for testing

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchData() {
  try {
    const data = yield call(getDataResponse);
    console.log(data.data);
    yield put(response_success(data.data));
    // yield put({type: "USER_FETCH_SUCCEEDED", user: user});
  } catch (e) {
    // yield put({type: "USER_FETCH_FAILED", message: e.message});
    console.log(e);
  }
}


export default function* mySaga() {
  // See example in containers/HomePage/saga.js
  yield takeEvery(GET_DATA, fetchData);
}
