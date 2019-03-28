import React, { Component } from 'react';

import PropTypes from 'prop-types';
import ErrorBoundaryComponent from './component';

class ErrorBoundaryContainer extends Component {
  state = {
    error: null,
    errorInfo: null,
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    const { errorInfo, error } = this.state;
    const { children } = this.props;
    if (errorInfo && error) {
      return (
        <ErrorBoundaryComponent errorInfo={errorInfo} error={error} />
      );
    }
    return children;
  }
}

ErrorBoundaryContainer.propTypes = {
  children: PropTypes.element,
};

ErrorBoundaryContainer.defaultProps = {
  children: null,
};

export default ErrorBoundaryContainer;
