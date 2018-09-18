import React from 'react';
import ReactGA from 'react-ga';

import Item from './Item';
import Layout from '../layout/Layout';

import AdminImage from './images/admin.jpg';
import AuthenticationImage from './images/authentication.jpg';
import GradientImage from './images/gradient.png';
import ConverterImage from './images/converter.jpg';
import BitcoinImage from './images/bitcoin.jpg';
import SplittingImage from './images/splitting.jpg';
import JokesImage from './images/jokes.png';
import './Projects.css';

ReactGA.initialize('UA-124943031-1');
ReactGA.pageview(window.location.pathname);

const admin = [
  'javascript',
  'css',
  'react',
  'redux',
  'axios',
  'mongoDB',
  'express',
  'aws S3',
  'heroku'
];

const authentication = [
  'javascript',
  'css',
  'react',
  'redux',
  'axios',
  'mongoDB',
  'express',
  'heroku'
];

const gradient = [
  'javascript',
  'css',
  'react',
  'react-color',
  'react-copy-to-clipboard',
  'gh-pages'
];

const converter = [
  'javascript',
  'css',
  'react',
  'axios',
  'react-copy-to-clipboard',
  'gh-pages'
];

const splitting = ['javascript', 'css', 'react', 'react-loadable', 'gh-pages'];

const jokes = [
  'javascript',
  'css',
  'react',
  'react-flip-move',
  'axios',
  'gh-pages'
];

const bitcoin = ['javascript', 'css', 'react', 'axios', 'gh-pages'];

const Projects = () => {
  return (
    <Layout>
      <main className="projects">
        <section className="projects__group">
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

export default Projects;
