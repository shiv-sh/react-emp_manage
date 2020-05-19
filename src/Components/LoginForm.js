import React from 'react';
import Login from './Login';
import Dashboard from './dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css'
// import AppNavigator from "../AppNavigator";
// import { createAppContainer } from "react-navigation";
import { withNavigation } from "react-navigation";
import { users } from '../emp-details/authenticate_users';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import authStatus from '../auth';


import { login, getInitialEmployees } from '../actions/loginActions'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.authenticateUser = this.authenticateUser.bind(this);
    this.state = { username: "", password: "", isError:false, showSignInmsg:'' };
    this.userDet={};
    console.log("from protected routes",props)
    if(props.location.state && props.location.state.from.pathname === "/dashboard") {
      this.state.showSignInmsg = 'You need to login!!';
    }
  }
  // AppNavigator = createAppContainer(AppNavigator);
  componentDidMount() {
    document.body.className = 'backgroundStyling'
    // sessionStorage.setItem('isAuthenticated',false)
  }
  hideError() {
    this.setState({isError:false})
  }

  authenticateUser(userDetails) {
    let user = users.filter(user => {
      return user.loginCred.userName===userDetails.username && user.loginCred.password===userDetails.password
    })
   if( user.length>0) {
    authStatus.setStatus(true);
    this.setState({ username: userDetails.username, password: userDetails.password })
    sessionStorage.setItem('loggedInUser', JSON.stringify(user[0]));
    sessionStorage.setItem('isAuthenticated',true);
    this.props.login(user[0]);
    this.props.getInitialEmployees()
    this.props.history.push('/dashboard');
    this.userDet = {username:this.state.username,password:this.state.password};
    } else {
      this.setState({isError:true})
    }
  }
  render() {
    return (
      // <Provider store = {store}>
      <div>
        <div className={"container"} id="wrap">
          <div className={"row bgClass"} style={{ "marginTop": "15px", "marginBottom": "45px" }}>
            <div className={"col-lg-8 offset-lg-2"}>
            <Login isError={this.state.isError} AuthenticateUser={this.authenticateUser} 
            signInmsg={this.state.showSignInmsg} noError={this.hideError.bind(this)} />
            </div>
          </div>
        </div>
        {/* <AppNavigator/> */}
        <Router>
          <Switch>
            <Route path="/dashboard">
              <Dashboard loggedInUser={this.userDet}/>
            </Route>
          </Switch>
        </Router>
      </div>
      // </Provider>
    )
  }
}
LoginForm.protoTypes = {
  login:PropTypes.func.isRequired,
  getInitialEmployees:PropTypes.func.isRequired
};

export default connect(null, {login,getInitialEmployees})(LoginForm)
