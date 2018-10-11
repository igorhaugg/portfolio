import React, { Fragment } from 'react';
import { css } from 'emotion';

import FacebookLogo from './_images/facebook.png';
import InstagramLogo from './_images/instagram.png';
import TwitterLogo from './_images/twitter.png';
import CodepenLogo from './_images/codepen.png';
import GithubLogo from './_images/github.png';
import LinkedinLogo from './_images/linkedin.png';

const Icons = () => (
  <Fragment>
    <a
      href="https://www.facebook.com/igor.haugg"
      className={icon}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={FacebookLogo} alt="Facebook logo" />
    </a>
    <a
      href="https://www.instagram.com/igorhaugg/"
      className={icon}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={InstagramLogo} alt="Instagram logo" />
    </a>
    <a
      href="https://twitter.com/igorhaugg"
      className={icon}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={TwitterLogo} alt="Twitter logo" />
    </a>
    <a
      href="https://codepen.io/igorhaugg/"
      className={icon}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={CodepenLogo} alt="Codepen logo" />
    </a>
    <a
      href="https://github.com/igorhaugg"
      className={icon}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={GithubLogo} alt="Github logo" />
    </a>
    <a
      href="https://www.linkedin.com/in/igor-haugg-109b9292/"
      className={icon}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={LinkedinLogo} alt="Linkedin logo" />
    </a>
  </Fragment>
);

const icon = css`
  height: 2.5rem;
  padding: 0 0.5rem;
  transition: transform 0.5s cubic-bezier(0.6, -0.505, 0.51, 1.65);
  > img {
    height: inherit;
  }
  &:hover {
    transform: scale(1.2);
  }
`;

export default Icons;
