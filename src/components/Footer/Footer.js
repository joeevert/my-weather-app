import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import TWC_logo from './The_Weather_Channel_logo.svg';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Fab, IconButton, Tooltip } from '@material-ui/core';
import MyLocation from '@material-ui/icons/MyLocation';
import ListIcon from '@material-ui/icons/List';

class Footer extends Component {

  // go to favorites view
  viewFavorites = () => {
    this.props.history.push('/favorites');
  }

  // go to home view
  goHome = () => {
    this.props.history.push('/home');
  }

  // sets position to use for getting the weater at your current location
  getGeoLocation = async () => {
    try { 
      await navigator.geolocation.getCurrentPosition((currentPosition) => {
        console.log('currentPosition', currentPosition.coords);
        this.setState({
          ...this.state,
          lat: currentPosition.coords.latitude,
          lng: currentPosition.coords.longitude,
        })
        this.props.dispatch({ type: 'FETCH_CURRENT_WEATHER', payload: this.state });
      })
    }
    catch (error) {
      console.log('ERROR in getGeoLocation:', error)
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <a href="https://weather.com/" target="_blank" rel="noopener noreferrer">
            <img className={classes.logo} src={TWC_logo} alt="The Weather Channel"/>
          </a>
          <Tooltip title="Current Location" aria-label="Current Location">
            <Fab color="primary" aria-label="My Location" className={classes.fabButton} onClick={this.getGeoLocation}>
              <MyLocation />
            </Fab>
          </Tooltip>
            <IconButton color="inherit" fontSize="large">
              <ListIcon />
            </IconButton>
        </Toolbar>
      </AppBar>
  )}
}

const styles = {
  appBar: {
    top: 'auto',
    bottom: 0,
    borderTop: '1px solid #ffffff'
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
    border: '1px solid #ffffff'
  },
  logo: {
    verticalAlign: 'bottom',
    display: 'inline-block',
    width: '50px',
    height: 'auto',
  }
};

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(withRouter(Footer)));