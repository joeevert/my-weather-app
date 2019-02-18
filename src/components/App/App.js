import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    lat: null,
    lng: null,
    unit: true
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

  toggleUnit = () => {
    this.setState({ unit: !this.state.unit});
  }

  toFahrenheit = (temp) => {
    let fahrenheit = (temp - 273.15) * 9/5 + 32;
    return fahrenheit;
  }

  toCelsius = (temp) => {
    let fahrenheit = temp - 273.15;
    return fahrenheit;
  }

  render() {
    console.log('toggle unit clicked', this.state.unit);
    const unit = this.state.unit;
    return (
      <div className="App">
        {/* {JSON.stringify(this.props.reduxState.currentWeather)} */}
        {JSON.stringify(this.props.reduxState.currentWeather.main)}
        <section className="App-header">
          {this.props.reduxState.currentWeather.main &&
          <div>
            <p>Location: {this.props.reduxState.currentWeather.name}</p>
            {unit ? (
              <p>Temp: {this.toFahrenheit(this.props.reduxState.currentWeather.main.temp)} &#8457;</p>
            ) : ( 
              <p>Temp: {this.toCelsius(this.props.reduxState.currentWeather.main.temp)} &#8451;</p>
            )}
            <p>Humidity: {this.props.reduxState.currentWeather.main.humidity}</p> 
          </div>}
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.toggleUnit}>&#8451; / &#8457;</button>
        </section>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(App);
