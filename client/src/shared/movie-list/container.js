import { connect } from 'react-redux';
import React, { Component } from 'react';
import { getVisibleFilms } from '../../core/store/selectors';
import MovieList from './component';

class MovieListContainer extends Component {
    handleClick = (id) => {
       console.log(id);
    }

    render(){
        const { films } = this.props;
        return(
            <MovieList films={films} onMovieClick={this.handleClick}/>
        )
    }

}

const mapStateToProps = state => ({
    films: getVisibleFilms(state),
});

export default connect(mapStateToProps)(MovieListContainer);