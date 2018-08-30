import React from 'react';
import ReactGA from 'react-ga';

import Layout from '../layout/Layout';
import Social from './Social';
import './Contact.css';

ReactGA.initialize('UA-124943031-1');
ReactGA.pageview(window.location.pathname);

const Contact = () => {
  return (
    <Layout>
      <main className="contact">
        <section className="contact__group">
          <h2 className="contact__title">
            If you want to know more about my work or <span>hire me</span>,
            please get in touch by:
          </h2>
          <div className="contact__box">
            <Social />
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Contact;
