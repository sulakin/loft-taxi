import { registerFlow } from '../sagas';
import { call, put } from 'redux-saga/effects';
import { fetchRegisterRequest, fetchRegisterSuccess, fetchRegisterFailure } from '../actions';
import { register } from '../../../helpers/fetchRequest';

const randomString = () => {
  let rnd = '';
  while (rnd.length < 5) rnd += Math.random().toString(36).substring(2);
  return rnd.substring(0, 5);
};

describe('Register sagas', () => {
  describe('success Register', () => {
    const mockUser = {
      email: `sulakin${randomString()}.vadim@gmail.com`,
      password: 'qaz123',
    };

    const iterator = registerFlow(fetchRegisterRequest(mockUser));
    it('send request call', () => {
      expect(iterator.next(mockUser).value).toEqual(call(register, mockUser));
    });

    it('fetchRegisterSuccess)', () => {
      const data = { success: true, token: 'token' };
      expect(iterator.next(data).value).toEqual(put(fetchRegisterSuccess(data)));
    });
  });

  describe('error Register', () => {
    const mockUser = {
      email: 'sulakin.vadim@gmail.com',
      password: 'qaz321',
    };

    const iterator = registerFlow(fetchRegisterRequest(mockUser));
    it('send request call', () => {
      expect(iterator.next(mockUser).value).toEqual(call(register, mockUser));
    });

    it('fetchRegisterFailure)', () => {
      const data = { success: false, error: 'Ошибка авторизации, пользователь существует' };

      expect(iterator.next(data).value).toEqual(put(fetchRegisterFailure(data)));
    });
  });
});
