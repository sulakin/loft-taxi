import { takeLatest, put, call, fork } from 'redux-saga/effects';
import { getAddressList } from '../../helpers/fetchRequest';
import { fetchAddressRequest, fetchAddressSuccess, fetchAddressFailure } from './actions';

function* addressWatcher() {
  yield takeLatest(fetchAddressRequest, addressFlow);
}

export function* addressFlow() {
  const payload = yield call(getAddressList);

  if (payload) {
    yield put(fetchAddressSuccess(payload));
  } else {
    yield put(fetchAddressFailure(payload.error));
  }
}

export default function* () {
  yield fork(addressWatcher);
}
