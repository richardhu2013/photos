import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import Photos from './components/Photo';

require('bulma/css/bulma.css');

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Photos />
  </Provider>,
  document.getElementById('app')
);
