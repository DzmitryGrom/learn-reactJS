import React from 'react';

import PropTypes from 'prop-types';

const ErrorBoundaryComponent = ({ error, errorInfo }) => (
  <div id="errorBoundary">
    <h2 style={{ color: 'red' }}>Something went wrong.</h2>
    <details style={{ whiteSpace: 'pre-wrap', color: 'red' }}>
      {error && error.toString()}
      <br />
      {errorInfo.componentStack}
    </details>
  </div>
);

ErrorBoundaryComponent.propTypes = {
  error: PropTypes.objectOf(PropTypes.shape({})).isRequired,
  errorInfo: PropTypes.any,
};

ErrorBoundaryComponent.defaultProps = {
  error: null,
  errorInfo: null,
};

export default ErrorBoundaryComponent;
