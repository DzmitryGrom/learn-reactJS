import { combineReducers } from 'redux';
import {default as films} from '../../features/movie-search/reducer';
import {default as filter} from '../../features/search-filter/reducer';
export default combineReducers({ films, filter })