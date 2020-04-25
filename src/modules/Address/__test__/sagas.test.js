import { addressFlow } from '../sagas';
import { call, put } from 'redux-saga/effects';
import { fetchAddressRequest, fetchAddressSuccess } from '../actions';
import { getAddressList } from '../../../helpers/fetchRequest';

describe('Address sagas', () => {
  const iterator = addressFlow(fetchAddressRequest());

  it('address call', () => {
    expect(iterator.next().value).toEqual(call(getAddressList));
  });

  it('fetchAddressSuccess', () => {
    const data = {
      addresses: [
        'Пулково (LED)',
        'Шаверма на Невском',
        'Инфекционная больница им. Боткина',
        'Волковское кладбище',
      ],
    };
    expect(iterator.next(data).value).toEqual(put(fetchAddressSuccess(data)));
  });
});
