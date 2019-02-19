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

  // dispatches location search query
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'FETCH_SEARCH_RESULTS', payload: this.state });
    this.setState({ search: '' })
  }

  render() {
    return (
      <section className="search">
        <form onSubmit={this.handleSubmit}>
          <input
            className="search-field"
            type="text" 
            onChange={this.handleChange('search')}
            name="search" 
            value={this.state.search} 
            placeholder="Search..."
          />
          <button
            className="submit-btn" 
            type="submit"
          >
            SUBMIT
          </button>
        </form>
      </section>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(SearchLocation);
