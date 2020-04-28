import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { fetchAddressRequest, fetchAddressSuccess, fetchAddressFailure } from './actions';

const data = handleActions(
  {
    [fetchAddressRequest]: () => {},
    [fetchAddressSuccess]: (_state, action) => action.payload,
    [fetchAddressFailure]: () => {},
  },
  []
);

const isLoading = handleActions(
  {
    [fetchAddressRequest]: () => true,
    [fetchAddressSuccess]: () => false,
    [fetchAddressFailure]: () => false,
  },
  false
);

const error = handleActions(
  {
    [fetchAddressRequest]: () => '',
    [fetchAddressFailure]: (_state, action) => action.payload,
  },
  ''
);

export default combineReducers({ data, isLoading, error });
