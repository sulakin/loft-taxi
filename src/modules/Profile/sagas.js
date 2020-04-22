import { takeLatest, put, call, fork, select } from 'redux-saga/effects';
import { getToken } from '../Auth/selectors';
import { setProfile, getProfile } from '../../helpers/fetchRequest';
import {
  fetchProfileRequest,
  fetchProfileSuccess,
  fetchProfileFailure,
  fetchProfileGet,
} from './actions';

export function* profileSetFlow(action) {
  try {
    const token = yield select(getToken);
    const data = yield call(setProfile, { ...action.payload, token });

    if (data.success) {
      yield put(fetchProfileSuccess(data));
    } else {
      yield put(fetchProfileFailure(data));
    }
  } catch (error) {
    yield put(fetchProfileFailure(error));
  }
}

function* profileSetWatch() {
  yield takeLatest(fetchProfileRequest, profileSetFlow);
}

export function* profileGetFlow() {
  try {
    const token = yield select(getToken);
    const data = yield call(getProfile, { token });

    if (data.success) {
      yield put(fetchProfileSuccess(data));
    } else {
      yield put(fetchProfileFailure(data));
    }
  } catch (error) {
    yield put(fetchProfileFailure(error));
  }
}

function* profileGetWatch() {
  yield takeLatest(fetchProfileGet, profileGetFlow);
}

export default function* () {
  yield fork(profileSetWatch);
  yield fork(profileGetWatch);
}
