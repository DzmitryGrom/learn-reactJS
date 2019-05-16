import React from 'react';
import '@babel/polyfill';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './features/app';
import configureStore from './core/store/store';

const store = configureStore(window.PRELOADED_STATE);

const root = (
  <App
    Router={BrowserRouter}
    store={store}
  />
);

hydrate(root, document.getElementById('root'));
