import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import App from '../../../components/App';
import LoginPage from '../LoginPage';

const mockStore = configureMockStore();
const store = mockStore({
  auth: {
    isLoggedIn: false,
  },
});

describe('Форма входа', () => {
  it('Поля ввода', () => {
    const { getByText } = render(
      <Provider store={store}>
        <App>
          <LoginPage />
        </App>
      </Provider>
    );
    expect(getByText(/Имя пользователя/i)).toBeInTheDocument();
    expect(getByText(/Пароль/i)).toBeInTheDocument();
  });

  it('Ссылка на страницу регистрации', () => {
    const { getByText } = render(
      <Provider store={store}>
        <App>
          <LoginPage />
        </App>
      </Provider>
    );
    expect(getByText(/Зарегистрируйтесь/i)).toBeInTheDocument();
  });
});
