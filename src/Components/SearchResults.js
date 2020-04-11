import React, { Component } from 'react';
import { Table } from 'reactstrap';
import '../css/dashboard.css';
import BadgeAvatars from './avatar';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTh, faBell, faBars, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { InputGroup, InputGroupAddon, InputGroupText, Input, FormGroup } from 'reactstrap';



class SearchResults extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.employes = props.empList;
        this.empData = this.employes.map((item, key) => {
            return (<tr style={{ 'padding': '0' }}>
                <td style={{ 'padding': '0', fontSize: '13px', width: '100%' }} key={item.id}>
                    <Row style={{ padding: '0', margin: '0', width: 'fit-content' }}>
                        <Col md="3" style={{ padding: '0' }}>
                            <BadgeAvatars empdata={item} />
                        </Col>
                        <Col md="9" style={{ padding: '1' }}>
                            <div>{item.name}</div>
                            <div className="emp-role">{item.role}</div>
                        </Col>
                    </Row>
                </td>
                <td style={{ fontSize: '13px' }} key={item.id}>{item.department}</td>
                <td style={{ fontSize: '13px' }} key={item.id}>{item.phone}</td>
                <td style={{ fontSize: '13px', padding: '0', paddingTop: '10px' }} key={item.id}><span className={item.availability ? 'green-dot mr-1' : 'red-dot mr-1'}>
                </span><span className={item.availability ? 'avail-color' : 'not-avail-color'}>{item.availability ? 'Available' : 'Out'}</span></td>
                <td style={{ fontSize: '13px' }} key={item.id}><FontAwesomeIcon icon={faEllipsisV} className='float-left ml-1' /></td>
            </tr>)
        })
    }


    render() {
        return (
            <div className="search-results-div">
                <div>
                    <Row style={{margin:'0'}}>
                        <Col md="5" style={{padding:'0'}}>
                            <InputGroup className="name-filter">
                                <InputGroupAddon className="input-group-text input-box" addonType="prepend">
                                    <FontAwesomeIcon style={{ 'marginTop': 'inherit' }} className="search-icon" icon={faSearch}></FontAwesomeIcon>
                                </InputGroupAddon>
                                <Input className="name-filter" style={{ 'border': '0', 'padding': '0',fontSize:'15px' }}
                                    type="text"
                                    name="inputBox"
                                    id="searchByName"
                                    placeholder="Filter by name.."
                                />
                            </InputGroup>
                        </Col>
                        <Col md="7">
                        </Col>
                    </Row>
                </div>
                <div className="search-results-table">
                <Table style={{ 'height': this.height }}>
                    <thead>
                        <tr>
                            <th className="table-heading">Name</th>
                            <th className="table-heading">Department</th>
                            <th className="table-heading">Phone Number</th>
                            <th className="table-heading">Availabilty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.empData}
                    </tbody>
                </Table>
                </div>
            </div>
        );
    }
}

export default SearchResults;