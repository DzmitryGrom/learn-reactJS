import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import * as Action from '../common/actions';
import { searchFilms } from '../common/utils';
import { getVisibleFilmsLength } from '../../core/store/selectors';
import MovieSearchComponent from './component';

class MovieSearchContainer extends Component {
  static propTypes = {
    setMovies: PropTypes.func.isRequired,
    filmsLength: PropTypes.number,
    location: PropTypes.shape({
      pathname: PropTypes.string,
      search: PropTypes.string,
    }).isRequired,
  };

  componentDidMount() {
    this.loadFilms();
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location.search !== prevProps.location.search) {
      this.loadFilms();
    }
  }

  async loadFilms() {
    const { setMovies, location } = this.props;
    const url = queryString.parse(location.search);
    if (Object.keys(url).length !== 0) {
      const { data } = await searchFilms(url);
      setMovies(data.data);
    }
  }

  render() {
    const { filmsLength } = this.props;
    return (
      <MovieSearchComponent filmsLength={filmsLength} />
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

export default connect(mapStateToProps, mapDispathToProps)(withRouter(MovieSearchContainer));
