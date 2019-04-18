import { combineReducers } from 'redux';
import {default as films} from '../../features/movie-search/reducer';
import {default as filter} from '../../features/movie-search/search-filter/reducer';
export default combineReducers({ films, filter })