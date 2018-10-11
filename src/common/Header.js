import React from 'react';
import { css } from 'emotion';
import { Link, NavLink } from 'react-router-dom';

import Icons from './Icons';

const Header = () => {
  return (
    <header className={header}>
      <nav className={header__nav}>
        <div className={header__logo}>
          <Link to="/">Igor Haugg</Link>
        </div>
        <ul className={header__items}>
          <li className={header__item}>
            <NavLink exact to="/" activeClassName={header__active}>
              Home
            </NavLink>
          </li>
          <li className={header__item}>
            <NavLink to="/websites" activeClassName={header__active}>
              Websites
            </NavLink>
          </li>
          <li className={header__item}>
            <NavLink to="/projects" activeClassName={header__active}>
              Projects
            </NavLink>
          </li>
          <li className={header__item}>
            <NavLink to="/contact" activeClassName={header__active}>
              Contact
            </NavLink>
          </li>
        </ul>
        <div className={header__icons}>
          <Icons />
        </div>
      </nav>
    </header>
  );
};

const header = css`
  align-items: center;
  background-color: #000;
  box-shadow: 1px 1px 5px rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  min-height: var(--header-size);
  z-index: 10;
  width: 100vw;
`;

const header__nav = css`
  align-items: center;
  color: rgba(255, 255, 255, 0.95);
  display: flex;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  justify-content: center;
  width: 90%;

  @media (min-width: 770px) {
    justify-content: space-between;
  }

  @media (min-width: 970px) {
    width: 75%;
  }
`;

const header__logo = css`
  font-weight: 900;
  text-transform: uppercase;
`;

const header__items = css`
  display: none;
  justify-content: flex-start;
  @media (min-width: 770px) {
    display: flex;
  }
`;

const header__active = css`
  border-bottom: 2px solid white;
`;

const header__icons = css`
  align-items: center;
  display: none;
  justify-content: center;
  @media (min-width: 770px) {
    display: flex;
  }
`;

const header__item = css`
  cursor: pointer;
  padding: 0 1.5rem;
  position: relative;
  > a {
    &:hover:not(.${header__active})::before {
      transform: scaleX(1);
      visibility: visible;
    }
    &:focus:not(.${header__active})::before {
      transform: scaleX(1);
      visibility: visible;
    }
    &::before {
      background: white;
      bottom: 0;
      content: '';
      height: 2px;
      left: 10px;
      position: absolute;
      transform: scaleX(0);
      transition: 0.25s linear;
      visibility: hidden;
      width: 75%;
    }
  }
`;

export default Header;
