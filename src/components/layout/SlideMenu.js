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
        <span>Home</span>
      </NavLink>
      <NavLink
        to="/websites"
        activeClassName="sidebar__active"
        className="sidebar__item"
      >
        <span>Websites</span>
      </NavLink>
      <NavLink
        to="/projects"
        activeClassName="sidebar__active"
        className="sidebar__item"
      >
        <span>Projects</span>
      </NavLink>
      <NavLink
        to="/contact"
        activeClassName="sidebar__active"
        className="sidebar__item"
      >
        <span>Contact</span>
      </NavLink>
      <div className="sidebar__icons">
        <Icons />
      </div>
    </Menu>
  );
};

export default SlideMenu;
