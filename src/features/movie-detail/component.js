// @flow

import React from 'react';
import styles from './component.less';
import Logo from '../../shared/logo';
import MovieFooter from '../../shared/footer';
import MovieList from '../../shared/movie-list';
import Button from '../../shared/button/index';

type Props = {
  selectFilm: Object,
  onButtonClick: Function,
};

const MovieDetailComponent = ({ selectFilm, onButtonClick }: Props) => (
  <div className={styles.movieDetail}>
    <div className={styles.movieDetail__header}>
      <Logo />
      <Button selector="btnSearch" text="search" color="deeppink" backgroundColor="white" width="100px" onButtonClick={onButtonClick} />
      {selectFilm ? (
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
      ) : <h2 className={styles.movieDetail__notFound}>Film not found</h2>}
    </div>
    <div className={styles.movieDetail__bottomPanel}>
      <span id="movieValue" className={styles.movieDetail__value}>
        {selectFilm ? `Films by ${selectFilm.genres[0]} genre` : null}
      </span>
    </div>
    <div className={styles.movieDetail__main}>
      <MovieList />
    </div>
    <MovieFooter />
  </div>
);

export default MovieDetailComponent;
