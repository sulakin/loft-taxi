import reducer from '../reducer';
import { fetchOrderRequest, fetchOrderSuccess } from '../actions';

const fakeAction = {
  type: 'FAKE_ACTION',
};

describe('Order reducer', () => {
  const cord = [[1, 2]];
  const state0 = reducer(undefined, fakeAction);
  const state1 = reducer(state0, fetchOrderRequest());

  it(`set reducer order {isLoading: true, cord: [], error: ''}`, () => {
    expect(state1).toEqual({ isLoading: true, cord: [], error: '' });
  });

  const state2 = reducer(state1, fetchOrderSuccess(cord));

  it(`set reducer order {isLoading: false, cord: ${cord}, error: ''}`, () => {
    expect(state2).toEqual({
      isLoading: false,
      cord: cord,
      error: '',
    });
  });
});
