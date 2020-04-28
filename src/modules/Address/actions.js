import { createAction } from 'redux-actions';

export const fetchAddressRequest = createAction('ADDRESS/FEATCH_REQUEST');
export const fetchAddressSuccess = createAction('ADDRESS/FEATCH_SUCCESS');
export const fetchAddressFailure = createAction('ADDRESS/FEATCH_FAILURE');
