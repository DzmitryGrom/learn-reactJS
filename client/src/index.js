import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import App from './features/app';

function filmList(state = {}) {
    return state;
}

const store = createStore(filmList);

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter><App /></BrowserRouter>
    </Provider>,
document.getElementById('root'),
);