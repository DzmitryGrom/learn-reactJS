import * as type from '../../core/store/constants';

export const searchByTitle = () => ({
    type: type.SEARCH_MOVIES_BY_TITLE,
    payload: type.SEARCH_BY_TITLE
})
export const searchByGenre = () => ({
    type: type.SEARCH_MOVIES_BY_GENRE,
    payload: type.SEARCH_BY_GENRE
})
export const sortByRelease = () => ({
    type: type.SORT_MOVIES_BY_RELEASE,
    payload: type.SORT_BY_RELEASE
})
export const sortByRating = () => ({
    type: type.SORT_MOVIES_BY_RATING,
    payload: type.SORT_BY_RATING
})
export const setSearchText = text => ({
    type: type.SEARCH_TEXT,
    payload: text
})