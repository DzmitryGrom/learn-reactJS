import React from 'react';
import PropTypes from 'prop-types';
import styles from './component.less';
import MovieItemContainer from '../movie-item/index';

const MovieListComponent = (props) => {
  const { films, onMovieClick } = props;
  return (
    <div className={styles.movieList}>
        {
            films.length > 0 ? films.map(film => (<MovieItemContainer onMovieClick={onMovieClick} key={film.id} {...film} />))
                : <h2 className={styles.movieList__text}>No films found</h2>
        }
    </div>
  );
};

MovieListComponent.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onMovieClick: PropTypes.func.isRequired

};

export default MovieListComponent;
