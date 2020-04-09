import React, { Component } from 'react';
import {Table } from 'reactstrap';

class SearchResults extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.employes = props.empList;
        this.empData = this.employes.map((item, index) => {
            return(<tr>
                <td key={index}>{item.name}</td>
                <td key={index}>{item.department}</td>
                <td key={index}>{item.phone}</td>
                <td key={index}>{item.availability}</td>
            </tr>)
        })
    }
    render() {
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Phone Number</th>
                            <th>Availabilty</th>
                        </tr>
                    </thead>
                        <tbody>
                           {this.empData}                            
                        </tbody>
                </Table>
            </div>
        );
    }
}

export default SearchResults;