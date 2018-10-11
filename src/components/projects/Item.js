import React from 'react';
import { css } from 'emotion';
import { keyframes } from 'react-emotion';

import Cards from '../../common/Cards';

const Item = ({ title, image, info, itemsCard, websiteLink, githubLink }) => {
  return (
    <div className={item}>
      <div className={item__description}>
        <h2 className={item__title}>{title}</h2>
        <div>
          <p className={item__info}>{info}</p>
          <p className={item__info}>The technologies used was:</p>
        </div>
        <div className={item__cards}>
          <Cards items={itemsCard} cardClass="card--projects" />
        </div>
        <div className={item__buttons}>
          <a
            className={item__button}
            href={websiteLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            Visit
          </a>
          <a
            className={item__button}
            href={githubLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            Source Code
          </a>
        </div>
      </div>
      <div>
        <img src={image} alt={title} className={item__image} />
      </div>
    </div>
  );
};

const item = css`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  justify-content: space-between;
  width: 80%;
  @media (min-width: 900px) {
    flex-direction: row;
    margin-bottom: 10rem;
  }
`;

const item__title = css`
  color: var(--text-color-gray);
  font-size: 4rem;
  padding-bottom: 1rem;
`;

const item__image = css`
  height: auto;
  width: 100%;
  @media (min-width: 900px) {
    width: 40vw;
  }
`;

const item__description = css`
  display: flex;
  flex-direction: column;
  padding-bottom: 5rem;
  padding-right: 0;

  @media (min-width: 900px) {
    min-height: 80vh;
    padding-bottom: 0;
    padding-right: 5rem;
  }
`;

const item__info = css`
  color: var(--text-color-gray);
  font-size: 2.5rem;
  padding-bottom: 1rem;

  @media (min-width: 450px) {
    font-size: 2rem;
  }

  @media (min-width: 1100px) {
    font-size: 2.5rem;
  }
`;

const item__cards = css`
  margin-bottom: 2rem;
`;

const item__buttons = css`
  display: flex;
`;

const sheen = keyframes`
100% {
  transform: rotateZ(60deg) translate(1em, -9em);
}
`;

const item__button = css`
  border: 1px solid var(--text-color-gray);
  border-radius: 5px;
  color: var(--text-color-gray);
  font-size: 2rem;
  overflow: hidden;
  padding: 0.3rem 0;
  position: relative;
  text-align: center;
  width: 15rem;
  &:first-child {
    margin-right: 5rem;
  }
  &:after {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    bottom: -50%;
    left: -50%;
    background: linear-gradient(
      to bottom,
      rgba(229, 172, 142, 0),
      rgba(120, 120, 120, 0.5) 50%,
      rgba(229, 172, 142, 0)
    );
    transform: rotateZ(60deg) translate(-5em, 7.5em);
  }
  &:hover {
    &:after {
      animation: ${sheen} 1s forwards;
    }
  }
  &:focus {
    &:after {
      animation: ${sheen} 1s forwards;
    }
  }
  @media (min-width: 1000px) {
    padding: 1.2rem 0;
  }
`;

export default Item;
