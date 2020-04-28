import { handleActions } from 'redux-actions';
import { fetchProfileRequest, fetchProfileGet } from './actions';

export default handleActions(
  {
    [fetchProfileRequest]: (_state, action) => action.payload,
    [fetchProfileGet]: (_state, action) => action.payload,
  },
  { cardNumber: '', expiryDate: '', cardName: '', cvc: '' }
);
