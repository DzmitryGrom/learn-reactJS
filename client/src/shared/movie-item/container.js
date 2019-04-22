import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieItem from './component';

class MovieItemContainer extends Component {
  static propTypes = {
    onMovieClick: PropTypes.func.isRequired,
    filter: PropTypes.objectOf(PropTypes.string),
    id: PropTypes.number,
    release_date: PropTypes.string,
    title: PropTypes.string,
    poster_path: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
  };
  
  handleClick = () => {
    const { onMovieClick, id } = this.props;
    onMovieClick(id);
  };
  
  render() {
    const { release_date, title, poster_path, genres, onMovieClick } = this.props;
    return (
      <MovieItem
        release={release_date}
        title={title}
        poster={ poster_path}
        genres={genres}
        onMovieClick={this.handleClick}/>
    )
  }
}

export default MovieItemContainer;