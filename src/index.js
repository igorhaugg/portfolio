import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'emotion';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1.6rem;
    line-height: 1.6;
    overflow-x: hidden;
  }

  :root {
    --header-size: 8rem;
    --text-color-gray: #727272;
  }

  button {
    border: none;
    cursor: pointer;
    outline: none;
    text-decoration: none;
  }

  button:disabled {
    cursor: default;
  }

  li {
    list-style: none;
    outline: none;
  }

  a {
    border: none;
    color: inherit;
    cursor: pointer;
    text-decoration: none;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  li {
    margin: 0;
    padding: 0;
  }

  input,
  select {
    border: none;
    outline: none;
  }

  input:invalid {
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .full-centralize {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .full-screen {
    min-height: 100vh;
    min-width: 100vw;
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
