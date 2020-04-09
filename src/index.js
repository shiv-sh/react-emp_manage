import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import LoginForm from "./Components/LoginForm";
import Dashboard from "./Components/dashboard";
import './css/index.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BrowserRouter>
    <React.Fragment>
      <Route path='/' component={LoginForm} exact />
      <Route path='/dashboard' component={Dashboard} exact />
    </React.Fragment>
  </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
