// Import all dependancies
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
import App from './containers/App.jsx';

const store = configureStore();

// Render the component to index div
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'));
