import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from '../../App';
import Header from '../Header';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
  Map: () => ({}),
}));

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it('renders without crashing', () => {
  const store = mockStore({});
  shallow(
    <Provider store={store}>
      <App>
        <Header />
      </App>
    </Provider>
  );
});
