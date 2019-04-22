import * as type from '../../../core/store/constants';

const initialState = {
  sortBy: '',
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case type.SORT_MOVIES_BY_RELEASE:
      return {
        ...state, sortBy: action.payload
      }
    case type.SORT_MOVIES_BY_RATING:
      return {
        ...state, sortBy: action.payload
      }
    default:
      return state
  }
}