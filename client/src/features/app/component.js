import React, { PureComponent } from 'react';

import Button from '../button';
import MovieList from '../movie-list';

import './component.less'

class App extends PureComponent {
  render() {
    return(
      <MovieList className="movie-list" />
    )
  }
}

export default App;