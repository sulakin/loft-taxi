import React from 'react';
import SignUpPage from '../SignUpPage';
import { shallow } from 'enzyme';

describe('Test SignUpPage ', () => {
  it('render component', () => {
    const wrapper = shallow(<SignUpPage />);
    expect(wrapper).toBeTruthy();
  });
});
