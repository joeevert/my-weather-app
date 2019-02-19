import React from 'react';
import TWC_logo from './The_Weather_Channel_logo.svg'
import './Footer.css';

const Footer = () => (
  <footer>
    <a href="https://weather.com/" target="_blank" rel="noopener noreferrer">
      <img className="logo" src={TWC_logo} />
    </a>
    <span>highlight the tab to cycle through locations</span>
    <button>Show Favorites</button>
  </footer>
);

export default Footer;
