import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  fetchRegisterRequest,
  fetchRegisterSuccess,
  fetchRegisterFailure,
  registerError,
} from './actions';

const isLoggedIn = handleActions(
  {
    [fetchRegisterRequest]: () => false,
    [fetchRegisterSuccess]: () => true,
    [fetchRegisterFailure]: () => false,
  },
  false
);

const isLoading = handleActions(
  {
    [fetchRegisterRequest]: () => true,
    [fetchRegisterSuccess]: () => false,
    [fetchRegisterFailure]: () => false,
  },
  false
);

const token = handleActions(
  {
    [fetchRegisterRequest]: () => null,
    [fetchRegisterSuccess]: (_state, action) => action.payload.token,
    [fetchRegisterFailure]: () => null,
  },
  null
);

const errors = handleActions(
  {
    [fetchRegisterRequest]: () => null,
    [fetchRegisterSuccess]: () => null,
    [fetchRegisterFailure]: (_state, action) => action.payload.error,
    [registerError]: (_state, action) => action.payload,
  },
  null
);

export default combineReducers({ isLoggedIn, isLoading, token, errors });
