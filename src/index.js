import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './assets/index.css';
import Routes from './App';
import { Provider } from 'react-redux';
import store from './store';
// import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
// registerServiceWorker();
