import React from 'react';
import { mount } from 'enzyme';
import List from './index';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore(),
    mockStoreInitialized = mockStore({films: []}),
    mockStoreWithDates = mockStore({ 
        films: [ 
            {
                "id": 222,
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
    });

describe('tests list ', () => {
    it('render  component with mockStoreInitialized', () => {
        const wrapper = mount(<Provider store={mockStoreInitialized}><List/></Provider>),
            component = wrapper.find(List);
        expect(component).toMatchSnapshot();
        expect(component.find('.movieList')).toBeTruthy();
        expect(component.find('.movieItem')).toHaveLength(0);
    });
    it('render  component with mockStoreWithDates', () => {
        const wrapper = mount(<Provider store={mockStoreWithDates}><List/></Provider>),
            component = wrapper.find(List);
        expect(component).toMatchSnapshot();
        expect(component.find('.movieList')).toBeTruthy();
        expect(component.find('.movieItem')).toHaveLength(1);
    });
})