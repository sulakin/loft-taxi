import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from '../../containers/LoginPage';
import SignUpPage from '../../containers/SignUpPage';
import MapPage from '../../containers/MapPage';
import ProfilePage from '../../containers/ProfilePage';
import PageNotFound from '../../containers/PageNotFound';
import PrivateRoute from '../../components/PrivateRoute';

export default (Router) => {
  return (
    <Switch>
      <Route path="/" component={LoginPage} exact />
      <Route path="/signup" component={SignUpPage} exact />
      <PrivateRoute path="/map" component={MapPage} exact />
      <PrivateRoute path="/profile" component={ProfilePage} exact />
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
};
