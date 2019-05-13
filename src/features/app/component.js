import 'isomorphic-fetch';
import '@babel/polyfill';
import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import MovieSearch from '../movie-search';
import MovieDetail from '../movie-detail';
import NotFound from '../not-found';
import ErrorBoundary from './error-boundary';
import './component.less';

const App = ({
  Router, location, context, store,
}) => (
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

App.propTypes = {
  Router: PropTypes.func.isRequired,
  location: PropTypes.string,
  context: PropTypes.shape({
    url: PropTypes.string,
  }),
  store: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
  }),
};
App.defaultProps = {
  location: null,
  context: null,
};

export default hot(module)(App);
