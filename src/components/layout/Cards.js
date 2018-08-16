import React from 'react';

import './Cards.css';

const Cards = ({ items }) => (
  <p className="cards">
    {items
      .map(item => (
        <span className="card" key={item}>
          {item}{' '}
        </span>
      ))
      .sort((a, b) => (a.key > b.key ? 1 : -1))}
  </p>
);

export default Cards;
