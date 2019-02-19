import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SearchLocation.css';


class SearchLocation extends Component {

  state = {
    search: ''
  }

  handleChange = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    console.log('state', this.state.search);
    
    return (
      <section className="search">
        <input 
          onChange={this.handleChange('search')}
          name="search" 
          value={this.state.search} 
          placeholder="Search..."
        />          
      </section>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(SearchLocation);
