import React, { Component } from 'react';
import { Table } from 'reactstrap';
import '../css/dashboard.css';
import  BadgeAvatars  from './avatar';
import { Row, Col } from 'react-bootstrap';



class SearchResults extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.employes = props.empList;
        this.empData = this.employes.map((item, key) => {
            return (<tr style={{ 'padding': '0' }}>
                <td style={{ 'padding': '0',fontSize:'13px',width:'100%' }} key={item.id}>
                <Row style={{padding:'0',margin:'0',width:'fit-content'}}>
            <Col md="3" style={{padding:'0'}}>
                <BadgeAvatars empdata={item}/>
                </Col>
                <Col md="9" style={{padding:'1'}}>
                <div>{item.name}</div>
                <div className="emp-role">{item.role}</div>
                </Col>
                </Row>
                </td>
                <td style={{fontSize:'13px' }} key={item.id}>{item.department}</td>
                <td style={{fontSize:'13px' }} key={item.id}>{item.phone}</td>
                <td style={{fontSize:'13px' }} key={item.id}><span className={item.availability?'green-dot':'red-dot'}></span>{item.availability?'Available':'Out'}</td>
            </tr>)
        })
    }
    

render() {
    return (
        <div style={{ height: '306px', overflow: 'auto', padding: '30px' }}>
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

                <tbody>


                </tbody>
            </Table>
        </div>
    );
}
}

export default SearchResults;