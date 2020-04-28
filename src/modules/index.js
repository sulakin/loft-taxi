import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects';
import auth, { sagas as authSaga } from './Auth';
import register, { sagas as registerSaga } from './Register';
import profile, { sagas as profileSaga } from './Profile';
import address, { sagas as addressSaga } from './Address';
import order, { sagas as orderSaga } from './Order';

export default combineReducers({ auth, register, profile, address, order });

export function* rootSaga() {
  yield fork(authSaga);
  yield fork(registerSaga);
  yield fork(profileSaga);
  yield fork(addressSaga);
  yield fork(orderSaga);
}
