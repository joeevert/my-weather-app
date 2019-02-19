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

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'FETCH_SEARCH_RESULTS', payload: this.state });
  }

  render() {
    console.log('state', this.state.search);
    
    return (
      <section className="search">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text" 
            onChange={this.handleChange('search')}
            name="search" 
            value={this.state.search} 
            placeholder="Search..."
          />
          <br />
          <input 
            type="submit"
            value="SUBMIT"
          />
        </form>
      </section>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(SearchLocation);
