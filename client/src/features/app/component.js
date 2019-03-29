import React from 'react';

import MovieSearch from '../movie-search';
import ErrorBoundary from '../error-boundary';
import './component.less';

const App = () => (
  <ErrorBoundary>
    <MovieSearch />
  </ErrorBoundary>
);

export default App;
