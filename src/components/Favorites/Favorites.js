import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Favorites.css';
import SearchLocation from '../SearchLocation/SearchLocation';

// import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


class Favorites extends Component {

  state = {
    lat: undefined,
    lng: undefined,
    cityID: undefined,
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

  // removes location from your favorites list
  removeLocation = (id) => {
    console.log('id', id);
    this.props.dispatch({ type: 'REMOVE_LOCATION_FROM_FAVORITES', payload: id });
  }

  render() {
    return (
      <section className="favorites">
        <ul>
          {this.props.reduxState.favorites.map(favorite => 
            <li key={favorite.id}>
              {/* <div className="list-name"> */}
                <div onClick={() => this.viewThisLocation(favorite.cityID)}>{favorite.name}</div>
                <Fab className="remove-btn" color="secondary" onClick={() => this.removeLocation(favorite.id)}>
                  <RemoveIcon />
                </Fab>
              {/* </div> */}
            </li>
          )}
        </ul>
        <SearchLocation />
        <Fab className="remove-btn" color="secondary" onClick={() => this.addFavorite(this.props.reduxState.currentWeather)} >
          <AddIcon />
        </Fab>
      </section>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(Favorites);
