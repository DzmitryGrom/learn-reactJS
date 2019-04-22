import { combineReducers } from 'redux';
import {default as films} from '../../features/common/reducer';
import {default as filter} from '../../features/movie-search/search-filter/reducer';
export default combineReducers({ films, filter })