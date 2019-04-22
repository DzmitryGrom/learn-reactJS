import React from 'react';

import MovieSearch from '../movie-search';
import MovieDetail from '../movie-detail';
import NotFound from '../not-found';
import ErrorBoundary from './error-boundary';
import { Switch, Route, Redirect } from 'react-router-dom';
import './component.less';


const App = () => (
  <ErrorBoundary>
      <Switch>
        <Redirect exact from="/" to="/search" />
        <Route exact path="/search" component={MovieSearch}/>
        <Route exact path="/search/Search:tab" component={MovieSearch}/>
        <Route path="/film" component={MovieDetail}/>
        <Route path="*" component={NotFound}/>
      </Switch>
  </ErrorBoundary>
);

export default App;
