// @flow

import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import queryString from 'query-string';
import * as Action from '../common/actions';
import { getVisibleFilmsLength } from '../../core/store/selectors';
import MovieSearchComponent from './component';

type Props = {
  setMoviesParams: Function,
  filmsLength: number,
  location: Object
};

class MovieSearchContainer extends PureComponent<Props> {
  componentWillMount() {
    this.loadFilms();
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location.search !== prevProps.location.search) {
      this.loadFilms();
    }
  }

  async loadFilms() {
    const { setMoviesParams, location } = this.props;
    const url = queryString.parse(location.search);
    if (Object.keys(url).length !== 0) {
      setMoviesParams(url);
    }
  }

  render() {
    const { filmsLength } = this.props;
    return <MovieSearchComponent filmsLength={filmsLength} />;
  }
}

const mapStateToProps = state => ({
  filmsLength: getVisibleFilmsLength(state),
});

const mapDispathToProps = dispatch => ({
  ...bindActionCreators(Action, dispatch),
});

export default connect(mapStateToProps, mapDispathToProps)(withRouter(MovieSearchContainer));
