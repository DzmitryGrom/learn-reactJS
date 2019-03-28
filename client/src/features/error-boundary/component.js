import React from 'react';
import PropTypes from 'prop-types';


const ErrorBoundaryComponent = ({ error, errorInfo })  => (
    <div>
        <h2 style={{ color: 'red' }}>Something went wrong.</h2>
        <details style={{ whiteSpace: 'pre-wrap', color: 'red' }}>
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
        </details>
    </div>
);


ErrorBoundaryComponent.propTypes = {

};

ErrorBoundaryComponent.defaultProps = {

};

export default ErrorBoundaryComponent;