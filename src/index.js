import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './store/index.js';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';





ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
  , document.getElementById('root')
);
