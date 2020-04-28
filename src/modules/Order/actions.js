import { createAction } from 'redux-actions';

export const fetchOrderRequest = createAction('ORDER/FEATCH_REQUEST');
export const fetchOrderSuccess = createAction('ORDER/FEATCH_SUCCESS');
export const fetchOrderFailure = createAction('ORDER/FEATCH_FAILURE');
export const setIsOrder = createAction('ORDER/IS_ORDER');
export const removeOrder = createAction('ORDER/REMOVE');
