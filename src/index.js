import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Router } from 'react-router-dom';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import { Provider } from 'react-redux';
import Thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import dataReducer from './store/reducer/load';
import userReducer from './store/reducer/user';
import history from './config/history';

TimeAgo.addDefaultLocale(en)


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  data: dataReducer,
  user: userReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(Thunk)));

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
  ,
  document.getElementById('root')
);



