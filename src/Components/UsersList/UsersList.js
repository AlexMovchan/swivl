import React from 'react';
import { array } from 'prop-types';
import { connect } from 'react-redux';

const UsersList = ({ usersList }) => (
  <h1>
    test
    {usersList.map((oneUser) => <div key={oneUser.id}>{oneUser.login}</div>)}
  </h1>
);

const mapStateToProps = (state) => ({
  usersList: state.usersListReducer.usersData
});

UsersList.propTypes = {
  usersList: array.isRequired,
};

export default connect(mapStateToProps)(UsersList);
