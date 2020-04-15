import { fetchAuthRequest, fetchAuthSuccess, fetchAuthFailure } from './actions';

export const authMiddleware = (store) => (next) => (action) => {
  if (action.type === fetchAuthRequest.toString()) {
    fetch('https://loft-taxi.glitch.me/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.payload),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          store.dispatch(fetchAuthSuccess(data));
        } else {
          store.dispatch(fetchAuthFailure(data));
        }
      })
      .catch((error) => {
        console.log(error);
        store.dispatch(fetchAuthFailure(error));
      });
  }

  return next(action);
};
