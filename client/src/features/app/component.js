import React from 'react';

import Series from '../movie-search';
import ErrorBoundary from '../error-boundary';
import './component.less';

const App = () => (
  <ErrorBoundary>
    <Series />
  </ErrorBoundary>
);

export default App;
