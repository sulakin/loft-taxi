import React from 'react';
import { Page404 } from '../Page404';
import { shallow } from 'enzyme';

describe('Test Page404 ', () => {
  it('render component', () => {
    const wrapper = shallow(<Page404 />);
    expect(wrapper).toBeTruthy();
  });
});
