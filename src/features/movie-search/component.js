// @flow

import React from 'react';
import styles from './component.less';
import Logo from '../../shared/logo';
import Filter from './search-filter';
import MovieFooter from '../../shared/footer';
import MovieList from '../../shared/movie-list';

type Props = {
  filmsLength: number,
};

const MovieSearchComponent = ({ filmsLength }: Props) => (
  <div className={styles.movieSearch}>
    <div className={styles.movieSearch__header}>
      <Logo />
      <Filter />
    </div>
    <div className={styles.movieSearch__bottomPanel}>
      <span id="movieValue" className={styles.movieSearch__value}>
        {filmsLength ? (`${filmsLength} movies found`) : null}
      </span>
    </div>
    <div className={styles.movieSearch__main}>
      <MovieList />
    </div>
    <MovieFooter />
  </div>
);


export default MovieSearchComponent;
