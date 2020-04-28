import { orderFlow } from '../sagas';
import { call, put } from 'redux-saga/effects';
import { fetchOrderRequest, fetchOrderSuccess } from '../actions';
import { getRoute } from '../../../helpers/fetchRequest';

describe('Order sagas', () => {
  describe('get coords', () => {
    const start = 'Шаверма на Невском';
    const end = 'Волковское кладбище';

    const iterator = orderFlow(fetchOrderRequest({ start, end }));
    it('get order', () => {
      expect(iterator.next().value).toEqual(call(getRoute, start, end));
    });

    it('fetchOrderSuccess', () => {
      const data = [
        [30.348308, 59.932573],
        [30.360827, 59.930967],
        [30.345396, 59.907662],
        [30.354083, 59.905525],
        [30.358859, 59.905847],
        [30.355892, 59.902484],
      ];
      expect(iterator.next(data).value).toEqual(put(fetchOrderSuccess(data)));
    });
  });
});
