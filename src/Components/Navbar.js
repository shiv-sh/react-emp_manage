import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTh, faBell } from "@fortawesome/free-solid-svg-icons";
import '../css/login.css';

class Navbar1 extends Component {
    render() {
        return (
            <div style={{ width: "100%" }}>
                <Navbar style={{ 'padding': '0' }} bg="light">
                    <Nav className="mr-auto">
                        <img className="ml-2 mt-1 logo-img" height='30' alt='logo' />
                        <Nav.Link style={{ 'fontSize': 'small' }} href="">Home</Nav.Link>
                        <NavDropdown title="News" id="basic-nav-dropdown" style={{ 'fontSize': 'small' }} href=""></NavDropdown>
                        <Nav.Link style={{ 'fontSize': 'small' }} href="">Events</Nav.Link>
                        <NavDropdown title="Departments" id="basic-nav-dropdown" style={{ 'fontSize': 'small' }} href=""></NavDropdown>
                        <Nav.Link style={{ 'fontSize': 'small' }} href="">Documents</Nav.Link>
                        <Nav.Link style={{ 'fontSize': 'small' }} href="">Employees</Nav.Link>
                    </Nav>
                    <Nav className="mr-sm-2">
                        <FontAwesomeIcon className="search-icon" icon={faSearch}></FontAwesomeIcon>
                        <div className="ver-line ml-3"></div>
                        <FontAwesomeIcon className="search-icon" style={{ 'marginLeft': '20px' }} icon={faTh}></FontAwesomeIcon>
                        <FontAwesomeIcon className="search-icon ml-3" icon={faBell}></FontAwesomeIcon>
                        <Nav.Link style={{ 'fontSize': 'small' }} href="">Home</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Navbar1;