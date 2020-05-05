import { createAction } from 'redux-actions';

const setProfileRequest = createAction('PROFILE/SET_REQUEST');
const setProfileSuccess = createAction('PROFILE/SET_SUCCESS');
const setProfileFailure = createAction('PROFILE/SET_FAILURE');
const getProfileRequest = createAction('PROFILE/GET_REQUEST');
const getProfileSuccess = createAction('PROFILE/GET_SUCCESS');
const getProfileFailure = createAction('PROFILE/GET_FAILURE');
const profileError = createAction('PROFILE/ERROR');

export {
  setProfileRequest,
  setProfileSuccess,
  setProfileFailure,
  getProfileRequest,
  getProfileSuccess,
  getProfileFailure,
  profileError,
};
