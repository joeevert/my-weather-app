import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import Header from '../Header/Header';
import Favorites from '../Favorites/Favorites';
import Footer from '../Footer/Footer';

// material-ui
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import muiTheme from '../Theme/muiTheme';

// fa icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faList, faCircle, faLocationArrow, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faList, faCircle, faLocationArrow, faPlusCircle, faMinusCircle);

class App extends Component {

  render() {
    return (
      <Router>
        <MuiThemeProvider theme={muiTheme}>
        <main className="App">
          <CssBaseline />
          <Header />
          <div>
            <Switch>
              {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
              <Redirect exact from="/" to="/home" />
              <Route
                exact
                path="/home"
                component={Home}
              />
              <Route
                exact
                path="/favorites"
                component={Favorites}
              />
              {/* If none of the other routes matched, we will show a 404. */}
              <Route render={() => <h1>404</h1>} />
            </Switch>
          </div>
        <Footer favorites={this.props.reduxState.favorites} />
        </main>
        </MuiThemeProvider>
      </Router>
  )}
}

const mapStateToProps = reduxState => ({ reduxState });

export default connect(mapStateToProps)(App);

