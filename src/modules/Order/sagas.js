import { takeLatest, put, call, fork } from 'redux-saga/effects';
import { getRoute } from '../../helpers/fetchRequest';
import { fetchOrderRequest, fetchOrderSuccess, fetchOrderFailure, setIsOrder } from './actions';

function* orderWatcher() {
  yield takeLatest(fetchOrderRequest, orderFlow);
}

export function* orderFlow(action) {
  const { start, end } = action.payload;
  const payload = yield call(getRoute, start, end);

  if (payload) {
    yield setIsOrder(true);
    yield put(fetchOrderSuccess(payload));
  } else {
    yield put(fetchOrderFailure());
  }
}

export default function* () {
  yield fork(orderWatcher);
}
