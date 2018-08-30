import React from 'react';
import ReactGA from 'react-ga';

import Cards from '../layout/Cards';
import Layout from '../layout/Layout';

import TiagoImage from './images/tiago.png';
import TiagoImageMob from './images/tiagomob.png';
import Delicada from './images/delicada.png';
import DelicadaMob from './images/delicadamob.png';
import './Websites.css';

ReactGA.initialize('UA-124943031-1');
ReactGA.pageview(window.location.pathname);

const tiago = [
  'Javascript',
  'Css',
  'Sass',
  'React',
  'Redux',
  'Webpack',
  'Firebase'
];

const delicada = [
  'Javascript',
  'Css',
  'Sass',
  'React',
  'Redux',
  'Webpack',
  'Firebase'
];

const Websites = () => {
  return (
    <Layout>
      <main className="websites">
        <section className="websites__group">
          <h2 className="websites__title">Tiago Pimentel</h2>
          <div className="websites__item">
            <div className="websites__images">
              <img
                className="websites__img"
                alt="Tiago Website"
                src={TiagoImage}
              />
              <img
                className="websites__img websites__img--mobile"
                alt="Tiago Website Mobile"
                src={TiagoImageMob}
              />
            </div>
            <div className="websites__description">
              <p>
                Website developed to show the work of the coach Tiago Pimentel.
                He teaches martial arts such as Muai thay/ Boxing and Brazilian
                Jiu-Jitsu.
              </p>
              <p>This work was developed using the follow technologies:</p>
              <Cards items={tiago} />

              <a
                rel="noopener noreferrer"
                className="websites__button"
                href="https://tiago-pimentel.firebaseapp.com"
                target="_blank"
              >
                Visit
              </a>
            </div>
          </div>
        </section>

        <section className="websites__group">
          <h2 className="websites__title">Delicada Mulher</h2>
          <div className="websites__item">
            <div className="websites__images">
              <img
                className="websites__img"
                alt="Delicada Mulher Website"
                src={Delicada}
              />
              <img
                className="websites__img websites__img--mobile"
                alt="Delicada Mulher Website Mobile"
                src={DelicadaMob}
              />
            </div>
            <div className="websites__description">
              <p>Website developed to expose the shops vestuary.</p>
              <p>This work was developed using the follow technologies:</p>
              <Cards items={delicada} />

              <a
                rel="noopener noreferrer"
                className="websites__button"
                href="https://delicada-mulher.firebaseapp.com/"
                target="_blank"
              >
                Visit
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Websites;
