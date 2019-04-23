import React from 'react';
import PropTypes from 'prop-types';
import styles from './component.less';
import Logo from '../../shared/logo';
import MovieFooter from '../../shared/footer';
import MovieList from '../../shared/movie-list';
import Button from '../../shared/button/index';

const MovieDetailComponent = ({ selectFilm, onButtonClick }) => (

  <div className={styles.movieDetail}>
    <div className={styles.movieDetail__header}>
      <Logo />
      <Button selector="btnSearch" text="search" modifier="white" size="big" onButtonClick={onButtonClick} />
      { selectFilm ? (
        <div className={styles.movieDetail__target}>
          <div className={styles.movieDetail__cover} style={{ backgroundImage: `url(${selectFilm.poster_path})` }} />
          <div>
            <h2 className={styles.movieDetail__title}>{selectFilm.title}</h2>
            <p className={styles.movieDetail__description}>{selectFilm.tagline}</p>
            <p className={styles.movieDetail__date}>
              <span>{selectFilm.release_date.substring(0, 4)}</span>
              <span>
                {selectFilm.runtime}
                {' '}
                min
              </span>
            </p>
            <p className={styles.movieDetail__text}>{selectFilm.overview}</p>
          </div>
        </div>
      ) : null}
    </div>
    <div className={styles.movieDetail__bottomPanel}>
      <span id="movieValue" className={styles.movieDetail__value}>
        Films by
        {selectFilm && `\t${selectFilm.genres[0]} `}
        genre
      </span>
    </div>
    <MovieList />
    <MovieFooter />
  </div>
);

MovieDetailComponent.defaultProps = {
  selectFilm: null,
};

MovieDetailComponent.propTypes = {
  selectFilm: PropTypes.objectOf(PropTypes.any),
  onButtonClick: PropTypes.func.isRequired,
};

export default MovieDetailComponent;
