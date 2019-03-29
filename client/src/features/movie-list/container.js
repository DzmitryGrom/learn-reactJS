import React, { Component } from 'react';

import MovieListComponent from './component';
import getFilms from './utils';

class MovieListContainer extends Component {
    state = {
      films: null,
    };

    componentDidMount() {
      const films = getFilms();
      this.setState({ films });
    }

    render() {
      const { films } = this.state;

      return (
        <MovieListComponent films={films} />
      );
    }
}

export default MovieListContainer;
