import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Series from '../movie-series';
import Single from '../movie-details';
import ErrorBoundary from '../error-boundary';
import './component.less';

const App = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Series} />
        <Route path="/series/:id" component={Single} />
      </Switch>
    </BrowserRouter>
  </ErrorBoundary>
);

export default App;
