import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer, { rootSaga } from './modules';
import { getLocalState, setLocalState } from './helpers/localState';

const localState = getLocalState();

const createAppStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    localState,
    compose(
      applyMiddleware(sagaMiddleware, logger),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (noop) => noop
    )
  );

  sagaMiddleware.run(rootSaga);

  store.subscribe(() => {
    setLocalState({
      auth: store.getState().auth,
      profile: store.getState().profile,
    });
  });

  return store;
};

export default createAppStore;
