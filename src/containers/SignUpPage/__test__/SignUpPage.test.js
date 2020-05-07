import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import App from '../../../components/App';

const mockStore = configureMockStore();
const store = mockStore({
  auth: {
    isLoggedIn: false,
  },
  register: {
    isLoggedIn: false,
  },
});

describe('Форма регистрации', () => {
  it('Поля ввода', () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    fireEvent.click(getByText(/Зарегистрируйтесь/i));
    expect(getByText(/Адрес электронной почты/i)).toBeInTheDocument();
    expect(getByText(/Имя/i)).toBeInTheDocument();
    expect(getByText(/Фамилия/i)).toBeInTheDocument();
    expect(getByText(/Пароль/i)).toBeInTheDocument();
    expect(getByText(/Пароль/i)).toBeInTheDocument();
  });

  it('Кнопка Зарегистрироваться', () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(getByText(/Зарегистрироваться/i)).toBeInTheDocument();
  });

  it('Ссылка на страницу входа', () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(getByText(/Уже зарегистрированы/i)).toBeInTheDocument();
  });
});
