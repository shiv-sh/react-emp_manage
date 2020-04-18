import React from 'react';
// import { Button, Row, Form, Col } from 'react-bootstrap';
import { withRouter } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Row, Form, Col } from 'react-bootstrap';
// import { withNavigation } from "react-navigation";
import '../css/dashboard.css';
import Search from './Search';
import Navbar1 from './Navbar';
import SearchResults from './SearchResults';
import EmployeeDetails from './EmployeeDetails';
import { MDBCard, MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faBars } from "@fortawesome/free-solid-svg-icons";
import { employees } from "../emp-details/all_emp_det";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';



class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    let loggedUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
    this.state = {loggedInUser:loggedUser,Employees:employees,selectedEmployee:employees[0]};
  }
  componentWillMount() {
    document.body.className = 'backgroundStylingDashboard';
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.allEmployees) {
    }
  }
  componentDidUpdate() {
      
  }

  logoutUser(){
    sessionStorage.clear();
    localStorage.clear();
    this.props.history.push('/');
  }
  selectedEmployee(currentEmp){
    this.setState({selectedEmployee:currentEmp})
  }
  nameFilter (list) {
    this.setState({Employees:list})
  }
  

  render() {
    return (
      <MDBContainer>
        <MDBCard className="dash-card" style={{ width: "100%" }}>
      <div className="">
      
        <div className="header-top">
        <FontAwesomeIcon icon={faEllipsisH} className='float-left ml-1' />
        </div>
        <Row style={{'margin':'0'}}>
          <Navbar1 logout={this.logoutUser.bind(this)} />
        </Row>
        <Row style={{margin:'0'}}>
          <Col md="9">
            <Search />
            <div className="adv-fil"><span className="adv-filter-text"><FontAwesomeIcon style={{ 'marginTop': 'inherit' }} icon={faBars}></FontAwesomeIcon> Advanced Filter</span></div>
            <SearchResults empList = {this.state.Employees} empDet = {this.selectedEmployee.bind(this)}
            nameFilter = {this.nameFilter.bind(this)}/>
          </Col>
          <Col md="3">
            <EmployeeDetails />
          </Col>
        </Row>
      </div>
      </MDBCard>
      </MDBContainer>
    );
  }
}

Dashboard.propTypes = {
  allEmployees:PropTypes.array.isRequired,
  loggedUser:PropTypes.object.isRequired,
  empInView:PropTypes.array.isRequired,
  selectedEmployee:PropTypes.object.isRequired
}

const MapStateToProps = state => ({
  loggedUser:state.applicationState.loggedInUser,
  allEmployees:state.applicationState.allEmployees,
  empInView:state.applicationState.empInView,
  selectedEmployee:state.applicationState.selectedEmployee
})

export default connect(MapStateToProps,{})(Dashboard)
