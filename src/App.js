import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Spinner from './common/Spinner';

// Loading component
const Loading = () => (
  <div className="full-centralize full-screen">
    <Spinner />
  </div>
);

// Components
const Home = Loadable({
  loader: () => import('./components/home/Home'),
  loading: () => <Loading />
});

const Contact = Loadable({
  loader: () => import('./components/contact/Contact'),
  loading: () => <Loading />
});

const Websites = Loadable({
  loader: () => import('./components/websites/Websites'),
  loading: () => <Loading />
});

const Projects = Loadable({
  loader: () => import('./components/projects/Projects'),
  loading: () => <Loading />
});

class App extends Component {
  render() {
    return (
      <Router basename="/portfolio">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/websites" component={Websites} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    );
  }
}

export default App;
