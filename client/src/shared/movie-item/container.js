import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieItem from './component';

class MovieItemContainer extends Component {
  static propTypes = {
    onMovieClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  handleClick = () => {
    const { onMovieClick, id } = this.props;
    onMovieClick(id);
  };

  render() {
    const {
      release_date, title, poster_path, genres,
    } = this.props;
    return (
      <MovieItem
        release={release_date}
        title={title}
        poster={poster_path}
        genres={genres}
        onMovieClick={this.handleClick}
      />
    );
  }
}

export default MovieItemContainer;
