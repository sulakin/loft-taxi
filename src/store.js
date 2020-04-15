import { createStore, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './modules';
import { authMiddleware } from './modules/Auth/middlewares';
import { getLocalState, setLocalState } from './helpers/localState';

const localState = getLocalState();

const createAppStore = () => {
  console.log(localState);
  const store = createStore(
    rootReducer,
    localState,
    compose(
      applyMiddleware(authMiddleware, logger),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (noop) => noop
    )
  );

  store.subscribe(() => {
    setLocalState({
      auth: store.getState().auth,
      profile: store.getState().profile,
    });
  });

  return store;
};

export default createAppStore;
