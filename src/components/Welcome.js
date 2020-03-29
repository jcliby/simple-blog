import React, { Component } from 'react';

import './Welcome.css';
import Indicator from '../images/indicator.svg';

class Welcome extends Component {
  state = {
    isTop: true
  };

  componentDidMount() {
    // document.addEventListener('scroll', () => {
    //   const isTop = window.scrollY < 100;
    //   const scroll = Math.round(
    //     (window.pageYOffset / window.innerHeight) * 100
    //   );
    //   if (isTop !== this.state.isTop && scroll > 82) {
    //     console.log('here');
    //     this.setState({ isTop });
    //   }
    // });
  }

  render() {
    const { isTop } = this.state;

    if (isTop) {
      return (
        <div id="welcome-container" className="container">
          <h1 id="welcome-title">Blog</h1>
          <p className="info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <img
            src={Indicator}
            id="indicator"
            alt="An upside down triangle indicating to scroll down the page."
          />
        </div>
      );
    } else {
      return (
        <div id="welcome-small" className="container">
          <h1 id="welcome-title-small">Blog</h1>
        </div>
      );
    }
  }
}

export default Welcome;
