import * as type from '../../core/store/constants';

const initialState = {
    searchBy: '',
    sortBy: '',
    text: ''
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case type.SEARCH_MOVIES_BY_TITLE:
            return {
                ...state,
                searchBy: action.payload
            }
        case type.SEARCH_MOVIES_BY_GENRE:
            return {
                ...state, 
                searchBy: action.payload
            }
        case type.SORT_MOVIES_BY_RELEASE:
            return {
                ...state, 
                sortBy: action.payload
            }
        case type.SORT_MOVIES_BY_RATING:
            return {
                ...state, 
                sortBy: action.payload
            }
        case type.SEARCH_TEXT:
            return {
                ...state, 
                text: action.payload
            }
        default:
            return state
    }
}