import React from 'react';
import { render } from 'enzyme';
import Elem from './index';


describe('tests items', () => {
  it('render header', () => {
    const component = render(<Elem />);
    expect(component).toMatchSnapshot();
    expect(component.find('#movieValue').text()).toBe('7 movies found');
    expect(component.find('#btnSortBy').text()).toBe('Sort by');
    expect(component.find('#btnRelease').text()).toBe('release date');
    expect(component.find('#btnRating').text()).toBe('rating');
    expect(component.find('.logo')).toBeTruthy();
    expect(component.find('.filter')).toBeTruthy();
  });
})