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
import EmpFullProfile from './empFullProfile';
import { MDBCard, MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faBars } from "@fortawesome/free-solid-svg-icons";
import { employees } from "../emp-details/all_emp_det";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import  { Redirect } from 'react-router-dom'



class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    let loggedUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
    this.state = { loggedInUser: loggedUser, Employees: employees,
      showAdvFilter:false, selectedEmployee: employees[0], showEmpDet:false, showProfileComp:false };
  }
  componentWillMount() {
    document.body.className = 'backgroundStylingDashboard';
    // return <Redirect to='/login'  />
    // console.log("USER", this.props.loggedUser)
    // this.props.history.push('/login')
    if (this.props.loggedUser==={}) {
      this.props.history.push('/login')
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.allEmployees) {
    }
  }
  componentDidUpdate() {

  }
  showAdvFilter() {
    this.setState({showAdvFilter:!this.state.showAdvFilter})
  }

  logoutUser() {
    sessionStorage.clear();
    localStorage.clear();
    this.props.history.push('/login');
  }
  selectedEmployee(currentEmp) {
    this.setState({ selectedEmployee: currentEmp })
  }
  nameFilter(list) {
    this.setState({ Employees: list })
  }
  showEmpdet() {
    this.setState({showEmpDet:true});
  }

  showFullProfile(val) {
      this.setState({showProfileComp:val})
      console.log("VALUE!!!! ",this.state.showProfileComp)
    
  }


  render() {
    // const isShow = this.state.showAdvFilter;
    // console.log("USER", this.props.loggedUser)
    // if (this.props.loggedUser) {
    //   this.props.history.push('/login')
    //   return 0
    // }
    return (
      <MDBContainer>
        <MDBCard className="dash-card" style={{ width: "100%" }}>
        {/* {this.state.showEmpDet?<div style={{height:'300px',zIndex:10}}><EmployeeDetails /></div>:''} */}
          <div >

            <div className="header-top">
              <FontAwesomeIcon icon={faEllipsisH} className='float-left ml-1' />
            </div>
            <Row style={{ 'margin': '0' }}>
              <Navbar1 logout={this.logoutUser.bind(this)} />
            </Row>
            {this.state.showProfileComp?<div className="full-profile"><EmpFullProfile empProfileView={this.showFullProfile.bind(this)}/></div>:null}

            <Row style={{ margin: '0', position:'relative' }}>
              <Col md="9">
                <div className="emp-details">
                  <Search />
                </div>
                <div className="adv-fil" ><span className="adv-filter-text"><FontAwesomeIcon style={{ 'marginTop': 'inherit' }} icon={faBars}></FontAwesomeIcon> Advanced Filter</span></div>
                <div>
                  <SearchResults empList={this.state.Employees} empDet={this.selectedEmployee.bind(this)}
                    nameFilter={this.nameFilter.bind(this)} />
                </div>

              </Col>
              <Col md="3" className="emp-details" style={{ height: '86vh' }}>
                <EmployeeDetails showDetails={this.showFullProfile.bind(this)} />
              </Col>
            </Row>

            
            <div className="view-profile-mobile" style={{ padding: '30px' }}>
              <Button id="btn-lg" variant="info" size="lg" block onClick={() => this.showEmpdet()} >
                View {this.props.selectedEmployee.name}'s Profile
                </Button>
            </div>

          </div>
        </MDBCard>
      </MDBContainer>
    );
  }
}

Dashboard.propTypes = {
  allEmployees: PropTypes.array.isRequired,
  loggedUser: PropTypes.object.isRequired,
  empInView: PropTypes.array.isRequired,
  selectedEmployee: PropTypes.object.isRequired
}

const MapStateToProps = state => ({
  loggedUser: state.applicationState.loggedInUser,
  allEmployees: state.applicationState.allEmployees,
  empInView: state.applicationState.empInView,
  selectedEmployee: state.applicationState.selectedEmployee
})

export default connect(MapStateToProps, {})(Dashboard)
