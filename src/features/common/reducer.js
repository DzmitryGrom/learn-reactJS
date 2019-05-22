// @flow

import { List } from 'immutable';
import { SET_MOVIES, SET_MOVIE } from '../../core/store/constants';

const initialState = {
  films: List(),
};

type State = { films: Array<any> };

type setMoviesFlow = { type: "SET_MOVIES", payload: Object };
type setMovieFlow = { type: "SET_MOVIE", payload: Object };

type Action = setMoviesFlow | setMovieFlow;

export default function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        films: List(action.payload),
      };

    case SET_MOVIE:
      return {
        ...state,
        film: action.payload,
      };

    default:
      return state;
  }
}
