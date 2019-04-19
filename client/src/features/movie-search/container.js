import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as Action from './actions';
import styles from './component.less';
import Logo from '../../shared/logo';
import Filter from './search-filter';

import MovieFooter from '../../shared/footer';
import MovieList from '../../shared/movie-list';
import { getFilms, getFilmsWithParams } from './utils';
import { getValueFilter } from '../../core/store/selectors';
import { getVisibleFilmsLength } from '../../core/store/selectors';

class MovieSearchContainer extends Component {
  // async componentDidMount() {
  //   const { setMovies } = this.props;
  //   const { data } = await getFilms();
  //   setMovies(data.data);
  // }

  async componentDidUpdate(prevProps) {
    const { filter, setMovies } = this.props;
    if (filter !== prevProps.filter) {
      if (filter.text !== '') {
        const { data } = await getFilmsWithParams(filter, filter.text);
        setMovies(data.data);
      }
    }
  }

  render() {
    const { filmsLength } = this.props;
    return (
      <div className={styles.movieSearch}>
        <div className={styles.movieSearch__header}>
          <Logo />
          <Filter  />
        </div>
        <div className={styles.movieSearch__bottomPanel}>
          <span id="movieValue" className={styles.movieSearch__value}>
            {filmsLength ? (filmsLength + ' ' + 'movies found'): null}
          </span>
        </div>
        <div className={styles.movieSearch__main}>
          <MovieList />
        </div>
        <MovieFooter />
      </div>
    );
  }
}

MovieSearchContainer.propTypes = {
  setMovies: PropTypes.func.isRequired,
  filter: PropTypes.objectOf(PropTypes.string),
  filmsLength: PropTypes.number,
};

MovieSearchContainer.defaultProps = {
  filter: null,
  filmsLength: null,
};

const mapStateToProps = state => ({
  filter: getValueFilter(state),
  filmsLength: getVisibleFilmsLength(state),
});

const mapDispathToProps = dispatch => ({
  ...bindActionCreators(Action, dispatch),
});

export default connect(mapStateToProps, mapDispathToProps)(MovieSearchContainer);
