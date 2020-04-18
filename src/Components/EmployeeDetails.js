import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import BadgeAvatars from './avatar';
import '../css/dashboard.css';
import { SocialIcon } from 'react-social-icons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class EmployeeDetails extends Component {
    constructor(props) {
        super(props)
        this.state = { employee: props.selectedEmp }
    }

    componentWillReceiveProps(nextProps) {
        let firstName =  nextProps.selectedEmployee.name.split(' ')[0]
        this.btnText = 'View '+firstName[0].toUpperCase() + firstName.slice(1)  + '\'s' + ' Full Profile';
    }
    componentWillMount() {
        let firstName =  this.props.selectedEmployee.name.split(' ')[0]
        this.btnText = 'View '+firstName[0].toUpperCase() + firstName.slice(1)  + '\'s' + ' Full Profile';
    }

    render() {
        let avatarSize = {height:'50px',width:'50px'}
        return (
            <div>
                <Row style={{ paddingTop: '10px' }}>
                    <Col md="5" style={{ padding: '0' }}>
                        <BadgeAvatars empdata={this.props.selectedEmployee} isBadge={false} size={avatarSize} />
                    </Col>
                    <Col md="7" style={{ padding: '0' }}>
                        <div className="emp-det">{this.props.selectedEmployee.name}</div>
                        <div className="emp-role">{this.props.selectedEmployee.role}</div>
                        <div style={{ fontSize: '13px' }}><span className={this.props.selectedEmployee.availability ? 'green-dot mr-1' : 'red-dot mr-1'}></span>
                            <span className={this.props.selectedEmployee.availability ? 'avail-color' : 'not-avail-color'}>{this.props.selectedEmployee.availability ? 'Available' : 'Out'}</span></div>
                    </Col>
                </Row>
                <Row style={{ marginTop: '20px' }}>
                    <div className="cont-inf">Contact Information</div>
                </Row>
                <Row>
                    <div className="cont-inf-data">Office Tel:<span className="info-data">{` ${this.props.selectedEmployee.phone}`}</span>
                    </div>
                </Row>
                <Row>
                    <div className="cont-inf-data">Mobile:<span className="info-data">{` ${this.props.selectedEmployee.mobile}`}</span>
                    </div>
                </Row>
                <Row>
                    <div className="cont-inf-data">Email:<span className="info-data">{` ${this.props.selectedEmployee.email}`}</span>
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
                    <div className="cont-inf-data">Department:<span className="info-data">{` ${this.props.selectedEmployee.department}`}</span>
                    </div>
                </Row>
                <Row>
                    <div className="cont-inf-data">Supervisor:<span className="info-data">{` Shivam Sharma`}</span>
                    </div>
                </Row>
                <Row>
                    <div className="cont-inf-data">Office:<span className="info-data">{` ${this.props.selectedEmployee.office}`}</span>
                    </div>
                </Row>
                <Row style={{ paddingTop: '10px' }}>
                    <div className="cont-inf">Personal Information</div>
                </Row>
                <Row>
                    <div className="cont-inf-data">Sex:<span className="info-data">{` ${this.props.selectedEmployee.gender}`}</span>
                    </div>
                </Row>
                <Row>
                    <div className="cont-inf-data">Birthday:<span className="info-data">{` ${this.props.selectedEmployee.birthday}`}</span>
                    </div>
                </Row>
                <Row>
                    <div className="cont-inf-data">City:<span className="info-data">{` ${this.props.selectedEmployee.city}`}</span>
                    </div>
                </Row>
                <Row className="btn-row">
                <div className="hr-div"></div>
                    <button className="profile-btn">{this.btnText}</button>
                </Row>
            </div>
        );
    }
}

EmployeeDetails.propTypes = {
    selectedEmployee:PropTypes.object.isRequired
  }
  
  const MapStateToProps = state => ({
    selectedEmployee:state.applicationState.selectedEmployee
  })
  

export default connect(MapStateToProps,{})(EmployeeDetails);