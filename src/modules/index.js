import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects';
import auth, { sagas as authSaga } from './Auth';
import profile, { sagas as profileSaga } from './Profile';
import address, { sagas as addressSaga } from './Address';
import order, { sagas as orderSaga } from './Order';

export default combineReducers({ auth, profile, address, order });

export function* rootSaga() {
  yield fork(authSaga);
  yield fork(profileSaga);
  yield fork(addressSaga);
  yield fork(orderSaga);
}
