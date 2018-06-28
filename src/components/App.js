import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import Home from 'components/Home';
import Loading from './Loading';

const AsyncDynamicPAge = importedComponent(
    () => import(/* webpackChunkName:'DynamicPage' */ 'components/DynamicPage'),
    {
      LoadingComponent: Loading
    }
);
const AsyncNoMatch = importedComponent(
    () => import(/* webpackChunkName:'NoMatch' */ 'components/NoMatch'),
    {
      LoadingComponent: Loading
    }
);
const AsyncAboutPage = importedComponent(
    () => import(/* webpackChunkName:'NoMatch' */ 'components/About'),
    {
      LoadingComponent: Loading
    }
);

const App = () => {
  return (
      <Router>
          <Switch>
            <Route exact name="home" path="/" component={Home}/>
            <Route exact path="/dynamic" component={AsyncDynamicPAge}/>
            <Route exact path="/about" component={AsyncAboutPage}/>
            <Route component={AsyncNoMatch}/>
          </Switch>
      </Router>
  );
};

export default App;
