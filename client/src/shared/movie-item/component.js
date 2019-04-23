import React from 'react';

import PropTypes from 'prop-types';
import styles from './component.less';

const MovieItem = ({
  poster, title, release, genres, onMovieClick,
}) => (
  <div onClick={onMovieClick} className={styles.movieItem}>
    <div style={{ backgroundImage: `url(${poster})` }} className={styles.movieItem__img} />
    <div className={styles.movieItem__info}>
      <div>
        <h3 className={styles.movieItem__title}>{title}</h3>
        <h4 className={styles.movieItem__genre}>
          { genres && (genres.length > 1 ? genres.map(item => (
            <span key={item}>
              {item}
              {' '}
            </span>
          )) : genres) }
        </h4>
      </div>
      <span className={styles.movieItem__year}>{release && release.substring(0, 4)}</span>
    </div>
  </div>
);

MovieItem.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string,
  release: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  onMovieClick: PropTypes.func.isRequired,
};

MovieItem.defaultProps = {
  poster: null,
  title: null,
  release: null,
  genres: null,
};

export default MovieItem;
