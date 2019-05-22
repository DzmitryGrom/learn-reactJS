import React from 'react';
import styles from './component.less';
import MovieItemContainer from '../movie-item/index';

type Props = {
  films: Array < any >,
  onMovieClick: Function,
};

const MovieListComponent = ({ films, onMovieClick }: Props) => (
  <div className={styles.movieList}>
    {
      films.size
        ? films.map(film => (
          <MovieItemContainer
            onMovieClick={onMovieClick}
            key={film.id}
            {...film}
          />
        ))
        : <h2 className={styles.movieList__text}>No films found</h2>
    }
  </div>
);


export default MovieListComponent;
