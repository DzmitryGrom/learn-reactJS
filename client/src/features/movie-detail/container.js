import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
// import * as Action from './actions';
import styles from './component.less';
import Logo from '../../shared/logo';

import MovieFooter from '../../shared/footer';
import MovieList from '../../shared/movie-list';
//import { getValueFilter } from '../../core/store/selectors';

class MovieDetailContainer extends Component {
    // async componentDidMount() {
    //     const { setMovies } = this.props;
    //     const { data } = await getFilms();
    //     setMovies(data.data);
    // }
    //
    // async componentDidUpdate(prevProps) {
    //     const { filter, setMovies } = this.props;
    //     if (filter !== prevProps.filter) {
    //         if (filter.text !== '') {
    //             const { data } = await getFilmsWithParams(filter, filter.text);
    //             setMovies(data.data);
    //         }
    //     }
    // }

    render() {
        return (
            <div className={styles.movieDetail}>
                <div className={styles.movieDetail__header}>
                    <Logo />
                    <div className={styles.movieDetail__target}>
                      <div className={styles.movieDetail__cover} style={{ backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/en/a/a9/Christopher_Robin_poster.png)' }} />
                      <div>
                        <h2 className={styles.movieDetail__title}>Pupl Fiction</h2>
                        <p className={styles.movieDetail__description}>Oscar-winnig Movies</p>
                        <p className={styles.movieDetail__date}>
                          <span>1994</span>
                          <span>154 min</span>
                        </p>
                        <p className={styles.movieDetail__text}>a type specimen book.</p>
                      </div>
                    </div>
                </div>
                <div className={styles.movieDetail__bottomPanel}>
                    <span id="movieValue" className={styles.movieDetail__value}>Some</span>
                </div>
                <MovieList />
                <MovieFooter />
            </div>
        );
    }
}

MovieDetailContainer.propTypes = {
    //setMovies: PropTypes.func.isRequired,
    filter: PropTypes.objectOf(PropTypes.string),
};

MovieDetailContainer.defaultProps = {
    filter: null,
};

// const mapStateToProps = state => ({
//     filter: getValueFilter(state),
// });
//
// const mapDispathToProps = dispatch => ({
//     ...bindActionCreators(Action, dispatch),
// });

export default MovieDetailContainer;
