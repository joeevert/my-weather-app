import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from '../Loading/Loading';
import SearchLocation from '../SearchLocation/SearchLocation';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import { Button, Typography, Tooltip } from '@material-ui/core';

class Home extends Component {

  state = {
    lat: undefined,
    lng: undefined,
    cityID: undefined,
    unit: true,
    search: ''
  }

  componentDidMount() {
    this.getGeoLocation();
    this.props.dispatch({ type: 'FETCH_FAVORITES' });
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
        this.props.dispatch({ type: 'FETCH_CURRENT_WEATHER', payload: this.state});
      })
    }
    catch (error) {
      console.log('ERROR in getGeoLocation:', error)
    }
  }

  // addFavorite = (id) => {
  //   console.log('cityID', id);
  //   this.props.dispatch({ type: 'ADD_TO_FAVORITES', payload: id });
  // }

  // toggles between fahrenheit and celsius
  toggleUnit = () => {
    this.setState({ unit: !this.state.unit});
  }

  // converts temp from K to F
  toFahrenheit = (temp) => {
    let fahrenheit = (temp - 273.15) * 9/5 + 32;
    return Math.round(fahrenheit);
  }

  // converts temp from K to C
  toCelsius = (temp) => {
    let celsius = temp - 273.15;
    return Math.round(celsius);
  }

  render() {
    const { classes } = this.props;
    const unit = this.state.unit;
    return (
      <section>
        {/* {JSON.stringify(this.props.currentWeather)} */}
        {!this.props.name && <Loading />}
        <Typography className={classes.location} variant="h3">
          {this.props.name && this.props.name}
        </Typography>
        <Typography className={classes.description} variant="h4">
          {this.props.description && this.props.description[0].main}
        </Typography>
        {unit ? (
          <Typography className={classes.temperature} variant="h1">
            {this.toFahrenheit(this.props.temperature && this.props.temperature.temp)} &deg;
          </Typography>
        ) : ( 
          <Typography className={classes.temperature} variant="h1">
            {this.toCelsius(this.props.temperature && this.props.temperature.temp)} &deg;
          </Typography>
        )}
        <Tooltip title="Toggle Unit" aria-label="Toggle Unit">
          <Button className={classes.toggle} color="primary" variant="contained" onClick={this.toggleUnit}>
            {this.state.unit ? (
              <span>&#8451; / <b>&#8457;</b></span> 
            ) : ( 
              <span><b>&#8451;</b> / &#8457;</span>
            )}
          </Button>
        </Tooltip>
        <SearchLocation search={this.state.search} />
      </section>
    );
  }
}

const styles = {
  location: {
    color: '#ffffff',
    marginBottom: '15px'
  },
  description: {
    color: '#ffffff',
    marginBottom: '15px'
  },
  temperature: {
    color: '#ffffff'
  },
  toggle: {
    margin: '50px'
  }
};

const mapReduxStateToProps = (reduxState) => ({
  currentWeather: reduxState.currentWeather,
  name: reduxState.currentWeather.name,
  description: reduxState.currentWeather.weather,
  temperature: reduxState.currentWeather.main
});

export default connect(mapReduxStateToProps)(withStyles(styles)(Home));
