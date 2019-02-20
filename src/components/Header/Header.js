import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { withStyles } from '@material-ui/core/styles';
import { AppBar, Typography } from '@material-ui/core';

const today = new Date();

function Header(props) {
  const { classes } = props;

  return (
    <AppBar position="static" color="primary" className={classes.appBar}>
      <Typography className={classes.date} variant="h5">
        {moment(today).format('LLL')}
      </Typography>
    </AppBar>
  );
}

const styles = {
  appBar: {
    position: 'fixed',
    top: 0,
    // backgroundColor: '#282c34',
    textAlign: 'center',
    padding: '19px 0px',
    borderBottom: '1px solid #ffffff'
  },
  date: {
    color: '#ffffff',
    textAlign: 'center'
  },
};

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(Header));
