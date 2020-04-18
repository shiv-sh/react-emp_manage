import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import LoginForm from "./Components/LoginForm";
import Dashboard from "./Components/dashboard";
import './css/index.css';
import store from './store';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BrowserRouter>
    <React.Fragment>
    <Provider store = {store}>
      <Route path='/' component={LoginForm} exact />
      <Route path='/dashboard' component={Dashboard} exact />
      </Provider>
    </React.Fragment>
  </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
