import reducer from '../reducer';
import { fetchProfileRequest } from '../actions';

const fakeAction = {
  type: 'FAKE_ACTION',
};

describe('Profile reducer', () => {
  const mockData = {
    cardNumber: 'ivanov ivan',
    expiryDate: '01/22',
    cardName: '1231231231231234',
    cvc: '123',
  };

  const state0 = reducer(undefined, fakeAction);

  const state1 = reducer(state0, fetchProfileRequest(mockData));
  it(`write data to the profile`, () => {
    expect(state1).toEqual(mockData);
  });
});
