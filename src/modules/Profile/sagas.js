import { takeLatest, put, call, fork, select } from 'redux-saga/effects';
import { getToken } from '../Auth/selectors';
import { setProfile, getProfile } from '../../helpers/fetchRequest';
import {
  setProfileRequest,
  setProfileSuccess,
  setProfileFailure,
  getProfileRequest,
  getProfileSuccess,
  getProfileFailure,
} from './actions';

export function* setProfileFlow(action) {
  try {
    const token = yield select(getToken);
    const data = yield call(setProfile, { ...action.payload, token });

    if (data.success) {
      yield put(setProfileSuccess(action.payload));
    } else {
      yield put(setProfileFailure(data));
    }
  } catch (error) {
    yield put(setProfileFailure(error));
  }
}

function* setProfileWatch() {
  yield takeLatest(setProfileRequest, setProfileFlow);
}

export function* getProfileFlow() {
  try {
    const token = yield select(getToken);
    const data = yield call(getProfile, { token });

    if (!!data.id) {
      yield put(getProfileSuccess(data));
    } else {
      yield put(getProfileFailure(data));
    }
  } catch (error) {
    yield put(getProfileFailure(error));
  }
}

function* getProfileWatch() {
  yield takeLatest(getProfileRequest, getProfileFlow);
}

export default function* () {
  yield fork(setProfileWatch);
  yield fork(getProfileWatch);
}
