import React from 'react';
import Particles from 'react-particles-js';

import Layout from '../layout/Layout';
import ProfileImage from './images/igor.jpg';
import './Home.css';

const particlesOptions = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

const Home = () => {
  return (
    <Layout>
      <Particles className="particles" params={particlesOptions} />
      <section className="home">
        <div className="home__info">
          <h2 className="home__text">Hi, I'm Igor Haugg.</h2>
          <p className="home__description">
            Full Stack Freelancer Web Developer.
          </p>
          <img src={ProfileImage} alt="Profile" className="main__image" />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
