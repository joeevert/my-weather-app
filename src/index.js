import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './redux/reducers/index';
import rootSaga from './redux/sagas/index';

import './index.css';
import App from './components/App/App';

const sagaMiddleware = createSagaMiddleware();

const middlewareList = process.env.NODE_ENV === 'development' ? 
  [sagaMiddleware, logger] :
  [sagaMiddleware];

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewareList),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));