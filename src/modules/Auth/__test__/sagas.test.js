import { authFlow } from '../sagas';
import { call, put } from 'redux-saga/effects';
import { fetchAuthRequest, fetchAuthSuccess, fetchAuthFailure } from '../actions';
import { auth } from '../../../helpers/fetchRequest';

describe('Сага аутентификации', () => {
  describe('Сценарий успешной авторизация', () => {
    const mockUser = {
      email: 'sulakin.vadim@gmail.com',
      password: 'qaz123',
    };

    const iterator = authFlow(fetchAuthRequest(mockUser));
    it('отправляем данные пользователя', () => {
      expect(iterator.next(mockUser).value).toEqual(call(auth, mockUser));
    });

    it('получаем токен', () => {
      const data = { success: true, token: 'token' };
      expect(iterator.next(data).value).toEqual(put(fetchAuthSuccess(data)));
    });
  });

  describe('Сценарий ошибки авторизации', () => {
    const mockUser = {
      email: 'sulakin.vadim@gmail.com',
      password: 'qaz321',
    };

    const iterator = authFlow(fetchAuthRequest(mockUser));
    it('отправляем данные пользователя', () => {
      expect(iterator.next(mockUser).value).toEqual(call(auth, mockUser));
    });

    it('получаем ошибку', () => {
      const data = { success: false, error: 'Ошибка авторизации' };

      expect(iterator.next(data).value).toEqual(put(fetchAuthFailure(data)));
    });
  });
});
