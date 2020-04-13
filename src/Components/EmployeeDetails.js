import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import BadgeAvatars from './avatar';
import '../css/dashboard.css';
import { SocialIcon } from 'react-social-icons';

class EmployeeDetails extends Component {
    constructor(props) {
        super(props)
        this.state = { employee: props.selectedEmp }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ employee: nextProps.selectedEmp });
    }

    render() {
        return (
            <div>
                <Row style={{ paddingTop: '10px' }}>
                    <Col md="5" style={{ padding: '0' }}>
                        <BadgeAvatars empdata={this.state.employee} isBadge={false} />
                    </Col>
                    <Col md="7" style={{ padding: '0' }}>
                        <div className="emp-det">{this.state.employee.name}</div>
                        <div className="emp-role">{this.state.employee.role}</div>
                        <div style={{ fontSize: '13px' }}><span className={this.state.employee.availability ? 'green-dot mr-1' : 'red-dot mr-1'}></span>
                            <span className={this.state.employee.availability ? 'avail-color' : 'not-avail-color'}>{this.state.employee.availability ? 'Available' : 'Out'}</span></div>
                    </Col>
                </Row>
                <Row style={{ marginTop: '20px' }}>
                    <div className="cont-inf">Contact Information</div>
                </Row>
                <Row>
                    <div className="cont-inf-data">Office Tel:<span className="info-data">{` ${this.state.employee.phone}`}</span>
                    </div>
                </Row>
                <Row>
                    <div className="cont-inf-data">Mobile:<span className="info-data">{` ${this.state.employee.mobile}`}</span>
                    </div>
                </Row>
                <Row>
                    <div className="cont-inf-data">Email:<span className="info-data">{` ${this.state.employee.email}`}</span>
                    </div>
                </Row>
                <Row className="social-icon-row">
                    <span style={{ padding: '10px' }}><SocialIcon className="social-icon" url="http://linkedin.com/jaketrent" /></span>
                    <span style={{ padding: '10px' }}><SocialIcon url="http://facebook.com/jaketrent" /></span>
                    <span style={{ padding: '10px' }}><SocialIcon url="http://twitter.com/jaketrent" /></span>
                </Row>
                <Row>
                    <div className="cont-inf">Work Information</div>
                </Row>
                <Row>
                <div className="cont-inf-data">Department:<span className="info-data">{` ${this.state.employee.department}`}</span>
                    </div>
                </Row>
                <Row>
                <div className="cont-inf-data">Supervisor:<span className="info-data">{` Shivam Sharma`}</span>
                    </div>
                </Row>
                <Row>
                <div className="cont-inf-data">Office:<span className="info-data">{` ${this.state.employee.office}`}</span>
                    </div>
                </Row>
                <Row style={{paddingTop:'10px'}}>
                    <div className="cont-inf">Personal Information</div>
                </Row>
                <Row>
                <div className="cont-inf-data">Sex:<span className="info-data">{` ${this.state.employee.gender}`}</span>
                    </div>
                </Row>
                <Row>
                <div className="cont-inf-data">Birthday:<span className="info-data">{` ${this.state.employee.birthday}`}</span>
                    </div>
                </Row>
                <Row>
                <div className="cont-inf-data">City:<span className="info-data">{` ${this.state.employee.city}`}</span>
                    </div>
                </Row>
            </div>
        );
    }
}

export default EmployeeDetails;