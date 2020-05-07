import { registerFlow } from '../sagas';
import { call, put } from 'redux-saga/effects';
import { fetchRegisterRequest, fetchRegisterSuccess, fetchRegisterFailure } from '../actions';
import { register } from '../../../helpers/fetchRequest';

const randomString = () => {
  let rnd = '';
  while (rnd.length < 5) rnd += Math.random().toString(36).substring(2);
  return rnd.substring(0, 5);
};

describe('Сага регистрации', () => {
  describe('Сценарий успешной регистрации', () => {
    const mockUser = {
      email: `sulakin${randomString()}.vadim@gmail.com`,
      password: 'qaz123',
    };

    const iterator = registerFlow(fetchRegisterRequest(mockUser));
    it('отправляем данные пользователя', () => {
      expect(iterator.next(mockUser).value).toEqual(call(register, mockUser));
    });

    it('получаем токен', () => {
      const data = { success: true, token: 'token' };
      expect(iterator.next(data).value).toEqual(put(fetchRegisterSuccess(data)));
    });
  });

  describe('Сценарий ошибки при регистрации', () => {
    const mockUser = {
      email: 'sulakin.vadim@gmail.com',
      password: 'qaz321',
    };

    const iterator = registerFlow(fetchRegisterRequest(mockUser));
    it('отправляем данные пользователя', () => {
      expect(iterator.next(mockUser).value).toEqual(call(register, mockUser));
    });

    it('получаем ошибку', () => {
      const data = { success: false, error: 'Ошибка авторизации, пользователь существует' };

      expect(iterator.next(data).value).toEqual(put(fetchRegisterFailure(data)));
    });
  });
});
