import React from 'react';
import ReactGA from 'react-ga';
import { css } from 'emotion';

import Layout from '../../common/Layout';
import Social from './Social';

import BackgroundImageLined from '../_images/lined-paper.png';

ReactGA.initialize('UA-124943031-1');
ReactGA.pageview(window.location.pathname);

const Contact = () => {
  return (
    <Layout>
      <main className={contact}>
        <section className={contact__group}>
          <h2 className={contact__title}>
            If you want to know more about my work or <span>hire me</span>,
            please get in touch by:
          </h2>
          <div className={contact__box}>
            <Social />
          </div>
        </section>
      </main>
    </Layout>
  );
};

const contact = css`
  background-image: url(${BackgroundImageLined});
  min-height: calc(100vh - var(--header-size));
  min-width: 100vw;
`;

const contact__group = css`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
`;

const contact__box = css`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 2rem;
  width: 90%;
  @media (min-width: 700px) {
    width: 50%;
  }
`;

const contact__title = css`
  padding: 0.5rem 0;
  text-align: center;
  width: 80%;
  span {
    text-decoration: underline;
    text-shadow: 1px 1px #c4c4c4;
  }
`;

export default Contact;
