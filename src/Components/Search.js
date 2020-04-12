import React, { Component } from 'react';
import { MDBCard, MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";
import '../css/dashboard.css';
import { Button, Row, Form, Col } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { MDBCol, MDBIcon } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTh, faBell, faBars } from "@fortawesome/free-solid-svg-icons";
import { InputGroup, InputGroupAddon, InputGroupText, Input, FormGroup } from 'reactstrap';

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
        console.log(e.target.value);
        this.setState({department:e.target.value});
    }
    submitchange = (event) => {
        event.preventDefault();
        // if(this.state!==this.previousState){
            this.props.filterEmpList(this.state);
        // }
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
                                                <option>Marketting</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col md="2" style={{ padding: "0" }}>
                                        <FormGroup>
                                            <div className="input-label">Availability</div>
                                            <Input className="dep-select" type="select" name="select" id="exampleSelect">
                                                <option>All</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
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

export default Search;