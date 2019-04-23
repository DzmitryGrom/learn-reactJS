import { SET_MOVIES } from '../../core/store/constants';

export const setMovies = movies => ({
  type: SET_MOVIES,
  payload: movies
})