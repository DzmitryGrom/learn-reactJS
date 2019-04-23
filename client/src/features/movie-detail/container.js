import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as Action from '../common/actions';
import { getFilmWithId } from '../common/utils';
import MovieDetailComponent from './component';

class MovieDetailContainer extends Component {
    static propTypes = {
      history: PropTypes.objectOf(PropTypes.shape({})).isRequired,
      match: PropTypes.objectOf(PropTypes.any).isRequired,
    };

    state = {
      selectFilm: null,
    };

    componentDidMount() {
      this.loadFilm();
    }

    componentDidUpdate(prevProps) {
      const { match } = this.props;
      if (match.params.id !== prevProps.match.params.id) {
        this.loadFilm();
      }
    }

    handleButtonClick = () => {
      const { history } = this.props;
      history.push({
        pathname: '/search',
      });
    };

    async loadFilm() {
      const { setMovies, match } = this.props;
      const { film, films } = await getFilmWithId(match.params.id);
      if (films.length !== 0) {
        setMovies(films.data.data);
        this.setState({ selectFilm: film.data });
      }
    }

    render() {
      const { selectFilm } = this.state;
      return (
        <MovieDetailComponent onButtonClick={this.handleButtonClick} selectFilm={selectFilm} />
      );
    }
}

MovieDetailContainer.propTypes = {
  setMovies: PropTypes.func.isRequired,
};

const mapDispathToProps = dispatch => ({
  ...bindActionCreators(Action, dispatch),
});

export default connect(null, mapDispathToProps)(withRouter(MovieDetailContainer));
