import { createAction } from 'redux-actions';

const fetchProfileGet = createAction('PROFILE/GET');
const fetchProfileRequest = createAction('PROFILE/FEATCH_REQUEST');
const fetchProfileSuccess = createAction('PROFILE/FEATCH_SUCCESS');
const fetchProfileFailure = createAction('PROFILE/FEATCH_FAILURE');

export { fetchProfileGet, fetchProfileRequest, fetchProfileSuccess, fetchProfileFailure };
