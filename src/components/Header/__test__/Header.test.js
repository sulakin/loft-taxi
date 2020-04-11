import React from 'react';
import { Header } from '../Header';
import { shallow } from 'enzyme';

describe('Test Header ', () => {
  it('render component', () => {
    const fakeHandleRoute = jest.fn();
    const wrapper = shallow(<Header props={fakeHandleRoute} />);
    expect(wrapper).toBeTruthy();
  });
});
