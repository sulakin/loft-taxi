import React from 'react';
import { LoginPage } from '../LoginPage';
import { mount } from 'enzyme';

describe('Test LoginPage ', () => {
  let wrapper = null;

  beforeAll(() => {
    wrapper = mount(<LoginPage />);
  });

  afterAll(() => {
    wrapper.unmount();
  });

  it('render LoginPage', () => {
    expect(wrapper).toBeTruthy();
  });

  it('render header', () => {
    expect(wrapper.findWhere((el) => el.type() === 'h1' && el.contains('Войти'))).toHaveLength(1);
  });

  it('render signup link', () => {
    expect(
      wrapper.findWhere((el) => el.type() === 'a' && el.contains('Зарегистрируйтесь'))
    ).toHaveLength(1);
  });

  it('render login button', () => {
    expect(wrapper.findWhere((el) => el.type() === 'button' && el.contains('Войти'))).toHaveLength(
      1
    );
  });
});
