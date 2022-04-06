import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//Store

import {createStore} from 'redux';
import myRedux from './reducers/index';
import {Provider} from 'react-dom'

let store=createStore(myRedux)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);


