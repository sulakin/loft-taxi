import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import App from '../../App';

const mockStore = configureMockStore();

test('rendering map page/has profile data', () => {
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
  const history = createMemoryHistory();
  const { getByText } = render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );

  expect(getByText(/Профиль/i)).toBeInTheDocument();

  fireEvent.click(getByText(/Профиль/i));

  expect(getByText(/Способ оплаты/i)).toBeInTheDocument();
});
