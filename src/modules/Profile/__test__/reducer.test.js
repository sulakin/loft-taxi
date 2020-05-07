import reducer from '../reducer';
import { setProfileRequest } from '../actions';

const fakeAction = {
  type: 'FAKE_ACTION',
};

describe('Редюсер профиля', () => {
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
  it(`запись данных в профиль`, () => {
    expect(state1).toEqual(mockData);
  });
});
