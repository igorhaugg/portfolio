import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Icons from './Icons';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__logo">
          <Link to="/">Igor Haugg</Link>
        </div>
        <ul className="header__items">
          <li className="header__item">
            <NavLink exact to="/" activeClassName="header__active">
              Home
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink to="/websites" activeClassName="header__active">
              Websites
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink to="/projects" activeClassName="header__active">
              Projects
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink to="/contact" activeClassName="header__active">
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="header__icons">
          <Icons />
        </div>
      </nav>
    </header>
  );
};

export default Header;
