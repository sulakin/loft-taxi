import reducer from '../reducer';
import { fetchAddressRequest, fetchAddressSuccess } from '../actions';

const fakeAction = {
  type: 'FAKE_ACTION',
};

describe('Редюсер адресов', () => {
  const dataAddresss = ['Address1', 'Address2'];
  const state0 = reducer(undefined, fakeAction);
  const state1 = reducer(state0, fetchAddressRequest());

  it(`в редукторе {isLoading: true, data: [], error: ''}`, () => {
    expect(state1).toEqual({ isLoading: true, data: [], error: '' });
  });

  const state2 = reducer(state1, fetchAddressSuccess(dataAddresss));

  it(`в редукторе {isLoading: false, data: ${dataAddresss}, error: ''}`, () => {
    expect(state2).toEqual({
      isLoading: false,
      data: dataAddresss,
      error: '',
    });
  });
});
