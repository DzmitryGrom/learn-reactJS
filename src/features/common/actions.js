import { SET_MOVIES, SET_MOVIE, SET_MOVIES_PARAMS, SET_MOVIE_ID } from '../../core/store/constants';

export const setMovies = movies => ({
  type: SET_MOVIES,
  payload: movies
})

export const setMoviesParams = param => ({
  type: SET_MOVIES_PARAMS,
  payload: param,
});

export const setMovie = movie => ({
  type: SET_MOVIE,
  payload: movie,
});

export const setMovieId = id => ({
  type: SET_MOVIE_ID,
  payload: id,
});
