import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Favorites.css';

class Favorites extends Component {

  componentDidMount() {
    this.getFavorites();
  }

  getFavorites = () => {
    console.log('favorites');
    this.props.dispatch({ type: 'FETCH_FAVORITES' });
  }

  render() {
    return (
      <section className="favorites">
        {this.props.reduxState.favorites.map(favorite => 
          <p key={favorite.id}>{favorite.name}</p>
        )}
      </section>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(Favorites);
