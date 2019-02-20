import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import './Header.css';

const today = new Date();

const Header = () => (
  <header>
    <p className="date">{moment(today).format('LLL')}</p>
  </header>
);

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(Header);
