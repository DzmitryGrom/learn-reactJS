import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        error: null, errorInfo: null
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

        if (this.state.errorInfo) {
            return (
                <div>
                    <h2 style={{ color: 'red' }}>Something went wrong.</h2>
                    <details style={{ whiteSpace: 'pre-wrap', color: 'red' }}>
                        {error && error.toString()}
                        <br />
                        {errorInfo.componentStack}
                    </details>
                </div>
            );
        }
        return children;
    }
}

export default ErrorBoundary;