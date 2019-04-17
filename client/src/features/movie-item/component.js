import React from 'react';

import PropTypes from 'prop-types';
import styles from './component.less';

const MovieItem = ({
  poster_path, title, release_date, genres,
}) => (
  <div className={styles.movieItem}>
    <div style={{ backgroundImage: `url(${poster_path})` }} className={styles.movieItem__img} />
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
      <span className={styles.movieItem__year}>{release_date && release_date.substring(0, 4)}</span>
    </div>
  </div>
);

MovieItem.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  release_date: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
};

MovieItem.defaultProps = {
  poster_path: null,
  title: null,
  release_date: null,
  genres: null,
};

export default MovieItem;
