// @flow

import React from 'react';

type Props = {
  error: Object,
  errorInfo: Object,
};

const ErrorBoundaryComponent = ({ error, errorInfo }: Props) => (
  <div id="errorBoundary">
    <h2 style={{ color: 'red' }}>Something went wrong.</h2>
    <details style={{ whiteSpace: 'pre-wrap', color: 'red' }}>
      {error && error.toString()}
      <br />
      {errorInfo.componentStack}
    </details>
  </div>
);


export default ErrorBoundaryComponent;
