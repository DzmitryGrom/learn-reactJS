import React, { Component } from 'react';

import MovieItem from './component';

class MovieItemContainer extends Component {

    handleClick = () => {
        const { onMovieClick, id } = this.props;
        onMovieClick(id);
    }
    render(){
        const { release_date, title, poster_path, genres, onMovieClick } = this.props;
        return(
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