import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getVisibleFilms } from '../../core/store/selectors';
import MovieList from './component';

class MovieListContainer extends Component {

    static propTypes = {
      match: PropTypes.object.isRequired,
      location: PropTypes.object.isRequired,
      history: PropTypes.object.isRequired,
      films: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    };

    handleClick = (id) => {
      const { history } = this.props;
      history.push({
        pathname:  `/film/${id}`,
      });
    };

    render() {
      const { films } = this.props;
      return (
        <MovieList films={films} onMovieClick={this.handleClick}/>
      );
    }

}

const mapStateToProps = state => ({
  films: getVisibleFilms(state),
});

export default withRouter(connect(mapStateToProps)(MovieListContainer));