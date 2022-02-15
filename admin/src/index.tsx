import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import 'react-datepicker/dist/react-datepicker.css'
import 'react-toastify/dist/ReactToastify.min.css';
import reportWebVitals from './reportWebVitals';
import Routes from './Routes';
import { Router as Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { store, StoreContext } from './store/store';

export const history = createBrowserHistory();

ReactDOM.render(
  <StoreContext.Provider value={store}>
  <Route history={history}>
    <Routes/>
    </Route>
  </StoreContext.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
