import React, { Component } from 'react';

import PropTypes from 'prop-types';
import ErrorBoundaryComponent from './component';

class ErrorBoundaryContainer extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  state = {
    error: null,
    errorInfo: null,
  };

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

export default ErrorBoundaryContainer;
