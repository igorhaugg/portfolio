import React from 'react';
import { css } from 'emotion';
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
        activeClassName={sidebar__active}
        className={sidebar__item}
      >
        <span>Home</span>
      </NavLink>
      <NavLink
        to="/websites"
        activeClassName={sidebar__active}
        className={sidebar__item}
      >
        <span>Websites</span>
      </NavLink>
      <NavLink
        to="/projects"
        activeClassName={sidebar__active}
        className={sidebar__item}
      >
        <span>Projects</span>
      </NavLink>
      <NavLink
        to="/contact"
        activeClassName={sidebar__active}
        className={sidebar__item}
      >
        <span>Contact</span>
      </NavLink>
      <div className={sidebar__icons}>
        <Icons />
      </div>
    </Menu>
  );
};

const sidebar__item = css`
  border-radius: 5px;
  color: inherit;
  font-size: 1.7rem;
  font-weight: 600;
  margin: 0.5rem;
  padding: 1.5rem 0 1.5rem 2rem;
  text-transform: uppercase;
  transition: background 0.15s ease-in-out;
  width: 85%;
  > li {
    display: flex;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;

const sidebar__active = css`
  background: rgba(0, 0, 0, 0.2);
`;

const sidebar__icons = css`
  align-items: center;
  border: 1px solid transparent;
  border-top-color: rgba(0, 0, 0, 0.2);
  display: flex !important;
  justify-content: center;
  margin-top: 1rem;
  padding-top: 1.5rem;
`;

export default SlideMenu;
