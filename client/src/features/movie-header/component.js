import React from 'react';

import styles from './component.less';
import MovieLogo from '../movie-logo';
import ErrorBoundary from '../error-boundary';
import FilterContainer from "../filter";

const MovieHeader = () => (
    <div className={styles.header}>
        <MovieLogo />
        <ErrorBoundary>
            <FilterContainer />
        </ErrorBoundary>
    </div>
);

export default MovieHeader;