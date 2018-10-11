import React from 'react';
import ReactGA from 'react-ga';
import { css } from 'emotion';

import { tiago, delicada } from '../../util/technologies';

import Item from './Item';
import Layout from '../layout/Layout';

import TiagoImage from '../_images/tiago.png';
import TiagoImageMob from '../_images/tiagomob.png';
import DelicadaImage from '../_images/delicada.png';
import DelicadaImageMob from '../_images/delicadamob.png';
import BackgroundImageLined from '../_images/lined-paper.png';

ReactGA.initialize('UA-124943031-1');
ReactGA.pageview(window.location.pathname);

const Websites = () => {
  return (
    <Layout>
      <main className={websites}>
        <Item
          title="Tiago Pimentel"
          image={TiagoImage}
          imageMob={TiagoImageMob}
          info="Website developed to show the work of the coach Tiago Pimentel.
          He teaches martial arts such as Muai thay/ Boxing and Brazilian
          Jiu-Jitsu."
          itemsCard={tiago}
          visitLink="https://tiago-pimentel.firebaseapp.com"
        />
        <Item
          title="Delicada Mulher"
          image={DelicadaImage}
          imageMob={DelicadaImageMob}
          info="Website developed to expose the shops vestuary."
          itemsCard={delicada}
          visitLink="https://delicada-mulher.firebaseapp.com"
        />
      </main>
    </Layout>
  );
};

const websites = css`
  background-image: url(${BackgroundImageLined});
  min-height: calc(100vh - var(--header-size));
  min-width: 100vw;
  padding-bottom: 5rem;
`;

export default Websites;
