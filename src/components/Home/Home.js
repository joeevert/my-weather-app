import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.css';
import Loading from '../Loading/Loading';
import Header from '../Header/Header';
import SearchLocation from '../SearchLocation/SearchLocation';
import Footer from '../Footer/Footer';

// fa icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faList, faCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faList, faCircle);

class Home extends Component {

  state = {
    lat: undefined,
    lng: undefined,
    cityID: undefined,
    unit: true
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

  addFavorite = (id) => {
    console.log('cityID', id);
    this.props.dispatch({ type: 'ADD_TO_FAVORITES', payload: id });
  }

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
    const unit = this.state.unit;
    return (
      <section>
        {/* <Header /> */}
        {/* {JSON.stringify(this.props.reduxState.currentWeather)} */}
        {/* <section> */}
          {!this.state.lat && <Loading />}
          {this.props.reduxState.currentWeather.main &&
          <div>
            <h1>{this.props.reduxState.currentWeather.name}</h1>
              {this.props.reduxState.currentWeather.weather && this.props.reduxState.currentWeather.weather.map( (weather, index) => 
              <p key={index} className="description">{weather.main}</p>)}
            <div className="temperature-bg">
            {unit ? (
              <h1 className="temperature">{this.toFahrenheit(this.props.reduxState.currentWeather.main.temp)} &deg;</h1>
            ) : ( 
              <h1 className="temperature">{this.toCelsius(this.props.reduxState.currentWeather.main.temp)} &deg;</h1>
            )}
            </div>
          </div>}
          <button className="toggle-btn" onClick={this.toggleUnit}>
            {this.state.unit ? (
              <span>&#8451; / <b>&#8457;</b></span> 
            ) : ( 
              <span><b>&#8451;</b> / &#8457;</span>
            )}
          </button>
          <br />
          <button className="toggle-btn" onClick={this.getGeoLocation}>WEATHER FOR CURRENT LOCATION</button>
          {/* <SearchLocation /> */}
          {/* <Favorites /> */}
          {/* <Footer favorites={this.props.reduxState.favorites} /> */}
        {/* </section> */}
      </section>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(Home);
