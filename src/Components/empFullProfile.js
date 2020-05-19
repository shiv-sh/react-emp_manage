import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';
import '../css/empProfile.css';

class EmpFullProfile extends Component {


    empProfileView() {
        this.props.empProfileView(false);
    }
    render() {
        return (
            <div className="emp-profile">
                <Row>
                    <Col md="4" style={{ marginTop: '15px' }}>
                        <div>
                            <img src="profile_img.png" style={{ width: '100%', height: '100%', paddingLeft: '20px' }} />
                        </div>
                    </Col>
                    <Col md="6" style={{ marginTop: '15px' }}>
                        <div className="emp-name">{this.props.selectedEmployee.name}</div>
                        <Row className="row-margin emp-role-text">
                            <div>{this.props.selectedEmployee.role}</div>
                        </Row>
                        <Row className="row-margin" style={{ paddingTop: '15px' }}>
                        <div style={{ paddingLeft: '20px' }}>
                        <div>Email:  {this.props.selectedEmployee.email}</div>
                        <div></div>
                        </div>
                        </Row>
                    </Col>
                    <Col md="2">
                        <FontAwesomeIcon style={{ float: 'right', marginTop: '15px', cursor: 'pointer' }} icon={faTimes} onClick={() => this.empProfileView()}></FontAwesomeIcon></Col>
                </Row>

            </div>
        )
    }
}



EmpFullProfile.propTypes = {
    selectedEmployee: PropTypes.object.isRequired
}

function MapStateToProps(state, ownProps) {
    return {
        selectedEmployee: state.applicationState.selectedEmployee,
    };

}

const defaultMergeProps = (state, dispatchProps, ownProps) => ({
    ...ownProps, // ownProps
    ...state, // mapStateToProps
    // ...dispatchProps // mapDispatchToProps
})

export default connect(MapStateToProps, {}, defaultMergeProps)(EmpFullProfile)
