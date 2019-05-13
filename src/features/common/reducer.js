import { SET_MOVIES, SET_MOVIE } from '../../core/store/constants';

const initialState = {
  films: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        films: action.payload,
      }

    case SET_MOVIE:
      return {
        ...state,
        film: action.payload,
      }
    
    default:
      return state
  }
}