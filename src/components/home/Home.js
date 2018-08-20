import React from 'react';
import Particles from 'react-particles-js';
import SplitText from 'react-pose-text';

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

const charPoses = {
  exit: { y: 20, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    transition: ({ charInWordIndex }) => ({
      type: 'spring',
      delay: charInWordIndex * 30,
      stiffness: 500 + charInWordIndex * 150,
      damping: 10 - charInWordIndex * 1
    })
  },
  drag: {
    y: 0,
    transition: ({ charInWordIndex }) => ({
      type: 'spring',
      velocity: 100 * Math.sin(1 + charInWordIndex),
      damping: 0
    })
  },
  dragEnd: {
    y: 0,
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 1000
    }
  }
};

const wordPoses = {
  draggable: true
};

const Home = () => {
  return (
    <Layout>
      <Particles className="particles" params={particlesOptions} />
      <section className="home">
        <div className="home__info">
          <h2 className="home__text">
            <SplitText
              initialPose="exit"
              pose="enter"
              charPoses={charPoses}
              wordPoses={wordPoses}
            >
              Hi, I'm Igor Haugg.
            </SplitText>
          </h2>
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
