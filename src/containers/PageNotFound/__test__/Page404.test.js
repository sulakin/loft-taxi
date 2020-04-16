import React from 'react';
import PageNotFound from '../PageNotFound';
import { shallow } from 'enzyme';

describe('Test PageNotFound ', () => {
  it('render component', () => {
    const wrapper = shallow(<PageNotFound />);
    expect(wrapper).toBeTruthy();
  });
});
