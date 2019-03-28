import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import styles from './component.less';
import MovieItem from '../movie-item';
import getFilms from './utils';



const MovieListComponent = ({ })  => (
    <div className={styles.movieList}>
        {
            films ? films.map(item => (<Link className={styles.movieList__href} key={item.id} to={`/series/${item.id}`}><MovieItem {...item} /></Link>)) : 'load'
        }
    </div>
);

MovieListComponent.propTypes = {
    films: PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        genre: PropTypes.string,
        year: PropTypes.string,
        id: PropTypes.number,
    }),
};

MovieListComponent.defaultProps = {
    films: {},
};

export default MovieListComponent;