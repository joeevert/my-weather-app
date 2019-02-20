import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import TWC_logo from './The_Weather_Channel_logo.svg';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends Component {

  viewFavorites = () => {
    this.props.history.push('/favorites');
  }

  goHome = () => {
    this.props.history.push('/home');
  }

  render() {
    return (
      <footer>
        <section className="container">
          <div className="box">
            <a className="links" href="https://weather.com/" target="_blank" rel="noopener noreferrer">
              <img className="logo" src={TWC_logo} alt="The Weather Channel"/>
            </a>
          </div>
          <div className="box">
            <FontAwesomeIcon className="current-location" icon="location-arrow" onClick={this.goHome}/>
            {this.props.reduxState.favorites.map( favorite => 
              <FontAwesomeIcon key={favorite.id} icon="circle" />
            )}
          </div>
          <div className="box">
            <FontAwesomeIcon className="favorites-btn" onClick={this.viewFavorites} icon="list" />
          </div>
        </section>
      </footer>
  )}
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(withRouter(Footer));
