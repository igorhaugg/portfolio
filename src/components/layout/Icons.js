import React, { Fragment } from 'react';

import FacebookLogo from './images/facebook.png';
import InstagramLogo from './images/instagram.png';
import TwitterLogo from './images/twitter.png';
import CodepenLogo from './images/codepen.png';
import GithubLogo from './images/github.png';
import LinkedinLogo from './images/linkedin.png';

import './Icons.css';

const Icons = () => (
  <Fragment>
    <a
      href="https://www.facebook.com/igor.haugg"
      className="icon"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={FacebookLogo} alt="Facebook logo" />
    </a>
    <a
      href="https://www.instagram.com/igorhaugg/"
      className="icon"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={InstagramLogo} alt="Instagram logo" />
    </a>
    <a
      href="https://twitter.com/igorhaugg"
      className="icon"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={TwitterLogo} alt="Twitter logo" />
    </a>
    <a
      href="https://codepen.io/igorhaugg/"
      className="icon"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={CodepenLogo} alt="Codepen logo" />
    </a>
    <a
      href="https://github.com/igorhaugg"
      className="icon"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={GithubLogo} alt="Github logo" />
    </a>
    <a
      href="https://www.linkedin.com/in/igor-haugg-109b9292/"
      className="icon"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={LinkedinLogo} alt="Linkedin logo" />
    </a>
  </Fragment>
);

export default Icons;
