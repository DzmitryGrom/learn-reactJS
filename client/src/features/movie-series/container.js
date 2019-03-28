import React, { Component } from 'react';

import MovieHeader from '../header';
import MovieFooter from '../footer';
import MovieList from '../movie-list';

class Series extends Component {
    state = {};

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

export default Series;