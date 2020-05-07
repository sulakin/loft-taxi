import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import App from '../../../components/App';
import ProfilePage from '../ProfilePage';

const mockStore = configureMockStore();

describe('Страница профиля', () => {
  it('Данные профиля заполнены', () => {
    const store = mockStore({
      auth: {
        isLoggedIn: true,
      },
      profile: {
        profileData: {
          cardNumber: '4567 1234 4567 9874',
          expiryDate: '12/22',
          cardName: 'ivanov ivan',
          cvc: '123',
        },
      },
      address: {
        data: [],
      },
      order: {
        cord: [],
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <App>
          <ProfilePage />
        </App>
      </Provider>
    );

    expect(getByText(/Вызвать такси/i)).toBeInTheDocument();
  });

  it('Данные профиля не заполнены', () => {
    const store = mockStore({
      auth: {
        isLoggedIn: true,
      },
      profile: {
        profileData: {
          cardNumber: '',
          expiryDate: '',
          cardName: '',
          cvc: '',
        },
      },
      address: {
        data: [],
      },
      order: {
        cord: [],
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <App>
          <ProfilePage />
        </App>
      </Provider>
    );

    expect(getByText(/Заполните платежные данные/i)).toBeInTheDocument();
  });
});
