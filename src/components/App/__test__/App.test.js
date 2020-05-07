import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import App from '../../../components/App';

const mockStore = configureMockStore();
const store = mockStore({
  auth: {
    isLoggedIn: false,
  },
});

it('Приложение запущено без сбоев', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/Новый пользователь/i)).toBeInTheDocument();
});
