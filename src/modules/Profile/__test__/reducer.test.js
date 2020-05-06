import reducer from '../reducer';
import { setProfileRequest } from '../actions';

const fakeAction = {
  type: 'FAKE_ACTION',
};

describe('Profile reducer', () => {
  const mockData = {
    errors: null,
    isLoading: true,
    profileData: {
      cardNumber: '',
      expiryDate: '',
      cardName: '',
      cvc: '',
    },
  };

  const state0 = reducer(undefined, fakeAction);

  const state1 = reducer(state0, setProfileRequest(mockData));
  it(`write data to the profile`, () => {
    expect(state1).toEqual(mockData);
  });
});
