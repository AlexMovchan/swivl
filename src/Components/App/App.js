import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import UserProfile from '../UserProfile/UserProfile';
import NotFound from '../NotFound/NotFound';
import UsersList from '../UsersList/UsersList';

const history = createBrowserHistory();

const App = () => (
  <div className="App">
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={UsersList} />
        <Route path="/user/:userName" component={UserProfile} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </div>
);

export default App;
