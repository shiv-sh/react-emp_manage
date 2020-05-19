import React from 'react';
import { Button, Row, Form, Col } from 'react-bootstrap';
import { withRouter } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css';
import Alert from 'react-bootstrap/Alert'

class Login extends React.Component {
  constructor() {
    super();
    this.state = { username: "", password: "",isError:"",removeNotification:false };
  }
  emailLabel =  "Email or Username";
  passwordLabel = "Password";
  nextScreen = <login/>
  componentDidMount() {
    setTimeout(() => {
     this.setState({removeNotification:true})
  }, 3000)
  }
  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
    if(e.target.value==="") {
      this.props.noError()
    }
  }
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
    if(e.target.value==="") {
      this.props.noError()
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let user = {
      'username': this.state.username,
      'password': this.state.password
    };
    this.props.AuthenticateUser(user);
  }
  render() {
    return (
      <div className="form-layout">
        <div className="panel-heading">
          <div className="panel-heading-left">
            <h2 style={{'fontWeight':'300'}}>Sign in</h2>
          </div>
          {/* <div className="panel-heading-right">
            <span className="glyphicon glyphicon-pencil"></span>
          </div> */}
          {this.props.signInmsg.length>1?<Row>
          <Alert className={this.state.removeNotification?'hide-notify':null} variant='danger' style={{width:'100%'}}>{this.props.signInmsg}</Alert>
          </Row>:null}
        </div>
        <div id="divLogin" className={"bgImage panel-body"}>
          <Form className="form-horizontal" onSubmit={this.handleSubmit}>
            <Form.Group controlId="formHorizontalUsername">
              <Col md="12">
                <div className={this.props.isError?"show-error":"input-label"}>{this.emailLabel}</div>
                <input  className="input no-outline" size="lg" value={this.state.username} name="username"
                  onChange={this.handleUsernameChange} ref="username" type="text" required/>
              </Col>
            </Form.Group>

            <Form.Group controlId="formHorizontalPassword">
              <Col md="12">
                <div className={this.props.isError?"show-error":"input-label"}>{this.passwordLabel}</div>
                <input className="input no-outline" size="lg" value={this.state.password} name="password"
                  onChange={this.handlePasswordChange} ref="password" type="password" required />
              </Col>
            </Form.Group>
			
			{/* Add the form control for capturing phone details */}
			 
            <Form.Group>
              <Row style={{'marginLeft':'0px','marginTop':'30px'}}>
              <Col md="8">
              <div style={{'marginTop':'10px'}}>
              <input disabled type="checkbox" style={{'width':'auto'}} /><span style={{'color':'grey'}}>{'  Stay signed in?'}</span>
              </div>
              </Col>
              <Col md="4">
              <Button id="btn-lg" variant="info" size="lg" block type="submit">
                  Sign in
                </Button>
              </Col>
              </Row>
            </Form.Group>
          </Form>
        </div>
        <div className="text-center" style={{'height':'50px','backgroundColor':'gainsboro'}}>
          <div style={{'paddingTop':'15px'}}>{'Create an account'}</div>
        </div>
      </div>
    );
  }
}
export default withRouter(Login);
