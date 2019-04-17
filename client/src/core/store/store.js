import { createStore, compose } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './root-reducer';

const persistConfig = {
    key: 'root',
    storage,
},
    reducer = persistReducer(persistConfig, rootReducer),
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(reducer, composeEnhancers()),
        persistor = persistStore(store);
    return { store, persistor };
}