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



class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loggedInUser:props.loggedInUser,Employees:employees};
    console.log(props.loggedInUser)
  }
  componentDidMount() {
    document.body.className = 'backgroundStylingDashboard'
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
          <Navbar1 />
        </Row>
        <Row style={{margin:'0'}}>
          <Col md="10">
            <Search />
            <div className="adv-fil"><span className="adv-filter-text"><FontAwesomeIcon style={{ 'marginTop': 'inherit' }} icon={faBars}></FontAwesomeIcon> Advanced Filter</span></div>
            <SearchResults empList = {this.state.Employees}/>
          </Col>
          <Col md="2">
            <EmployeeDetails />
          </Col>
        </Row>
      </div>
      </MDBCard>
      </MDBContainer>
    );
  }
}
export default Dashboard
