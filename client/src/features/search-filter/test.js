import React from 'react';
import { mount } from 'enzyme';
import Element from './index';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import * as action from './actions';
import reducer from './reducer';
import  * as type from '../../core/store/constants';

const mockStore = configureStore(),
  mockStoreInitialized = mockStore({ 
      films: [ 
          {
              "data": [
                {
                  "id": 0,
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
              "total": 0,
              "offset": 0,
              "limit": 0
            }
      ]
  }); 

describe('tests search-filter', () => {
    it('render  component with empty redux', () => {
        const wrapper = mount(<Provider store={mockStoreInitialized}><Element/></Provider>),
            component = wrapper.find(Element);
        expect(component).toMatchSnapshot();
        expect(component.find('.filter__buttonsLabel').text()).toBe('search by');
        expect(component.find('.btn')).toHaveLength(1);
        expect(component.find('[type="radio"]')).toHaveLength(4);
        expect(wrapper.props().store.getState().filter).toBeFalsy();
    });
    it('test action setSearchByTitle', () => {
            const expectedAction = {
                type: type.SEARCH_MOVIES_BY_TITLE,
                payload: type.SEARCH_BY_TITLE
            },
            badExpectedAction = {
                type: type.SEARCH_MOVIES_BY_TITLE + 'some',
                payload: type.SEARCH_BY_TITLE + 'some'
            };
        expect(action.setSearchByTitle()).toEqual(expectedAction);
        expect(action.setSearchByTitle()).not.toEqual(badExpectedAction);
    });
    it('test action setSearchByGenre', () => {
            const expectedAction = {
                type: type.SEARCH_MOVIES_BY_GENRE,
                payload: type.SEARCH_BY_GENRE
            },
            badExpectedAction = {
                type: type.SEARCH_MOVIES_BY_GENRE + 'some',
                payload: type.SEARCH_BY_TITLE + 'some'
            };
        expect(action.setSearchByGenre()).toEqual(expectedAction);
        expect(action.setSearchByGenre()).not.toEqual(badExpectedAction);
    });
    it('test action setSortByRelease', () => {
            const expectedAction = {
                type: type.SORT_MOVIES_BY_RELEASE,
                payload: type.SORT_BY_RELEASE
            },
            badExpectedAction = {
                type: type.SORT_MOVIES_BY_RELEASE + 'some',
                payload: type.SORT_BY_RELEASE + 'some'
            };
        expect(action.setSortByRelease()).toEqual(expectedAction);
        expect(action.setSortByRelease()).not.toEqual(badExpectedAction);
    });
    it('test action setSortByRating', () => {
        const expectedAction = {
            type: type.SORT_MOVIES_BY_RATING,
            payload: type.SORT_BY_RATING
        },
        badExpectedAction = {
            type: type.SORT_MOVIES_BY_RATING  + 'some',
            payload: type.SORT_BY_RATING + 'some'
        };
        expect(action.setSortByRating()).toEqual(expectedAction);
        expect(action.setSortByRating()).not.toEqual(badExpectedAction);
    });
    it('test action setSearchText', () => {
        const expectedAction = {
            type: type.SEARCH_TEXT,
            payload: 'Some'
        },
        badExpectedAction = {
            type: type.SEARCH_TEXT + 'some',
            payload: 'Some'
        
        };
        expect(action.setSearchText('Some')).toEqual(expectedAction);
        expect(action.setSearchText('Some')).not.toEqual(badExpectedAction);
    });
    it('tests reducers', () => {
        expect(
            reducer([], {
                type: type.SEARCH_MOVIES_BY_TITLE,
                payload: type.SEARCH_BY_TITLE
            })
        ).toEqual({ "searchBy": "title" });

        expect(
            reducer([], {
                type: type.SEARCH_MOVIES_BY_GENRE,
                payload: type.SEARCH_BY_GENRE
            })
        ).toEqual({ "searchBy": "genres" });

        expect(
            reducer([], {
                type: type.SORT_MOVIES_BY_RATING,
                payload: type.SORT_BY_RATING
            })
        ).toEqual({ "sortBy": "vote_average" });

        expect(
            reducer([], {
                type: type.SORT_MOVIES_BY_RELEASE,
                payload: type.SORT_BY_RELEASE
            })
        ).toEqual({ "sortBy": "release_date" });

        expect(
            reducer([], {
                type: type.SEARCH_TEXT,
                payload: 'some'
            })
        ).toEqual({ "text": "some" });
    });
})