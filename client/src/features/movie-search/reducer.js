import { SET_MOVIES } from '../../core/store/constants';

const initialState = [];

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_MOVIES:
            return [...action.payload]

        default:
            return state
    }
}