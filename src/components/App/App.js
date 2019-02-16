import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_CURRENT_WEATHER'});
  }
  
  render() {
    return (
      <div className="App">
        {JSON.stringify(this.props.reduxState.currentWeather)}
        {JSON.stringify(this.props.reduxState.currentWeather.name)}

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
