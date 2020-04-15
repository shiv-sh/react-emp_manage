import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTh, faBell, faChevronCircleDown, faChevronDown, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import '../css/login.css';
import { InputGroup, InputGroupAddon, InputGroupText, Input, FormGroup } from 'reactstrap';
import BadgeAvatars from './avatar';

class Navbar1 extends Component {
    action = (e) => {
        console.log(e,this.props);
        // this.history.push('/')
    }

    render() {
        let avatarSize = { height: '25px', width: '25px' }
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
                        <BadgeAvatars style={{ margin: '0' }} empdata={this.props.loggedUser} isBadge={false} size={avatarSize} />
                        <NavDropdown title="" id="basic-nav-dropdown" onSelect={this.action} style={{ 'fontSize': 'small' }}>
                            <NavDropdown.Item eventKey='editProfile' style={{ left: '-130px' }}>Edit Profile</NavDropdown.Item>
                            <NavDropdown.Item eventKey='settings' style={{ left: '-130px' }}>Setings</NavDropdown.Item>
                            <NavDropdown.Item eventKey='logout' style={{ left: '-130px' }}>Logout
                        <FontAwesomeIcon className="search-icon ml-3" icon={faSignOutAlt}></FontAwesomeIcon>
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Navbar1;