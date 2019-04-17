import * as type from '../../core/store/constants';

const initialState = {
    searchBy: 'title',
    sortBy: '',
    text: 'vote_average'
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case type.SEARCH_MOVIES:
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