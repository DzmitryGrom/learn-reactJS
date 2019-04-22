import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as Action from '../common/actions';
import { getFilmWithId } from '../common/utils';
import styles from './component.less';
import Logo from '../../shared/logo';
import MovieFooter from '../../shared/footer';
import MovieList from '../../shared/movie-list';
import Button from '../../shared/button/index';

class MovieDetailContainer extends Component {
    static propTypes = {
      location: PropTypes.objectOf(PropTypes.shape({})).isRequired,
      history: PropTypes.objectOf(PropTypes.shape({})).isRequired,
    };

    state = {
      selectFilm: null,
    };

    componentDidMount() {
      this.componentChangeItem();
    }

    componentDidUpdate(prevProps) {
      const { location } = this.props;
      if (location.pathname !== prevProps.location.pathname) {
        this.componentChangeItem();
      }
    }

    handleButtonClick = () => {
      const { history } = this.props;
      history.push({
        pathname: '/search',
      });
    };

    async componentChangeItem() {
      const { history, setMovies } = this.props;
      let urlId = history.location.pathname;
      urlId = urlId.replace(/\D+/g, '');
      const { film, films } = await getFilmWithId(urlId);
      setMovies(films.data.data);
      this.setState({ selectFilm: film.data });
    }

    render() {
      const { selectFilm } = this.state;
      return (
        <div className={styles.movieDetail}>
          <div className={styles.movieDetail__header}>
            <Logo />
            <Button selector="btnSearch" text="search" modifier="white" size="big" onButtonClick={this.handleButtonClick} />
            { selectFilm ? (
              <div className={styles.movieDetail__target}>
                <div className={styles.movieDetail__cover} style={{ backgroundImage: `url(${selectFilm.poster_path})` }} />
                <div>
                  <h2 className={styles.movieDetail__title}>{selectFilm.title}</h2>
                  <p className={styles.movieDetail__description}>{selectFilm.tagline}</p>
                  <p className={styles.movieDetail__date}>
                    <span>{selectFilm.release_date.substring(0, 4)}</span>
                    <span>
                      {selectFilm.runtime}
                      {' '}
                      min
                    </span>
                  </p>
                  <p className={styles.movieDetail__text}>{selectFilm.overview}</p>
                </div>
              </div>
            ) : null}
          </div>
          <div className={styles.movieDetail__bottomPanel}>
            <span id="movieValue" className={styles.movieDetail__value}>
                      Films by
              {selectFilm && `\t${selectFilm.genres[0]} `}
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
  setMovies: PropTypes.func.isRequired,
};

const mapDispathToProps = dispatch => ({
  ...bindActionCreators(Action, dispatch),
});

export default withRouter(connect(null, mapDispathToProps)(MovieDetailContainer));
