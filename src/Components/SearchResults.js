import React, { Component } from 'react';
import { Table } from 'reactstrap';
import '../css/dashboard.css';
import BadgeAvatars from './avatar';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTh, faBell, faBars, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { InputGroup, InputGroupAddon, InputGroupText, Input, FormGroup } from 'reactstrap';
import { setSelectedEmp, setEmpInView } from '../actions/loginActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';



class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = { filteredVal: "", listSortBy: 'Alphabetical A-Z'}
        this.selectedEmployee = this.selectedEmployee.bind(this)
        this.selIndex = 0;
    }

    componentDidMount() {
        this.Sorting(this.props.empInView, this.state.listSortBy)
    }

    selectedEmployee(emp, index) {
        this.props.setSelectedEmp(emp)
        this.selIndex = index;
    }

    filterName = (e) => {
        let val = e.target.value.toLocaleLowerCase();
        this.setState({ filteredVal: e.target.value });
        let empList1 = this.props.allEmployees.filter(element => {
            return element.name.toLocaleLowerCase().includes(val);
        })
        if (empList1.length>0) {
        this.props.setEmpInView(empList1)
        this.props.setSelectedEmp(empList1[0])
        }
    }

    sortList = (e) => {
        this.setState({ listSortBy: e.target.value })
        this.Sorting(this.props.allEmployees, e.target.value)
    }

    Sorting(list, sortby) {
        let sortedList
        if (sortby === 'Alphabetical A-Z') {
            sortedList = list.sort((a, b) => (a.name > b.name) ? 1 : -1)
        } else {
            sortedList = list.sort((a, b) => (a.name < b.name) ? 1 : -1)
        }
        this.props.setEmpInView(sortedList)
        this.selectedEmployee(sortedList[0], 0)
    }


    render() {
        let avatarSize = { height: '30px', width: '30px' }
        this.empData = this.props.empInView.map(function (item, index) {
            return (<tr className={this.selIndex == index ? 'selected-row' : ''} onClick={() => this.selectedEmployee(item, index)} key={index} style={{ 'padding': '0' }}>
                <td style={{ 'padding': '0', fontSize: '13px', width: '100%' }}>
                    <Row style={{ padding: '0', margin: '0', width: 'fit-content' }}>
                        <Col md="3" style={{ padding: '0' }}>
                            <BadgeAvatars empdata={item} isBadge={true} size={avatarSize} />
                        </Col>
                        <Col md="9" style={{ padding: '1' }}>
                            <div>{item.name}</div>
                            <div className="emp-role">{item.role}</div>
                        </Col>
                    </Row>
                </td>
                <td style={{ fontSize: '13px' }}>{item.department}</td>
                <td style={{ fontSize: '13px' }}>{item.phone}</td>
                <td style={{ fontSize: '13px', padding: '0', paddingTop: '10px' }}><span className={item.availability ? 'green-dot mr-1' : 'red-dot mr-1'}>
                </span><span className={item.availability ? 'avail-color' : 'not-avail-color'}>{item.availability ? 'Available' : 'Out'}</span></td>
                <td style={{ fontSize: '13px' }}><FontAwesomeIcon icon={faEllipsisV} className='float-left ml-1' /></td>
            </tr>)
        }.bind(this))
        return (
            <div className="search-results-div">
                <div>
                    <Row style={{ margin: '0' }}>
                        <Col md="5" style={{ padding: '0' }}>
                            <InputGroup className="name-filter">
                                <InputGroupAddon className="input-group-text input-box" addonType="prepend">
                                    <FontAwesomeIcon style={{ 'marginTop': 'inherit' }} className="search-icon" icon={faSearch}></FontAwesomeIcon>
                                </InputGroupAddon>
                                <Input className="name-filter" style={{ 'border': '0', 'padding': '0', fontSize: '15px' }}
                                    type="text"
                                    value={this.state.filteredVal}
                                    name="inputBox"
                                    id="searchByName"
                                    placeholder="Filter by name.."
                                    onChange={this.filterName}
                                />
                            </InputGroup>
                        </Col>
                        <Col md="6" style={{ padding: '0px' }}>
                            <Row style={{ margin: '0' }}>
                                <Col md="3" style={{ padding: '0' }}>
                                    <span style={{ fontSize: '13px', color: 'grey' }}>Sort by:</span>
                                </Col>
                                <Col md="7" style={{ padding: '0' }}>
                                    <FormGroup>
                                        <Input className="dropdown-alpha" type="select" name="select" id="exampleSelect"
                                            value={this.state.listSortBy} onChange={this.sortList}>
                                            <option>Alphabetical A-Z</option>
                                            <option>Alphabetical Z-A</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col md="2">
                                    <FontAwesomeIcon style={{ 'marginTop': 'inherit', height: '12px' }} icon={faBars}></FontAwesomeIcon>
                                </Col>

                            </Row>
                        </Col>
                    </Row>
                </div>
                {this.props.empInView.length > 0 ?
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
                    </div> : <div><h4>No Results Found..</h4></div>
                }
            </div>
        );
    }
}

SearchResults.propTypes = {
    setSelectedEmp: PropTypes.func.isRequired,
    allEmployees: PropTypes.array.isRequired,
    empInView: PropTypes.array.isRequired,
    setEmpInView: PropTypes.func.isRequired
}

const MapStateToProps = state => ({
    allEmployees: state.applicationState.allEmployees,
    selectedEmployee: state.applicationState.selectedEmployee,
    empInView: state.applicationState.empInView
})

export default connect(MapStateToProps, { setSelectedEmp, setEmpInView })(SearchResults);