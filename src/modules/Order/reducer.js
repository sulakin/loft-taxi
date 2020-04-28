import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  fetchOrderRequest,
  fetchOrderSuccess,
  fetchOrderFailure,
  setIsOrder,
  removeOrder,
} from './actions';

const cord = handleActions(
  {
    [fetchOrderRequest]: () => [],
    [fetchOrderSuccess]: (_state, action) => action.payload,
    [fetchOrderFailure]: () => [],
    [removeOrder]: () => [],
  },
  []
);

const isOrder = handleActions(
  {
    [setIsOrder]: (_state, action) => action.payload,
    [removeOrder]: () => false,
  },
  false
);

const isLoading = handleActions(
  {
    [fetchOrderRequest]: () => true,
    [fetchOrderSuccess]: () => false,
    [fetchOrderFailure]: () => false,
  },
  false
);

const error = handleActions(
  {
    [fetchOrderRequest]: () => '',
    [fetchOrderFailure]: (_state, action) => action.payload,
  },
  ''
);

export default combineReducers({ cord, isOrder, isLoading, error });
