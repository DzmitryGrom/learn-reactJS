import React, { PureComponent } from 'react';
import MovieItem from './component';

type Props = {
  onMovieClick: Function,
  id: number,
  release_date: string,
  title: string,
  poster_path: string,
  genres: Array<any>,
};

class MovieItemContainer extends PureComponent<Props> {
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
