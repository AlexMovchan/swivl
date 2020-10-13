import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
// import User from 'comonents/User';
import NotFound from '../NotFound';
import UsersList from '../UsersList/UsersList';

const Routes = () => (
  <Router>
    <Switch>
      {/* <Route path="/user/:userId" component={User} /> */}
      <Route path="/" component={UsersList} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
