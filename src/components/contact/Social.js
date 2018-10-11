import React, { Component } from 'react';

import CloseImg from '../../common/_images/close.png';
import OpenImg from '../../common/_images/open.png';
import FacebookLogo from '../../common/_images/facebook-small.png';
import GithubLogo from '../../common/_images/github.png';
import CodepenLogo from '../../common/_images/codepen.png';
import TwitterLogo from '../../common/_images/twitter-small.png';
import LinkedinLogo from '../../common/_images/linkedin-small.png';
import ContactLogo from '../../common/_images/contact.png';

import './Social.css';

class Social extends Component {
  state = {
    open: false
  };
  toggleFunc = () => {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
  };
  render() {
    let styleItem;
    styleItem = this.state.open ? 'social__item visible' : 'social__item';
    return (
      <div className="social">
        <div className="social__group">
          <a
            className={styleItem + ' item6'}
            href="https://www.linkedin.com/in/igor-haugg-109b9292"
            rel="noopener noreferrer"
            target="_blank"
            title="https://www.linkedin.com/in/igor-haugg-109b9292"
          >
            <img
              src={LinkedinLogo}
              alt="LinkedinLogo logo"
              className="social__img--small"
            />
          </a>
          <a
            className={styleItem + ' item5'}
            href="https://github.com/igorhaugg"
            rel="noopener noreferrer"
            target="_blank"
            title="https://github.com/igorhaugg"
          >
            <img src={GithubLogo} alt="Github logo" className="social__img" />
          </a>
        </div>
        <div className="social__group">
          <a
            className={styleItem + ' item1'}
            href="mailto:igor-haugg@hotmail.com"
            title="igor-haugg@hotmail.com"
          >
            <img
              src={ContactLogo}
              alt="Toggle"
              className="social__img--small"
            />
          </a>
          <a className="social__item open visible" onClick={this.toggleFunc}>
            <img
              src={this.state.open ? CloseImg : OpenImg}
              alt="Toggle"
              className="social__img--small"
            />
          </a>
          <a
            className={styleItem + ' item4'}
            href="https://twitter.com/igorhaugg"
            rel="noopener noreferrer"
            target="_blank"
            title="https://twitter.com/igorhaugg"
          >
            <img
              src={TwitterLogo}
              alt="Twitter logo"
              className="social__img--small"
            />
          </a>
        </div>
        <div className="social__group">
          <a
            className={styleItem + ' item2'}
            href="https://www.facebook.com/igor.haugg"
            rel="noopener noreferrer"
            target="_blank"
            title="https://www.facebook.com/igor.haugg"
          >
            <img
              src={FacebookLogo}
              alt="Facebook logo"
              className="social__img"
            />
          </a>
          <a
            className={styleItem + ' item3'}
            href="https://codepen.io/igorhaugg"
            rel="noopener noreferrer"
            target="_blank"
            title="https://codepen.io/igorhaugg"
          >
            <img src={CodepenLogo} alt="Codepen logo" className="social__img" />
          </a>
        </div>
      </div>
    );
  }
}

export default Social;
