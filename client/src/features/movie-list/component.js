import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { getVisibleFilms } from '../../core/store/selectors';

import styles from './component.less';
import MovieItem from '../movie-item';

const MovieListComponent = (props) => {
  const { films } = props;
  return (
    <div className={styles.movieList}>
      {
        films ? films.map((item) => (<MovieItem key={item.id} {...item} />)) : 'load'
      }
    </div>
  );
};

MovieListComponent.propTypes = {
  films: PropTypes.array.isRequired
};

MovieListComponent.defaultProps = {
  films: null,
};

const mapStateToProps = state => ({
  films: getVisibleFilms(state),
});

export default connect(mapStateToProps)(MovieListComponent);
