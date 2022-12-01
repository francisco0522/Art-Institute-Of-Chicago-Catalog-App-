import React from 'react';
import Catalog from './src/pages/Catalog';
import {catalogsReducer} from './src/reducers/catalog';

import {Provider} from 'react-redux';
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from 'redux';
import {logger} from './src/middlewares';

const composedEnhancer = compose(applyMiddleware(logger));

const store = createStore(catalogsReducer, composedEnhancer);

export default function App() {
  return (
    <Provider store={store}>
      <Catalog />
    </Provider>
  );
}
