import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.min.css';
import {  Router as Route } from 'react-router-dom';
import Router from './Router';
import { createBrowserHistory } from 'history'
import { store, StoreContext } from './stores/store';

export const history = createBrowserHistory();



ReactDOM.render(
  
  <StoreContext.Provider value={store}>
    
    <Route history={history}>
        <Router/>
     </Route>
     </StoreContext.Provider>,
  document.getElementById('root')
);


