import React from 'react';
import { mount } from 'enzyme';
import Header from './index';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

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


describe('tests header', () => {
    it('render  component', () => {
        const wrapper = mount(<Provider store={mockStoreInitialized}><Header/></Provider>),
            component = wrapper.find(Header);
        expect(component).toMatchSnapshot();
        expect(component.find('#movieValue')).toBeTruthy();
        expect(component.find('#movieValue').text()).not.toBe('2 movies found');
        expect(component.find('#movieValue').text()).toBe('1 movies found');
        expect(component.find('.logo')).toBeTruthy();
        expect(component.find('.filter')).toBeTruthy();
     });
})