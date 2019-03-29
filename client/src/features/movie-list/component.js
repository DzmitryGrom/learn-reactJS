import React from 'react';

import PropTypes from 'prop-types';
import styles from './component.less';
import MovieItem from '../movie-item';

const MovieListComponent = ({ films }) => (
  <div className={styles.movieList}>
    {
      films ? films.map(item => (<MovieItem key={item.id} {...item} />)) : 'load'
    }
  </div>
);

MovieListComponent.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.string,
    id: PropTypes.number,
  })),
};

MovieListComponent.defaultProps = {
  films: null,
};

export default MovieListComponent;
