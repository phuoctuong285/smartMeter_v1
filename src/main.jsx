import 'react-hot-loader/patch';
import {AppContainer} from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import appReducer from './reducers/appReducer.js';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
// Onsen UI Styling and Icons
require('onsenui/css-components-src/src/onsen-css-components.css');
require('onsenui/css/onsenui.css');

import App from './App';

let store = createStore(appReducer,applyMiddleware(thunk,logger))

const rootElement = document.getElementById('app');
ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  rootElement
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <NextApp />
        </Provider> 
      </AppContainer>,
      rootElement
    );
  });
}
