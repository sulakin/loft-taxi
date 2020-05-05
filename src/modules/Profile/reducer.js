import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  setProfileRequest,
  setProfileSuccess,
  setProfileFailure,
  getProfileRequest,
  getProfileSuccess,
  getProfileFailure,
  profileError,
} from './actions';

const blank = { cardNumber: '', expiryDate: '', cardName: '', cvc: '' };

const profileData = handleActions(
  {
    [setProfileRequest]: () => blank,
    [setProfileSuccess]: () => (_state, action) => action.payload,
    [setProfileFailure]: () => blank,
    [getProfileRequest]: () => blank,
    [getProfileSuccess]: () => (_state, action) => action.payload,
    [getProfileFailure]: () => blank,
  },
  blank
);

const isLoading = handleActions(
  {
    [setProfileRequest]: () => true,
    [setProfileSuccess]: () => false,
    [setProfileFailure]: () => false,
    [getProfileRequest]: () => true,
    [getProfileSuccess]: () => false,
    [getProfileFailure]: () => false,
  },
  false
);

const errors = handleActions(
  {
    [setProfileRequest]: () => null,
    [setProfileSuccess]: () => null,
    [setProfileFailure]: (_state, action) => action.payload.error,
    [getProfileRequest]: () => null,
    [getProfileSuccess]: () => null,
    [getProfileFailure]: (_state, action) => action.payload.error,
    [profileError]: (_state, action) => action.payload,
  },
  null
);

export default combineReducers({ profileData, isLoading, errors });
