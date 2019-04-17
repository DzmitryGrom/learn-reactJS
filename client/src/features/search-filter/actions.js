import * as type from '../../core/store/constants';

export const setSearch = text => ({
    type: type.SEARCH_MOVIES,
    payload: text
})
export const setSortByRelease = () => ({
    type: type.SORT_MOVIES_BY_RELEASE,
    payload: type.SORT_BY_RELEASE
})
export const setSortByRating = () => ({
    type: type.SORT_MOVIES_BY_RATING,
    payload: type.SORT_BY_RATING
})
export const setSearchText = text => ({
    type: type.SEARCH_TEXT,
    payload: text
})
