import reducer from '../reducer';
import { profileSubmit } from '../actions';

const fakeAction = {
  type: 'FAKE_ACTION',
};

describe('Profile reducer', () => {
  const profileData = {
    name: 'ivanov ivan',
    date: '01/22',
    number: '1231231231231234',
    cvc: '123',
  };

  const state0 = reducer(undefined, fakeAction);

  const state1 = reducer(state0, profileSubmit(profileData));
  it(`write data to the profile`, () => {
    expect(state1).toEqual(profileData);
  });
});
