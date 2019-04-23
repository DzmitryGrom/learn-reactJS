import React from 'react';
import PropTypes from 'prop-types';
import styles from './component.less';
import Logo from '../../shared/logo';
import Filter from './search-filter';
import MovieFooter from '../../shared/footer';
import MovieList from '../../shared/movie-list';


const MovieSearchComponent = ({ filmsLength }) => (
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

MovieSearchComponent.defaultProps = {
  filmsLength: null,
};

MovieSearchComponent.propTypes = {
  filmsLength: PropTypes.number,
};

export default MovieSearchComponent;