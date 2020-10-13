import React, { Component } from 'react';
import { func } from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import Routes from './Routes';
import { saveUsersData } from '../../redux/reducers/usersList';

const API_URL = 'https://api.github.com';

class App extends Component {
  static propTypes = {
    saveUsersList: func.isRequired
  }

  async componentDidMount() {
    const { saveUsersList } = this.props;
    const response = await axios.get(`${API_URL}/users`);
    // console.log(data);
    saveUsersList(response.data);
  }

  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveUsersList: (data) => dispatch(saveUsersData(data)),
});

export default connect(null, mapDispatchToProps)(App);
