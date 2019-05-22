import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { filmsSelector } from '../../core/store/selectors';
import MovieList from './component';

type Props = {
  history: Object,
  films: Array<any>,
};

class MovieListContainer extends PureComponent<Props> {
    handleClick = (id) => {
      const { history } = this.props;
      history.push({
        pathname: `/film/${id}`,
      });
    };

    render() {
      const { films } = this.props;

      return (
        <MovieList films={films} onMovieClick={this.handleClick} />
      );
    }
}

const mapStateToProps = state => ({
  films: filmsSelector(state),
});

export default withRouter(connect(mapStateToProps)(MovieListContainer));
