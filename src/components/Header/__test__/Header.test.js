import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import App from '../../App';
import Header from '../Header';

const mockStore = configureMockStore();

it('Компонент верхнего меню', () => {
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
        <Header />
      </App>
    </Provider>
  );

  expect(getByText(/Карта/i)).toBeInTheDocument();
  expect(getByText(/Профиль/i)).toBeInTheDocument();
  expect(getByText(/Выйти/i)).toBeInTheDocument();
});
