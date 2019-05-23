import axios from 'axios';
import { put, all, takeLatest } from 'redux-saga/effects';
import * as act from './actions';
import { SET_MOVIES_PARAMS, SET_MOVIE_ID } from '../../core/store/constants';
import { API_HOST, API_FILMS } from '../../config';

axios.defaults.baseURL = API_HOST + API_FILMS;


export function* searchFilms(action) {
  const response = yield axios({ params: action.payload });
  const films = yield response.data.data;

  yield put(act.setMovies(films));
}

export function* getFilmWithId(action) {
  const response = yield axios(`/${action.payload}`);
  const film = yield response.data;
  if (film.genres && film.genres.length) {
    const films = yield axios(`?search=${film.genres[0]}&searchBy=genres`);
    yield put(act.setMovies(films.data.data));
  }
  yield put(act.setMovie(film));
}
/**/
export function* watchFetchSearchFilms() {
  yield takeLatest(SET_MOVIES_PARAMS, searchFilms);
}

export function* watchFetchSearchFilmWithId() {
  yield takeLatest(SET_MOVIE_ID, getFilmWithId);
}

export function* filmsSaga() {
  yield all([
    watchFetchSearchFilms(),
    watchFetchSearchFilmWithId(),
  ]);
}
