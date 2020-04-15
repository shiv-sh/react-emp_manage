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
    let loggedUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
    this.state = {loggedInUser:loggedUser,Employees:employees,selectedEmployee:employees[0]};
    console.log(props)
    this.filterEmpListSearch = this.filterEmpListSearch.bind(this);
  }
  componentDidMount() {
    document.body.className = 'backgroundStylingDashboard'
  }
  logoutUser(){
    sessionStorage.clear();
    this.props.history.push('/');
  }
  selectedEmployee(currentEmp){
    this.setState({selectedEmployee:currentEmp})
  }
  nameFilter (list) {
    console.log(list)
    this.setState({Employees:list})
  }
  filterEmpListSearch(data){
    console.log("uiui",data);
    if(data.inputName!=="") {
      let emp = employees.filter(val=> {
         return val.name.toLocaleLowerCase() === data.inputName.toLocaleLowerCase();
      })
      this.setState({Employees:emp},()=>{console.log(this.state)})
    } else {
      if(data.department==="All"){
        this.setState({Employees:employees})
      } if(data.department!=="All") {
      let emp = employees.filter(val=> {
        return val.department.toLocaleLowerCase() === data.department.toLocaleLowerCase();
     })
     this.setState({Employees:emp})
    }
    if(data.availability!=="All"){
      if(data.department!=="All"){
      if(data.availability.toLocaleLowerCase()==="available"){
        this.setState({Employees:employees.filter(val=> {
          return val.availability===true && val.department===data.department;
       })})
      } else {
        this.setState({Employees:employees.filter(val=> {
          return val.availability===false && val.department===data.department;
       })})
      }
    } else {
      if(data.availability.toLocaleLowerCase()==="available"){
        this.setState({Employees:employees.filter(val=> {
          return val.availability===true;
       })})
      } else {
        this.setState({Employees:employees.filter(val=> {
          return val.availability===false;
       })})
      }
    }
    }
    } 
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
          <Navbar1 loggedUser = {this.state.loggedInUser} logout={this.logoutUser.bind(this)} />
        </Row>
        <Row style={{margin:'0'}}>
          <Col md="9">
            <Search filterEmpList={this.filterEmpListSearch} />
            <div className="adv-fil"><span className="adv-filter-text"><FontAwesomeIcon style={{ 'marginTop': 'inherit' }} icon={faBars}></FontAwesomeIcon> Advanced Filter</span></div>
            <SearchResults empList = {this.state.Employees} empDet = {this.selectedEmployee.bind(this)}
            nameFilter = {this.nameFilter.bind(this)}/>
          </Col>
          <Col md="3">
            <EmployeeDetails selectedEmp = {this.state.selectedEmployee} />
          </Col>
        </Row>
      </div>
      </MDBCard>
      </MDBContainer>
    );
  }
}
export default Dashboard
