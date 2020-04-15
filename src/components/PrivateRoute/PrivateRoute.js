import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { isLoggedIn } from '../../modules/Auth';

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (isLoggedIn ? <Component {...props} /> : <Redirect to="/" />)}
  />
);

const mapStateToProps = (state) => ({
  isLoggedIn: isLoggedIn(state),
});

export default connect(mapStateToProps)(PrivateRoute);
