import { takeLatest, put, call, fork } from 'redux-saga/effects';
import { register } from '../../helpers/fetchRequest';
import { fetchRegisterRequest, fetchRegisterSuccess, fetchRegisterFailure } from './actions';
import { fetchAuthSuccess } from '../Auth/actions';

export function* registerFlow(action) {
  try {
    const data = yield call(register, action.payload);

    if (data.success) {
      yield put(fetchRegisterSuccess(data));
      yield put(fetchAuthSuccess(data));
    } else {
      yield put(fetchRegisterFailure(data));
    }
  } catch (error) {
    yield put(fetchRegisterFailure(error));
  }
}

function* registerWatch() {
  yield takeLatest(fetchRegisterRequest, registerFlow);
}

export default function* () {
  yield fork(registerWatch);
}
