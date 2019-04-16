import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as Action from './actions';

import MovieHeader from '../header';
import MovieFooter from '../footer';
import MovieList from '../movie-list';
import { getFilms, getFilmsWithParams } from './utils';
import { getValueFilter } from '../../core/store/selectors';

class SeriesContainer extends Component {
  async componentDidMount() {
    const { setMovies } = this.props;
    const { data } = await getFilms();
    setMovies(data.data);
  }

  async componentDidUpdate(prevProps) {
    const { filter, setMovies } = this.props;
    if (filter !== prevProps.filter) {
      if (filter.text.length === 0) {
        return;
      }
      const { data } = await getFilmsWithParams(filter, filter.text);
      setMovies(data.data);
    }
  }

  render() {
    return (
      <>
        <MovieHeader />
        <MovieList />
        <MovieFooter />
      </>
    );
  }
}

SeriesContainer.propTypes = {
  setMovies: PropTypes.func.isRequired,
  filter: PropTypes.objectOf(PropTypes.string)
};

SeriesContainer.defaultProps = {
  setMovies: null,
  filter: null,
};

const mapStateToProps = state => ({
  filter: getValueFilter(state),
});

const mapDispathToProps = dispatch => ({
  ...bindActionCreators(Action, dispatch),
});

export default connect(mapStateToProps, mapDispathToProps)(SeriesContainer);
