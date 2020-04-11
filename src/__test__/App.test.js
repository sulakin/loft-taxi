import React from 'react';
import App from '../App';
import { mount } from 'enzyme';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
  Map: () => ({}),
}));

describe('Test App ', () => {
  let wrapper = null;

  beforeAll(() => {
    wrapper = mount(<App />);
  });

  afterAll(() => {
    wrapper.unmount();
  });

  it('render App', () => {
    expect(wrapper).toBeTruthy();
  });
});
