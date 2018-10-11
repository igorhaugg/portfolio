import React from 'react';
import { css } from 'emotion';

const Cards = ({ items, cardClass }) => {
  if (cardClass === 'card--projects') {
    cardClass = card__projects;
  }
  return (
    <p className={cards}>
      {items
        .map(item => (
          <span
            className={cardClass ? `${card} ${cardClass}` : `${card}`}
            key={item}
          >
            {item}
          </span>
        ))
        .sort((a, b) => (a.key > b.key ? 1 : -1))}
    </p>
  );
};

const cards = css`
  display: flex;
  flex-wrap: wrap;
`;

const card = css`
  background: black;
  border-radius: 10px;
  color: #f4f4f4;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
`;

const card__projects = css`
  background: #8d8d8d;
  margin-left: 0;
  margin-right: 0.5rem;
`;

export default Cards;
