import React from 'react';

import './Welcome.css';
import Indicator from '../images/indicator.svg';

const Welcome = () => {
  return (
    <div id="welcome-container">
      <h1 id="welcome-title">Blog</h1>
      <p className="info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <img src={Indicator} id="indicator" />
    </div>
  );
};

export default Welcome;
