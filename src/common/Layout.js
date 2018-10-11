import React, { Fragment } from 'react';
import { css } from 'emotion';

import Header from './Header';
import SlideMenu from './SlideMenu';

const Layout = props => {
  return (
    <Fragment>
      <div id="outer-container ">
        <SlideMenu
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
        />
        <div id="page-wrap">
          <main className={layout}>
            <div className={layout__main}>
              <Header />
              <section>{props.children}</section>
            </div>
          </main>
        </div>
      </div>
    </Fragment>
  );
};

const layout = css`
  display: flex;
`;

const layout__main = css`
  display: flex;
  flex-direction: column;
  margin-left: 0;
`;

export default Layout;
