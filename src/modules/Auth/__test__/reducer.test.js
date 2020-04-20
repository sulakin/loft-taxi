import reducer from '../reducer';
import { fetchAuthRequest, fetchAuthSuccess, fetchAuthFailure, logout } from '../actions';

const fakeAction = {
  type: 'FAKE_ACTION',
};

describe('Auth reducer', () => {
  const state0 = reducer(undefined, fakeAction);

  it('send request', () => {
    const state1 = reducer(state0, fetchAuthRequest());

    expect(state1).toEqual({
      isLoggedIn: false,
      isLoading: true,
      token: null,
      errors: null,
    });
  });

  it('auth user', () => {
    const payload = { token: 'token' };
    const state2 = reducer(state0, fetchAuthSuccess(payload));

    expect(state2).toEqual({
      isLoggedIn: true,
      isLoading: false,
      token: payload.token,
      errors: null,
    });
  });

  it('auth fail', () => {
    const payload = { error: 'error' };
    const state3 = reducer(state0, fetchAuthFailure(payload));

    expect(state3).toEqual({
      isLoggedIn: false,
      isLoading: false,
      token: null,
      errors: payload.error,
    });
  });

  it('logout', () => {
    const state4 = reducer(state0, logout());

    expect(state4).toEqual({
      isLoggedIn: false,
      isLoading: false,
      token: null,
      errors: null,
    });
  });
});
