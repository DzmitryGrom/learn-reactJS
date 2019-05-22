// @flow

import 'isomorphic-fetch';
import '@babel/polyfill';
import React from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import MovieSearch from '../movie-search';
import MovieDetail from '../movie-detail';
import NotFound from '../not-found';
import ErrorBoundary from './error-boundary';
import './component.less';

type Props = {
  Router: Function,
  location: string,
  context: Object,
  store: string,
};

const App = ({
  Router, location, context, store,
}: Props) => (
  <Provider store={store}>
    <ErrorBoundary>
      <Router location={location} context={context}>
        <Switch>
          <Redirect exact from="/" to="/search" />
          <Route exact path="/search/:query?" component={MovieSearch} />
          <Route path="/film/:id" component={MovieDetail} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </ErrorBoundary>
  </Provider>
);

export default hot(module)(App);
