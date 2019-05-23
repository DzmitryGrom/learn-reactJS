// @flow

import React, { Component } from 'react';
import ErrorBoundaryComponent from './component';

type Props = {
  children: Object,
};

type State = {
  error: Object,
  errorInfo: Object,
};

class ErrorBoundaryContainer extends Component<Props, State> {
  state = {
    error: null,
    errorInfo: null,
  };

  componentDidCatch(error: Error, errorInfo: Object) {
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
