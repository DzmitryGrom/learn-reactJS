import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import MovieSearch from './index';
import { SET_MOVIES } from '../../core/store/constants';
import * as action from '../common/actions';
import reducer from '../common/reducer';

const mockStore = configureStore();

describe('tests movieSearch ', () => {
    it('render  component with mockStoreWithDates', () => {
        const initialState = {
            films: []
          };
        const store = mockStore(initialState);
        
        const wrapper = mount(<Provider store={store}><MovieSearch /></Provider>),
            component = wrapper.find(MovieSearch);
        expect(component).toMatchSnapshot();
        expect(component.find('.movieList')).toBeTruthy();
        expect(component.find('.movieItem')).toHaveLength(0);
        expect(wrapper.props().store.getState().films).toHaveLength(0);
    });
    it('render  component with mockStoreWithDates', () => {
        const initialState = {
            films: [
                {
                    "id": 1,
                    "title": "string",
                    "tagline": "string",
                    "vote_average": 0,
                    "vote_count": 0,
                    "release_date": "string",
                    "poster_path": "string",
                    "overview": "string",
                    "budget": 0,
                    "revenue": 0,
                    "runtime": 0,
                    "genres": [
                      "string"
                    ]
                },
                {
                    "id": 2,
                    "title": "string",
                    "tagline": "string",
                    "vote_average": 0,
                    "vote_count": 0,
                    "release_date": "string",
                    "poster_path": "string",
                    "overview": "string",
                    "budget": 0,
                    "revenue": 0,
                    "runtime": 0,
                    "genres": [
                      "string"
                    ]
                  }
            ]
          };
        const store = mockStore(initialState);
        
        const wrapper = mount(<Provider store={store}><MovieSearch /></Provider>),
            component = wrapper.find(MovieSearch);
        expect(component).toMatchSnapshot();
        expect(component.find('.movieList')).toBeTruthy();
        expect(component.find('.movieItem')).toHaveLength(2);
        expect(wrapper.props().store.getState().films).toHaveLength(2);
    });
    it('test action', () => {
        const movies = [
            {
                "id": 1,
                "title": "string",
                "tagline": "string",
                "vote_average": 0,
                "vote_count": 0,
                "release_date": "string",
                "poster_path": "string",
                "overview": "string",
                "budget": 0,
                "revenue": 0,
                "runtime": 0,
                "genres": [
                    "string"
                ]
            },
            {
                "id": 2,
                "title": "string",
                "tagline": "string",
                "vote_average": 0,
                "vote_count": 0,
                "release_date": "string",
                "poster_path": "string",
                "overview": "string",
                "budget": 0,
                "revenue": 0,
                "runtime": 0,
                "genres": [
                    "string"
                ]
            }
        ],
            expectedAction = {
                type: SET_MOVIES,
                payload: movies
            },
            badExpectedAction = {
                type: SET_MOVIES,
                payload: movies + 1
            };
        expect(action.setMovies(movies)).not.toEqual(badExpectedAction);
    });
    it('test reducer', () => {
        const ExpectedStore = [
            {
                "id": 0,
                "title": "string",
                "tagline": "string",
                "vote_average": 0,
                "release_date": "string",
                "poster_path": "string",
            }
        ]
        expect(reducer(undefined, {})).not.toEqual(ExpectedStore);
        expect(reducer(undefined, {})).not.toEqual([{}]);
        expect(reducer(undefined, {})).toEqual([]);
    });
})