import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { allReducer } from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import usersReducer from './reducers/usersReducer';
const store = createStore(
  usersReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
