// @flow

import {
  SET_MOVIES, SET_MOVIE, SET_MOVIES_PARAMS, SET_MOVIE_ID,
} from '../../core/store/constants';

type setMoviesFlow = { type: 'SET_MOVIES', payload: Object };
type setMoviesParamsFlow = { type: 'SET_MOVIES_PARAMS', payload: string };
type setMovieFlow = { type: 'SET_MOVIE', payload: Object };
type setMovieIdFlow = { type: 'SET_MOVIE_ID', payload: number };


export const setMovies = (movies: Object): setMoviesFlow => ({
  type: SET_MOVIES,
  payload: movies,
});

export const setMoviesParams = (param: string): setMoviesParamsFlow => ({
  type: SET_MOVIES_PARAMS,
  payload: param,
});

export const setMovie = (movie: Object): setMovieFlow => ({
  type: SET_MOVIE,
  payload: movie,
});

export const setMovieId = (id: number): setMovieIdFlow => ({
  type: SET_MOVIE_ID,
  payload: id,
});
