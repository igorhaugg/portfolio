import React from 'react';

import Layout from '../layout/Layout';

// import FacebookLogo from '../layout/images/facebook.png';
// import InstagramLogo from '../layout/images/instagram.png';
// import TwitterLogo from '../layout/images/twitter.png';
// import CodepenLogo from '../layout/images/codepen.png';
// import GithubLogo from '../layout/images/github.png';
// import LinkedinLogo from '../layout/images/linkedin.png';
import './Contact.css';

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
            <span className="contact__link">igor-haugg@hotmail.com</span>
            <span>
              <a
                className="contact__link"
                href="https://www.facebook.com/igor.haugg"
                rel="noopener noreferrer"
                target="_blank"
              >
                facebook.com/igor.haugg
              </a>
            </span>
            <span>
              <a
                className="contact__link"
                href="https://www.instagram.com/igorhaugg"
                rel="noopener noreferrer"
                target="_blank"
              >
                instagram.com/igorhaugg
              </a>
            </span>
            <span>
              <a
                className="contact__link"
                href="https://twitter.com/igorhaugg"
                rel="noopener noreferrer"
                target="_blank"
              >
                twitter.com/igorhaugg
              </a>
            </span>
            <span>
              <a
                className="contact__link"
                href="https://codepen.io/igorhaugg"
                rel="noopener noreferrer"
                target="_blank"
              >
                codepen.io/igorhaugg
              </a>
            </span>
            <span>
              <a
                className="contact__link"
                href="https://github.com/igorhaugg"
                rel="noopener noreferrer"
                target="_blank"
              >
                github.com/igorhaugg
              </a>
            </span>
            <span>
              <a
                className="contact__link"
                href="https://www.linkedin.com/in/igor-haugg-109b9292"
                rel="noopener noreferrer"
                target="_blank"
              >
                linkedin.com/in/igorhaugg
              </a>
            </span>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Contact;
