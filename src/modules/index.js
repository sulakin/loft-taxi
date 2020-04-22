import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects';
import auth, { sagas as authSaga } from './Auth';
import profile, { sagas as profileSaga } from './Profile';

export default combineReducers({ auth, profile });

export function* rootSaga() {
  yield fork(authSaga);
  yield fork(profileSaga);
}
