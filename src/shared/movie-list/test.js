import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import List from './index';

const mockStore = configureStore();
const mockStoreInitialized = mockStore({ films: [] });
const mockStoreWithDates = mockStore({
  films: [
    {
      id: 222,
      title: 'string',
      tagline: 'string',
      vote_average: 0,
      vote_count: 0,
      release_date: 'string',
      poster_path: 'string',
      overview: 'string',
      budget: 0,
      revenue: 0,
      runtime: 0,
      genres: [
        'string',
      ],
    },
  ],
});

describe('tests list ', () => {
  it('render  component with mockStoreInitialized', () => {
    const wrapper = mount(<Provider store={mockStoreInitialized}><List /></Provider>);
    const component = wrapper.find(List);
    expect(component).toMatchSnapshot();
    expect(component.find('.movieList')).toBeTruthy();
    expect(component.find('.movieItem')).toHaveLength(0);
  });
  it('render  component with mockStoreWithDates', () => {
    const wrapper = mount(<Provider store={mockStoreWithDates}><List /></Provider>);
    const component = wrapper.find(List);
    expect(component).toMatchSnapshot();
    expect(component.find('.movieList')).toBeTruthy();
    expect(component.find('.movieItem')).toHaveLength(1);
  });
});
