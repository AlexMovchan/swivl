import React from 'react';
import Paper from '@material-ui/core/Paper';
import useStyles from './style';

const NotFound = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <div>
        <h1>
          <span role="img" aria-label="emoji">🤖</span> Wooops !
        </h1>
        <h2>
          <span className={classes.redUnderline}>404</span> page not found 🧐
        </h2>
      </div>
    </Paper>
  );
};

export default NotFound;
