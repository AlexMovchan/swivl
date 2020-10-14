import React, { useState, useEffect } from 'react';
import { object } from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {
  Table, TableBody, TableCell, TableHead, TableRow, Paper, TablePagination
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { fetchData } from '../../config';
import { saveUsersData } from '../../redux/reducers/usersList';
import './UsersList.scss';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const ROWS_PER_PAGE = 100;

const UsersList = ({ usersList }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [totalUserCount, setTotalUserCount] = useState(0);

  const getTotalUserCounts = async () => {
    const response = await fetchData('/search/users?q=type:user');
    setTotalUserCount(response.data.total_count);
  };

  const getUsersList = async (startFrom) => {
    const response = await fetchData(`/users?per_page=${ROWS_PER_PAGE}&since=${startFrom}`);
    dispatch(saveUsersData(response.data));
  };

  const onPageChanged = (e, newPage = 0) => {
    setPage(newPage);
    getUsersList(newPage * ROWS_PER_PAGE);
  };

  useEffect(() => {
    getUsersList(page);
    getTotalUserCounts();
  }, []);

  return (
    <Paper className="users-list-table">
      <Table size="small">
        <TableHead classes={{ root: 'table-head' }}>
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell>User ID</StyledTableCell>
            <StyledTableCell align="right">Login</StyledTableCell>
            <StyledTableCell align="right">Profile Link</StyledTableCell>
            <StyledTableCell align="right">Avatar</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {Object.values(usersList)
            .slice(page * ROWS_PER_PAGE, page * ROWS_PER_PAGE + ROWS_PER_PAGE)
            .map((oneUser, index) => (
              <TableRow
                hover
                key={oneUser.id}
                onClick={() => history.push(`/user/${oneUser.login}`)}
              >
                <TableCell>{index + (page * ROWS_PER_PAGE) + 1}</TableCell>
                <TableCell align="right" component="th" scope="row">
                  {oneUser.id}
                </TableCell>
                <TableCell align="right">{oneUser.login}</TableCell>
                <TableCell align="right">{oneUser.html_url}</TableCell>
                <TableCell align="right">
                  <img className="user-avatar" src={oneUser.avatar_url} alt={`${oneUser.login}_avatar`} />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={totalUserCount}
        rowsPerPage={ROWS_PER_PAGE}
        rowsPerPageOptions={[ROWS_PER_PAGE]}
        page={page}
        onChangePage={onPageChanged}
      />
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  usersList: state.usersListReducer.usersList
});

UsersList.propTypes = {
  usersList: object.isRequired,
};

export default connect(mapStateToProps)(UsersList);
