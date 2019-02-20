import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Favorites.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchLocation from '../SearchLocation/SearchLocation';

class Favorites extends Component {

  state = {
    lat: undefined,
    lng: undefined,
    cityID: undefined,
    unit: true
  }

  // get your saved favorites
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_FAVORITES' });
  }

  // will view the weather for the location that you have clicked
  viewThisLocation = (cityID) => {
    console.log('cityID', cityID);
  }

  // toggles between fahrenheit and celsius
  toggleUnit = () => {
    this.setState({ unit: !this.state.unit});
  }

  removeLocation = (id) => {
    console.log('id', id);
    this.props.dispatch({ type: 'REMOVE_LOCATION_FROM_FAVORITES', payload: id });
  }

  render() {
    const unit = this.state.unit;
    console.log('unit', unit);
    
    return (
      <section className="favorites">
        <ul>
          {this.props.reduxState.favorites.map(favorite => 
            <li key={favorite.id}>
              <div className="list-name" onClick={() => this.viewThisLocation(favorite.cityID)}>{favorite.name}</div>
              <FontAwesomeIcon className="remove-btn" icon="minus-circle" onClick={() => this.removeLocation(favorite.id)}/>
            </li>
          )}
        </ul>
        <SearchLocation />
        <button className="toggle-btn" onClick={this.toggleUnit}>
          {unit ? (
            <span>&#8451; / <b>&#8457;</b></span> 
          ) : ( 
            <span><b>&#8451;</b> / &#8457;</span>
          )}
        </button>
        <FontAwesomeIcon className="favorites-btn" onClick={() => this.addFavorite(this.props.reduxState.currentWeather)} icon="plus-circle" />
        {/* <button className="toggle-btn" onClick={() => this.addFavorite(this.props.reduxState.currentWeather)}>ADD TO FAVORITES</button> */}
      </section>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(Favorites);
