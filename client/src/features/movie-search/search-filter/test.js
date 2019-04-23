import React from 'react';
import { mount } from 'enzyme';
import Element from './index';
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

})