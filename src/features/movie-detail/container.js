// @flow

import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as Action from '../common/actions';
import MovieDetailComponent from './component';
import { getSelectedFilm } from '../../core/store/selectors';

type Props = {
  history: Object,
  match: Object,
  film: Object,
  setMovieId: Function,
  filmId: string,
};

class MovieDetailContainer extends PureComponent<Props> {
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
