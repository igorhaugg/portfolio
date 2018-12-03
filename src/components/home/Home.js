import React from 'react';
import ReactGA from 'react-ga';
import Particles from 'react-particles-js';
import SplitText from 'react-pose-text';
import { css } from 'emotion';
import { keyframes } from 'react-emotion';

import Layout from '../../common/Layout';
import ProfileImage from '../_images/igor.jpg';

ReactGA.initialize('UA-124943031-1');
ReactGA.pageview(window.location.pathname);

const particlesOptions = {
  particles: {
    number: {
      value: 20,
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
      <Particles className={home__particles} params={particlesOptions} />
      <section className={home}>
        <div className={home__info}>
          <h2 className={home__text}>
            <SplitText
              initialPose="exit"
              pose="enter"
              charPoses={charPoses}
              wordPoses={wordPoses}
            >
              Hi, I'm Igor Haugg.
            </SplitText>
          </h2>
          <p className={home__description}>
            Full Stack Freelancer Web Developer.
          </p>
          <img src={ProfileImage} alt="Profile" className={home__image} />
        </div>
      </section>
    </Layout>
  );
};

const home__particles = css`
  background-color: #000;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
`;

const home = css`
  min-height: calc(100vh - var(--header-size));
  min-width: 100vw;
`;

const home__info = css`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - var(--header-size));
`;

const home__text = css`
  color: white;
  font-size: 3rem;
  @media (min-width: 400px) {
    font-size: 4rem;
  }
`;

const hiding = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const home__description = css`
  animation: 1s 1s linear ${hiding} forwards;
  color: white;
  font-size: 2rem;
  opacity: 0;
  text-align: center;
  @media (min-width: 400px) {
    font-size: 2.5rem;
  }
`;

const home__image = css`
  animation: 1s 2s linear ${hiding} forwards;
  border-radius: 50%;
  height: 25rem;
  margin-top: 2rem;
  opacity: 0;
  width: 25rem;
  @media (min-width: 400px) {
    font-size: 2.5rem;
  }
`;

export default Home;
