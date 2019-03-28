import React from 'react';

import styles from './component.less';
import MovieLogo from '../movie-logo';

const MovieFooter = () => (
    <div className={styles.footer}>
        <MovieLogo />
    </div>
);

export default MovieFooter;