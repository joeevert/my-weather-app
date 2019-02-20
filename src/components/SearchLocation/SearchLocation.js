import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './SearchLocation.css';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import { Paper, InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

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
    this.setState({ search: '' });
  }

  render() {
    const { classes } = this.props;
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <Paper className={classes.paper} elevation={1}>
            <InputBase 
              className={classes.input} 
              type="text" 
              onChange={this.handleChange('search')}
              name="search" 
              value={this.state.search} 
              placeholder="Search..."
            />
            <IconButton className={classes.iconButton} aria-label="Search" type="submit">
              <SearchIcon />
            </IconButton>
          </Paper>
        </form>
      </section>
    );
  }
}

const styles = {
  paper: {
    padding: '4px 2px',
    display: 'flex',
    alignItems: 'center',
    margin: 'auto',
    width: '300px',
  },
  input: {
    marginLeft: '10px',
    flex: 1,
  },
  submit: {
    padding: '10px',
  }
};


const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(SearchLocation));