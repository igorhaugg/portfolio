import React from 'react';
import { css } from 'emotion';

import Cards from '../../common/Cards';

const Item = ({ title, image, imageMob, info, itemsCard, visitLink }) => {
  return (
    <section className={item__group}>
      <h2 className={item__title}>{title}</h2>
      <div className={item}>
        <div className={item__images}>
          <img className={item__image} alt={title} src={image} />
          <img className={item__imageMob} alt={title} src={imageMob} />
        </div>
        <div className={item__description}>
          <p>{info}</p>
          <p>This work was developed using the follow technologies:</p>
          <Cards items={itemsCard} />

          <a
            rel="noopener noreferrer"
            className={item__button}
            href={visitLink}
            target="_blank"
          >
            Visit
          </a>
        </div>
      </div>
    </section>
  );
};

const item = css`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 0;
  width: 95%;
  @media (min-width: 950px) {
    flex-direction: row;
    width: 80%;
  }
`;

const item__group = css`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
`;

const item__title = css`
  font-size: 3rem;
`;

const item__images = css`
  align-items: center;
  display: flex;
  flex-basis: 95%;
  justify-content: center;
  @media (min-width: 950px) {
    flex-basis: 50%;
  }
`;

const item__image = css`
  height: auto;
  transition: transform 0.5s linear;
  width: 50%;
  &:hover {
    transform: scale(1.05, 1.1);
  }
  @media (min-width: 950px) {
    width: 70%;
  }
`;

const item__imageMob = css`
  height: auto;
  transition: transform 0.5s linear;
  width: 20%;
  &:hover {
    transform: scale(1.05, 1.1);
  }
  @media (min-width: 950px) {
    width: 30%;
  }
`;

const item__description = css`
  display: flex;
  flex-basis: 95%;
  flex-direction: column;
  flex-wrap: wrap;
  p {
    padding: 1rem 0;
  }
  @media (min-width: 950px) {
    flex-basis: 50%;
  }
`;

const item__button = css`
  border: 2px solid #000;
  border-radius: 5px;
  color: #000;
  font-weight: bold;
  letter-spacing: 2px;
  margin-top: 1rem;
  padding: 1.1rem 0;
  text-align: center;
  transition: background-color 0.5s linear, color 0.5s linear;
  width: 10rem;
  &:hover {
    background-color: #000;
    color: #f4f4f4;
  }
`;

export default Item;
