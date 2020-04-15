import React from 'react';
import Login from './Login';
import Dashboard from './dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css'
// import AppNavigator from "../AppNavigator";
// import { createAppContainer } from "react-navigation";
import { withNavigation } from "react-navigation";
import { users } from '../emp-details/authenticate_users';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.authenticateUser = this.authenticateUser.bind(this);
    this.state = { username: "", password: "", isError:false };
    this.userDet={};
  }
  // AppNavigator = createAppContainer(AppNavigator);
  componentDidMount() {
    document.body.className = 'backgroundStyling'
  }
  hideError() {
    this.setState({isError:false})
  }

  authenticateUser(userDetails) {
   if( users.filter(user => {
      return user.loginCred.userName===userDetails.username && user.loginCred.password===userDetails.password
    }).length>0) {
    this.setState({ username: userDetails.username, password: userDetails.password })
    console.log("in login form", userDetails);
    this.props.history.push('/dashboard');
    this.userDet = {username:this.state.username,password:this.state.password};
    } else {
      this.setState({isError:true})
    }
  }
  render() {
    return (
      <div>
        <div className={"container"} id="wrap">
          <div className={"row bgClass"} style={{ "marginTop": "15px", "marginBottom": "45px" }}>
            <div className={"col-lg-8 offset-lg-2"}>
            <Login isError={this.state.isError} AuthenticateUser={this.authenticateUser} noError={this.hideError.bind(this)} />
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
    )
  }
}

export default LoginForm;
