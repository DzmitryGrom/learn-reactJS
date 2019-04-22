import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as Action from '../common/actions';
import { getFilmsWithQuery } from '../common/utils';
import styles from './component.less';
import Logo from '../../shared/logo';
import Filter from './search-filter';
import MovieFooter from '../../shared/footer';
import MovieList from '../../shared/movie-list';
import { getVisibleFilmsLength } from '../../core/store/selectors';

class MovieSearchContainer extends Component {
  static propTypes = {
    setMovies: PropTypes.func.isRequired,
    filmsLength: PropTypes.number,
    location: PropTypes.objectOf(PropTypes.string).isRequired,
    history: PropTypes.objectOf(PropTypes.any).isRequired,
  };

  componentDidMount() {
    this.componentAddItems();
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location.pathname !== prevProps.location.pathname) {
      this.componentAddItems();
    }
  }

  async componentAddItems() {
    const { history, setMovies } = this.props;
    let url = history.location.pathname;
    if (url !== '/search') {
      url = url.substring(15);
      const { data } = await getFilmsWithQuery(url);
      setMovies(data.data);
    }
  }

  render() {
    const { filmsLength } = this.props;
    return (
      <div className={styles.movieSearch}>
        <div className={styles.movieSearch__header}>
          <Logo />
          <Filter />
        </div>
        <div className={styles.movieSearch__bottomPanel}>
          <span id="movieValue" className={styles.movieSearch__value}>
            {filmsLength ? (`${filmsLength} movies found`) : null}
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

MovieSearchContainer.defaultProps = {
  filmsLength: null,
};

const mapStateToProps = state => ({
  filmsLength: getVisibleFilmsLength(state),
});

const mapDispathToProps = dispatch => ({
  ...bindActionCreators(Action, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispathToProps)(MovieSearchContainer));
