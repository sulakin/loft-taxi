import reducer from '../reducer';
import { fetchRegisterRequest, fetchRegisterSuccess, fetchRegisterFailure } from '../actions';

const fakeAction = {
  type: 'FAKE_ACTION',
};

describe('Редьюсер регистрации', () => {
  const state0 = reducer(undefined, fakeAction);

  it('отправляем запрос', () => {
    const state1 = reducer(state0, fetchRegisterRequest());

    expect(state1).toEqual({
      isLoading: true,
      isLoggedIn: false,
      token: null,
      errors: null,
    });
  });

  it('успешная регистрация', () => {
    const payload = { token: 'token' };
    const state2 = reducer(state0, fetchRegisterSuccess(payload));

    expect(state2).toEqual({
      isLoading: false,
      isLoggedIn: true,
      token: payload.token,
      errors: null,
    });
  });

  it('ошибка регистрации', () => {
    const payload = { error: 'error' };
    const state3 = reducer(state0, fetchRegisterFailure(payload));

    expect(state3).toEqual({
      isLoading: false,
      isLoggedIn: false,
      token: null,
      errors: payload.error,
    });
  });
});
