import React from 'react';

import './component.less'
import MovieItem from '../movie-item'
import getFilms from'./utils';

class MovieList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {films: null};
  }
  
  componentDidMount() {
    this.setState(({ films }) => ({ films : getFilms() }));
  };
  
  render() {
    return(
        <div className="movie-list">{
          this.state.films ? this.state.films.map((item) =>(  <MovieItem key={item.id} {...item}/> )): 'load'
        }
        </div>
    )
  }
}

export default MovieList;