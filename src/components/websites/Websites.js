import React from 'react';
import ReactGA from 'react-ga';
import { css } from 'emotion';

import { tiago, delicada, speedbox, navid } from '../../util/technologies';

import Item from './Item';
import Layout from '../../common/Layout';

import NavidImage from '../_images/navid.png';
import NavidImageMob from '../_images/navidmob.png';
import SpeedboxImage from '../_images/speedbox.png';
import SpeedboxImageMob from '../_images/speedboxmob.png';
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
          visitLink="https://tiagopimentel.herokuapp.com"
        />
        <Item
          title="Delicada Mulher"
          image={DelicadaImage}
          imageMob={DelicadaImageMob}
          info="Website developed to expose the shops vestuary."
          itemsCard={delicada}
          visitLink="https://delicada-mulher.firebaseapp.com"
        />
        <Item
          title="SpeedBox"
          image={SpeedboxImage}
          imageMob={SpeedboxImageMob}
          info="I was a freelancer hired to develop some pages for the dashboard system. Speedbox is an Indian company that allows customers to send packages through the world."
          itemsCard={speedbox}
          visitLink="https://www.speedboxapp.com"
        />
        <Item
          title="RCFE insurance program"
          image={NavidImage}
          imageMob={NavidImageMob}
          info="I was a freelancer hired to develop pages for a landing page website and to add a backend functionality to send emails."
          itemsCard={navid}
          visitLink="https://top-insurance-agency.herokuapp.com"
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
