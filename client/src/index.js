import React from 'react';
import "@babel/polyfill";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import App from './features/app';
import Loader from './features/loader';

import createStore from './core/store/store';

const { persistor, store } = createStore();
ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      {(bootstrapped) => {
        if (bootstrapped) {
          return <App />;
        }
        return <Loader />;
      }}
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);