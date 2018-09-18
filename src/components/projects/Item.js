import React from 'react';

import Cards from '../layout/Cards';

import './Item.css';

const Item = ({ title, image, info, itemsCard, websiteLink, githubLink }) => {
  return (
    <div className="item">
      <div className="item__description">
        <h2 className="item__title">{title}</h2>
        <div>
          <p className="item__info">{info}</p>
          <p className="item__info">The technologies used was:</p>
        </div>
        <div className="item__cards">
          <Cards items={itemsCard} cardClass="card--projects" />
        </div>
        <div className="item__buttons">
          <a
            className="item__button"
            href={websiteLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            Visit
          </a>
          <a
            className="item__button"
            href={githubLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            Source Code
          </a>
        </div>
      </div>
      <div>
        <img src={image} alt={title} className="item__image" />
      </div>
    </div>
  );
};

export default Item;
