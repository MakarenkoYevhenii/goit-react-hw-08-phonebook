import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import store from "./redux/store"
import { Provider } from 'react-redux';
import MyRoutes from './Routes';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
  
  <React.StrictMode>
   <BrowserRouter>
    <Provider store={store}>
    <MyRoutes></MyRoutes>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

