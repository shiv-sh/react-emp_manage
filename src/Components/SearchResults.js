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
        this.state = {empList:props.empList,selectedIndex:0}
        this.employes = props.empList;
        this.selectedEmployee = this.selectedEmployee.bind(this)
    }


    componentWillReceiveProps(nextProps) {
        this.setState({ empList: nextProps.empList }); 
      }

      selectedEmployee(emp,i) {
          console.log(emp);
          this.setState({selectedIndex:i})
      }  


    render() {
        this.empData = this.state.empList.map(function(item, index) {
            return (<tr className={this.state.selectedIndex===index?'selected-row':''} onClick={()=>this.selectedEmployee(item,index)} key={index} style={{ 'padding': '0' }}>
                <td style={{ 'padding': '0', fontSize: '13px', width: '100%' }}>
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
                                    name="inputBox"
                                    id="searchByName"
                                    placeholder="Filter by name.."
                                />
                            </InputGroup>
                        </Col>
                        <Col md="6" style={{padding:'0px'}}>
                        <Row style={{margin:'0'}}>
                        <Col md="3" style={{padding:'0'}}>
                        <span style={{fontSize:'13px',color:'grey'}}>Sort by:</span>
                        </Col>
                        <Col md="7" style={{padding:'0'}}>
                            <FormGroup>
                                <Input className="dropdown-alpha" type="select" name="select" id="exampleSelect">
                                    <option>Alphabetical A-Z</option>
                                </Input>
                            </FormGroup>
                            </Col>
                            <Col md="2">
                            <FontAwesomeIcon style={{ 'marginTop': 'inherit',height:'12px' }} icon={faBars}></FontAwesomeIcon>
                            </Col>
                            
                            </Row>
                        </Col>
                    </Row>
                </div>
                {this.state.empList.length>0?
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
                </div>:<div><h4>No Results Found..</h4></div>
                }
            </div>
        );
    }
}

export default SearchResults;