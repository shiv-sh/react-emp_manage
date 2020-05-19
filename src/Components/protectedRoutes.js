import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import authStatus from '../auth';

const ProtectedRoutes = ({ component: Component, ...rest }) => {
    console.log("protected Routes", sessionStorage.getItem('isAuthenticated'))
    return (
        <Route
            {...rest}
            render= {(props) => (
                sessionStorage.getItem('isAuthenticated')?<Component {...props} />:<Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                  }} />
    )}
/>
    )

}

ProtectedRoutes.propTypes = {
    loggedUser: PropTypes.object.isRequired
}

const MapStateToProps = state => ({
    loggedUser: state.applicationState.loggedInUser
})

export default connect(MapStateToProps, {})(ProtectedRoutes);


