import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
// import * as Action from './actions';
import styles from './component.less';
import Logo from '../../shared/logo';

import MovieFooter from '../../shared/footer';
import MovieList from '../../shared/movie-list';

import Button from '../../shared/button/index';
import { withRouter } from 'react-router-dom';
import { getVisibleFilms } from '../../core/store/selectors';
class MovieDetailContainer extends Component {

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
    };

    state = {
        film: null,
    }

    async componentDidMount() {
        const { history, films } = this.props;
        let urlId = history.location.pathname;
        urlId = + urlId.replace(/\D+/g, '');
        const selectFilm = await films.filter(x => x.id === urlId);
        this.setState({film: selectFilm[0]})
    }
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

    handleButtonClick = () => {
        const { history } = this.props;
        history.push({
            pathname:  `/search`,
        });
    }

    render() {
        const { film } = this.state;
        console.log(film && film.genres[0]);
        return (
            <div className={styles.movieDetail}>
                <div className={styles.movieDetail__header}>
                    <Logo />
                    <Button selector="btnSearch" text="search" modifier="white" size="big" onButtonClick={this.handleButtonClick} />
                    { film ? (<div className={styles.movieDetail__target}>
                      <div className={styles.movieDetail__cover} style={{ backgroundImage: `url(${film.poster_path})` }} />
                      <div>
                        <h2 className={styles.movieDetail__title}>{film.title}</h2>
                        <p className={styles.movieDetail__description}>{film.tagline}</p>
                        <p className={styles.movieDetail__date}>
                          <span>{film.release_date.substring(0, 4)}</span>
                          <span>{film.runtime} min</span>
                        </p>
                        <p className={styles.movieDetail__text}>{film.overview}</p>
                      </div>
                    </div>) : null}
                </div>
                <div className={styles.movieDetail__bottomPanel}>
                    <span id="movieValue" className={styles.movieDetail__value}>
                        Films by
                        {film && ' ' + film.genres[0] + ' '}
                        genre
                    </span>
                </div>
                <MovieList />
                <MovieFooter />
            </div>
        );
    }
}

MovieDetailContainer.propTypes = {
    films: PropTypes.arrayOf(PropTypes.shape({})).isRequired,

};

const mapStateToProps = state => ({
    films: getVisibleFilms(state),
});

export default withRouter(connect(mapStateToProps)(MovieDetailContainer));
