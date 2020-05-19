import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import LoginForm from "./Components/LoginForm";
import Dashboard from "./Components/dashboard";
import './css/index.css';
import store from './store';
import { Provider } from 'react-redux';
import ProtectedRoutes from './Components/protectedRoutes';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BrowserRouter>
  <React.Fragment>
    <Provider store={store}>
        {/* <Route  path='/' render={() => (<Redirect to='/login' />)} /> */}
        <Switch>
      <Route exact path='/login' component={LoginForm} />
      <ProtectedRoutes exact path='/dashboard' component={Dashboard} />
      {/* <Route exact path='/dashboard' component={Dashboard} /> */}
      <Route  path='/' render={() => (<Redirect to='/login' />)} />
      </Switch>
    </Provider>
  </React.Fragment>
</BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
