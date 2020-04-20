import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { fetchAuthRequest, fetchAuthSuccess, fetchAuthFailure, authError, logout } from './actions';

const isLoggedIn = handleActions(
  {
    [fetchAuthRequest]: () => false,
    [fetchAuthSuccess]: () => true,
    [fetchAuthFailure]: () => false,
    [logout]: () => false,
  },
  false
);

const isLoading = handleActions(
  {
    [fetchAuthRequest]: () => true,
    [fetchAuthSuccess]: () => false,
    [fetchAuthFailure]: () => false,
    [logout]: () => false,
  },
  false
);

const token = handleActions(
  {
    [fetchAuthRequest]: () => null,
    [fetchAuthSuccess]: (_state, action) => action.payload.token,
    [fetchAuthFailure]: () => null,
    [logout]: () => null,
  },
  null
);

const errors = handleActions(
  {
    [fetchAuthRequest]: () => null,
    [fetchAuthSuccess]: () => null,
    [fetchAuthFailure]: (_state, action) => action.payload.error,
    [authError]: (_state, action) => action.payload,
    [logout]: () => null,
  },
  null
);

export default combineReducers({ isLoggedIn, isLoading, token, errors });
