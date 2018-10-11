import React from 'react';
import ReactGA from 'react-ga';
import { css } from 'emotion';

import {
  admin,
  authentication,
  gradient,
  converter,
  splitting,
  jokes,
  excel,
  bitcoin
} from '../../util/technologies';

import Item from './Item';
import Layout from '../layout/Layout';

import AdminImage from '../_images/admin.jpg';
import AuthenticationImage from '../_images/authentication.jpg';
import GradientImage from '../_images/gradient.png';
import ConverterImage from '../_images/converter.jpg';
import BitcoinImage from '../_images/bitcoin.jpg';
import SplittingImage from '../_images/splitting.jpg';
import JokesImage from '../_images/jokes.png';
import ExcelImage from '../_images/excel-example.png';

ReactGA.initialize('UA-124943031-1');
ReactGA.pageview(window.location.pathname);

const Projects = () => {
  return (
    <Layout>
      <main className={projects}>
        <section className={projects__group}>
          <Item
            title="Admin Template"
            image={AdminImage}
            info="This is a React administration template project, compose by
            a Login/Registration page and a full dashboard developed with Redux."
            itemsCard={admin}
            websiteLink="https://admin-template-ih.herokuapp.com"
            githubLink="https://github.com/igorhaugg/admin-template"
          />
          <Item
            title="Authentication"
            image={AuthenticationImage}
            info="This is a React template compose by a Login page and
                Registration page."
            itemsCard={authentication}
            websiteLink="https://authentication-ih.herokuapp.com/"
            githubLink="https://github.com/igorhaugg/authentication"
          />
          <Item
            title="Jokes API"
            image={JokesImage}
            info="Simple project that fetch data from an API and show the jokes on a table with search and ordenation options."
            itemsCard={jokes}
            websiteLink="https://igorhaugg.github.io/jokes-api/"
            githubLink="https://github.com/igorhaugg/jokes-api"
          />
          <Item
            title="Excel file reader"
            image={ExcelImage}
            info="Example of excel file reader using react-dropzone, material-ui and xlsx libraries."
            itemsCard={excel}
            websiteLink="https://igorhaugg.github.io/excel-example/"
            githubLink="https://github.com/igorhaugg/excel-example"
          />
          <Item
            title="Background Gradient Generator"
            image={GradientImage}
            info="Simple background gradient generator using the react-color and react-copy-to-clipboard libraries."
            itemsCard={gradient}
            websiteLink="https://igorhaugg.github.io/background-gradient/"
            githubLink="https://github.com/igorhaugg/background-gradient"
          />
          <Item
            title="Color converter"
            image={ConverterImage}
            info="RGB and Hex code converter."
            itemsCard={converter}
            websiteLink="https://igorhaugg.github.io/color-converter/"
            githubLink="https://github.com/igorhaugg/color-converter"
          />
          <Item
            title="Bitcoin Price"
            image={BitcoinImage}
            info="Bitcoin current price (USD, EUR, GBP)."
            itemsCard={bitcoin}
            websiteLink="https://igorhaugg.github.io/bitcoin-price/"
            githubLink="https://github.com/igorhaugg/bitcoin-price"
          />
          <Item
            title="Code-Splitting"
            image={SplittingImage}
            info="Simple template using react-loadable."
            itemsCard={splitting}
            websiteLink="https://igorhaugg.github.io/code-splitting/"
            githubLink="https://github.com/igorhaugg/code-splitting"
          />
        </section>
      </main>
    </Layout>
  );
};

const projects = css`
  background-color: #fff6f6;
  min-height: calc(100vh - var(--header-size));
  min-width: 100vw;
`;

const projects__group = css`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
`;

export default Projects;
