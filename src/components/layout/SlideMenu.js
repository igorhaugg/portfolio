import React from 'react';
import { pushRotate as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';

import Icons from './Icons';
import './SlideMenu.css';

const SlideMenu = () => {
  return (
    <Menu menuClassName={'slide-menu'}>
      <NavLink
        to="/"
        exact
        activeClassName="sidebar__active"
        className="sidebar__item"
      >
        <li>
          <span>Home</span>
        </li>
      </NavLink>
      <NavLink
        to="/websites"
        activeClassName="sidebar__active"
        className="sidebar__item"
      >
        <li>
          <span>Websites</span>
        </li>
      </NavLink>
      <NavLink
        to="/projects"
        activeClassName="sidebar__active"
        className="sidebar__item"
      >
        <li>
          <span>Projects</span>
        </li>
      </NavLink>
      <NavLink
        to="/contact"
        activeClassName="sidebar__active"
        className="sidebar__item"
      >
        <li>
          <span>Contact</span>
        </li>
      </NavLink>
      <div className="sidebar__icons">
        <Icons />
      </div>
    </Menu>
  );
};

export default SlideMenu;
