import { createAction } from 'redux-actions';

const fetchRegisterRequest = createAction('REGISTER/FEATCH_REQUEST');
const fetchRegisterSuccess = createAction('REGISTER/FEATCH_SUCCESS');
const fetchRegisterFailure = createAction('REGISTER/FEATCH_FAILURE');
const registerError = createAction('REGISTER/ERROR');
const logout = createAction('REGISTER/LOGOUT');

export { fetchRegisterRequest, fetchRegisterSuccess, fetchRegisterFailure, registerError, logout };
