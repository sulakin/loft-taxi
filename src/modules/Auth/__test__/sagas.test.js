import { authFlow } from '../sagas';
import { call, put } from 'redux-saga/effects';
import { fetchAuthRequest, fetchAuthSuccess, fetchAuthFailure } from '../actions';
import { auth } from '../../../helpers/fetchRequest';

describe('Auth sagas', () => {
  describe('success auth', () => {
    const mockUser = {
      email: 'sulakin.vadim@gmail.com',
      password: 'qaz123',
    };

    const iterator = authFlow(fetchAuthRequest(mockUser));
    it('send request call', () => {
      expect(iterator.next(mockUser).value).toEqual(call(auth, mockUser));
    });

    it('fetchAuthSuccess)', () => {
      const data = { success: true, token: 'token' };
      expect(iterator.next(data).value).toEqual(put(fetchAuthSuccess(data)));
    });
  });

  describe('error auth', () => {
    const mockUser = {
      email: 'sulakin.vadim@gmail.com',
      password: 'qaz321',
    };

    const iterator = authFlow(fetchAuthRequest(mockUser));
    it('send request call', () => {
      expect(iterator.next(mockUser).value).toEqual(call(auth, mockUser));
    });

    it('fetchAuthFailure)', () => {
      const data = { success: false, error: 'Ошибка авторизации' };

      expect(iterator.next(data).value).toEqual(put(fetchAuthFailure(data)));
    });
  });
});
