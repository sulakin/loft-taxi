import { takeLatest, put, call, fork } from 'redux-saga/effects';
import { auth } from '../../helpers/fetchRequest';
import { fetchAuthRequest, fetchAuthSuccess, fetchAuthFailure } from './actions';

export function* authFlow(action) {
  try {
    const data = yield call(auth, action.payload);

    if (data.success) {
      yield put(fetchAuthSuccess(data));
    } else {
      yield put(fetchAuthFailure(data));
    }
  } catch (error) {
    yield put(fetchAuthFailure(error));
  }
}

function* authWatch() {
  yield takeLatest(fetchAuthRequest, authFlow);
}

export default function* () {
  yield fork(authWatch);
}
