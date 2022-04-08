import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import {persistor,store} from "./redux/store"
import { Provider } from 'react-redux';
import MyRoutes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  
  <React.StrictMode>
   <BrowserRouter>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <MyRoutes></MyRoutes>
    </PersistGate>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

