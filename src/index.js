import React from 'react';
//import {Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { /* HashRouter , */  BrowserRouter } from 'react-router-dom';
import './index.css';


import {Provider} from "react-redux";
import App from "./App";
import store from "./store/store";
//import {createStore} from 'redux';
//import rootReducer from './redux/reducers';

//const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </Provider>
  </React.StrictMode>
);


