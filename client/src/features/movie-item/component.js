import React from 'react';

import PropTypes from 'prop-types';
import styles from './component.less';

const MovieItem = ({
  image, title, year, genre,
}) => (
  <div className={styles.movieItem}>
    <div style={{ backgroundImage: `url(${image})` }} className={styles.movieItem__img} />
    <div className={styles.movieItem__info}>
      <div>
        <h3 className={styles.movieItem__title}>{title}</h3>
        <h4 className={styles.movieItem__genre}>{genre}</h4>
      </div>
      <span className={styles.movieItem__year}>{year}</span>
    </div>
  </div>
);

MovieItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  genre: PropTypes.string,
};

MovieItem.defaultProps = {
  image: null,
  title: null,
  year: null,
  genre: null,
};

export default MovieItem;
