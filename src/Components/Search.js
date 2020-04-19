import React, { Component } from 'react';
import { MDBCard, MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";
import '../css/dashboard.css';
import { Button, Row, Form, Col } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { MDBCol, MDBIcon } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTh, faBell, faBars } from "@fortawesome/free-solid-svg-icons";
import { InputGroup, InputGroupAddon, InputGroupText, Input, FormGroup } from 'reactstrap';
import { setEmpInView } from '../actions/loginActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Search extends Component {
    constructor(){
        super()
        this.state = {inputName:"",department:"All",availability:'All'};
        this.previousState = this.state;
    }

    handleInputName = (e) => {
        this.previousState = this.state;
        this.setState({inputName:e.target.value});
    }
    handleDepartmentChange = (e) => {
        this.previousState = this.state;
        this.setState({department:e.target.value});
    }
    handleAvailabilityChange = (e) => {
        this.previousState = this.state;
        this.setState({availability:e.target.value});
    }
    submitchange = (event) => {
        event.preventDefault();
        if(this.state!==this.previousState){
            this.filterEmpListSearch(this.state);
        }
    }


    filterEmpListSearch(data){
        if(data.inputName!=="") {
          let emp = this.props.allEmployees.filter(val=> {
             return val.name.toLocaleLowerCase() === data.inputName.toLocaleLowerCase();
          })
          this.props.setEmpInView(emp)
        } else {
          if(data.department==="All"){
            this.props.setEmpInView(this.props.allEmployees)
          } if(data.department!=="All") {
          let emp = this.props.allEmployees.filter(val=> {
            return val.department.toLocaleLowerCase() === data.department.toLocaleLowerCase();
         })
         this.props.setEmpInView(emp)
        }
        if(data.availability!=="All"){
          if(data.department!=="All"){
          if(data.availability.toLocaleLowerCase()==="available"){
              let emp = this.props.allEmployees.filter(val=> {
                return val.availability===true && val.department===data.department;
             })
             this.props.setEmpInView(emp)
          } else {
            this.props.setEmpInView(this.props.allEmployees.filter(val=> {
              return val.availability===false && val.department===data.department;
           }))
          }
        } else {
          if(data.availability.toLocaleLowerCase()==="available"){
            this.props.setEmpInView(this.props.allEmployees.filter(val=> {
              return val.availability===true;
           }))
          } else {
            this.props.setEmpInView(this.props.allEmployees.filter(val=> {
              return val.availability===false;
           }))
          }
        }
        }
        } 
      }



    render() {
        return (
            <div>
                <div className="form-layout">
                    <MDBContainer style={{ padding: '0' }}>
                        <MDBCard style={{ width: "100%", border: "0" }}>
                            <div style={{ padding: '20px' }}>
                                <Row style={{ margin: "0" }}>
                                    <Col md="3" style={{ padding: '0' }}>
                                        <span style={{ fontSize: "10px" }}>Home ></span> <span style={{ fontSize: "13px", fontWeight: '500' }}>Employees</span>
                                    </Col>
                                    <Col md="6"><hr></hr></Col>
                                    <Col md="3">
                                        <Button className="add-emp-btn btn-sm" type="submit">
                                            Add Employee +
                                        </Button>
                                    </Col>
                                </Row>
                                <Row style={{ margin: "0" }}>
                                    <h4 className="emp-dir-text">Employee Directory</h4>
                                </Row>
                                <Row style={{ margin: "0", marginTop: '10px' }}>
                                    <Col md="4" style={{ padding: "0" }}>
                                        <div>
                                            <div className="input-label">Name</div>
                                            <InputGroup className="name-search">
                                                <InputGroupAddon className="input-group-text input-box" addonType="prepend">
                                                    <FontAwesomeIcon style={{ 'marginTop': 'inherit' }} className="search-icon" icon={faSearch}></FontAwesomeIcon>
                                                </InputGroupAddon>
                                                <Input style={{ 'border': '0', 'padding': '0' }}
                                                    type="text"
                                                    name="inputName"
                                                    value = {this.state.inputName}
                                                    placeholder="Type in a name.."
                                                    onChange={this.handleInputName}
                                                />
                                            </InputGroup>
                                        </div>
                                    </Col>
                                    <Col md="3" style={{ padding: "0" }}>
                                        <FormGroup>
                                            <div className="input-label">Department</div>
                                            <Input onChange={this.handleDepartmentChange} value = {this.state.department}
                                             className="dep-select" type="select" name="select" id="exampleSelect">
                                                <option>All</option>
                                                <option>Engineering</option>
                                                <option>Finance</option>
                                                <option>Design</option>
                                                <option>Marketing</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col md="2" style={{ padding: "0" }}>
                                        <FormGroup>
                                            <div className="input-label">Availability</div>
                                            <Input onChange={this.handleAvailabilityChange} className="dep-select" value = {this.state.availability}
                                             type="select" name="select" id="exampleSelect">
                                                <option>All</option>
                                                <option>Available</option>
                                                <option>Out</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col md="2" style={{ padding: "0" }}>
                                        <div style={{ 'marginBottom': '19px' }}></div>
                                        <Button style={{ 'padding': '8px' }} onClick={this.submitchange} variant="info" size="sm" type="submit">
                                            Filter <FontAwesomeIcon style={{ 'marginTop': 'inherit' }} className="search-icon" icon={faSearch}></FontAwesomeIcon>
                                        </Button>
                                    </Col>
                                </Row>
                            </div>
                        </MDBCard>
                    </MDBContainer>
                </div>
            </div>
        );
    }
}

Search.propTypes = {
    setEmpInView: PropTypes.func.isRequired,
    allEmployees:PropTypes.array.isRequired
}

const MapStateToProps = state => ({
    allEmployees: state.applicationState.allEmployees,
})

export default connect(MapStateToProps, {setEmpInView})(Search);