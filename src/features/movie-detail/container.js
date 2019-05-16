import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as Action from '../common/actions';
import MovieDetailComponent from './component';
import { getSelectedFilm } from '../../core/store/selectors';

class MovieDetailContainer extends Component {
    static propTypes = {
      history: PropTypes.objectOf(PropTypes.any).isRequired,
      match: PropTypes.objectOf(PropTypes.any).isRequired,
      film: PropTypes.shape({}),
      setMovieId: PropTypes.func.isRequired,
      filmId: PropTypes.string.isRequired,
    };

    static defaultProps = {
      film: null,
    };

    componentWillMount() {
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
      const { setMovieId, filmId } = this.props;
      setMovieId(filmId);
    }

    render() {
      const { film } = this.props;
      return (
        <MovieDetailComponent onButtonClick={this.handleButtonClick} selectFilm={film} />
      );
    }
}

const mapStateToProps = (state, props) => ({
  filmId: props.match.params.id,
  film: getSelectedFilm(state),
});

const mapDispathToProps = dispatch => ({
  ...bindActionCreators(Action, dispatch),
});

export default connect(mapStateToProps, mapDispathToProps)(withRouter(MovieDetailContainer));
