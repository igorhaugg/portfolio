import React from 'react';
import { css } from 'emotion';
import { keyframes } from 'react-emotion';

const Spinner = () => (
  <div className={spinner}>
    <div className={dot1} />
    <div className={dot2} />
  </div>
);

const sk_rotate = keyframes`
  100% {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
`;

const sk_bounce = keyframes`
  0%,
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
`;

const spinner = css`
  animation: ${sk_rotate} 2s infinite linear;
  height: 40px;
  margin: 25px auto;
  position: relative;
  text-align: center;
  width: 40px;
`;

const dot1 = css`
  animation: ${sk_bounce} 2s infinite ease-in-out;
  background-color: #333;
  border-radius: 100%;
  display: inline-block;
  height: 60%;
  position: absolute;
  top: 0;
  width: 60%;
`;

const dot2 = css`
  animation: ${sk_bounce} 2s infinite ease-in-out;
  animation-delay: -1s;
  background-color: #333;
  border-radius: 100%;
  bottom: 0;
  display: inline-block;
  height: 60%;
  position: absolute;
  top: auto;
  width: 60%;
`;

export default Spinner;
