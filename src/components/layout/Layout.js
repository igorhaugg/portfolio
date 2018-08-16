import React, { Fragment } from 'react';

import Header from './Header';
import SlideMenu from './SlideMenu';

import './Layout.css';

const Layout = props => {
  return (
    <Fragment>
      <div id="outer-container ">
        <SlideMenu
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
        />
        <div id="page-wrap">
          <main className="layout">
            <div className="layout__main">
              <Header />
              <section>{props.children}</section>
            </div>
          </main>
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
