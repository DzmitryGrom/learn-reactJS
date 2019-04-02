import React from 'react';
import { render } from 'enzyme';
import Element from './index';

describe('tests movie-search', () => {
  it('render empty', () => {
    const component = render(<Element />);
    expect(component).toMatchSnapshot();
    expect(component.find('.filter__buttonsLabel').text()).toBe('search by');
    expect(component.find('.btn')).toHaveLength(3);
  });
})