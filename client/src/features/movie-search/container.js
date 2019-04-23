import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as Action from '../common/actions';
import { getFilmsWithQuery } from '../common/utils';
import { getVisibleFilmsLength } from '../../core/store/selectors';
import MovieSearchComponent from './component';

class MovieSearchContainer extends Component {
  static propTypes = {
    setMovies: PropTypes.func.isRequired,
    filmsLength: PropTypes.number,
    location: PropTypes.objectOf(PropTypes.string).isRequired,
  };

  componentDidMount() {
    this.loadFilms();
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location.pathname !== prevProps.location.pathname) {
      this.loadFilms();
    }
  }

  async loadFilms() {
    const { setMovies } = this.props;
    const params = new URLSearchParams(window.location.search);
    const url = params.get('query');
    if (url) {
      const { data } = await getFilmsWithQuery(url);
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

export default withRouter(connect(mapStateToProps, mapDispathToProps)(MovieSearchContainer));
