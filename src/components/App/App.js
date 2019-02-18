import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    lat: null,
    lng: null
  }

  componentDidMount() {
    this.getGeoLocation();
  }

  // sets position to use for getting the weater at your current location
  getGeoLocation = async () => {
    try { 
        await navigator.geolocation.getCurrentPosition((currentPosition) => {
        console.log('something', currentPosition.coords);
        this.setState({
          ...this.state,
          lat: currentPosition.coords.latitude,
          lng: currentPosition.coords.longitude
        })
        this.props.dispatch({ type: 'FETCH_CURRENT_WEATHER', payload: this.state});
      }) 
    }
    catch (error) {
      console.log('ERROR in getGeoLocation:', error)
    }
  }

  render() {
    return (
      <div className="App">
        {JSON.stringify(this.props.reduxState.currentWeather)}
        {JSON.stringify(this.props.reduxState.currentWeather.name)}
        {JSON.stringify(this.state)}
        <header className="App-header">
          <p>Location: {this.props.reduxState.currentWeather.name}</p>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(App);
