import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import styles from './component.less';
import MovieItem from '../movie-item';
import getFilms from './utils';

class MovieList extends Component {
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
            <div className={styles.movieList}>
                {
                    films ? films.map(item => (<Link className={styles.movieList__href} key={item.id} to={`/series/${item.id}`}><MovieItem {...item} /></Link>)) : 'load'
                }
            </div>
        );
    }
}

MovieList.propTypes = {
    films: PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        genre: PropTypes.string,
        year: PropTypes.string,
        id: PropTypes.number,
    }),
};

MovieList.defaultProps = {
    films: {},
};

export default MovieList;