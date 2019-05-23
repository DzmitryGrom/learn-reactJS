import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import rootReducer from './root-reducer';
import { filmsSaga } from '../../features/common/utils';

const sagaMiddleware = createSagaMiddleware();
const win = (typeof self === 'object' && self.self === self && self) || (typeof global === 'object' && global.global === global && global) || this;
const composeEnhancers = win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (initialState) => {
  const store = createStore(
    rootReducer, initialState, compose(applyMiddleware(sagaMiddleware), composeEnhancers()),
  );

  sagaMiddleware.run(filmsSaga);
  store.runSaga = () => sagaMiddleware.run(filmsSaga);
  store.close = () => store.dispatch(END);
  return store;
};
