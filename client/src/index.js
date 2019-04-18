import React from 'react';
import '@babel/polyfill';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import App from './features/app';
import Loader from './shared/loader';
import createStore from './core/store/store';

const { persistor, store } = createStore();
ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      {(bootstrapped) => {
        if (bootstrapped) {
            return  <BrowserRouter><App /></BrowserRouter>;
        }
        return <Loader />;
      }}
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
