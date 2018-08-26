import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'todomvc-app-css/index.css';
import App from './containers/App';
import reducer from './reducers';

const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

