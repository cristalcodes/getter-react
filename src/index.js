import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './store/index.js';
import { Provider } from 'react-redux';
import { applyMiddleware } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';



ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
  , document.getElementById('root')
);
