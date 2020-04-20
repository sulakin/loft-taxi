import { createAction } from 'redux-actions';

const fetchAuthRequest = createAction('AUTH/FEATCH_REQUEST');
const fetchAuthSuccess = createAction('AUTH/FEATCH_SUCCESS');
const fetchAuthFailure = createAction('AUTH/FEATCH_FAILURE');
const authError = createAction('AUTH/ERROR');
const logout = createAction('AUTH/LOGOUT');

export { fetchAuthRequest, fetchAuthSuccess, fetchAuthFailure, authError, logout };
