import React from 'react';
import { mount } from 'enzyme';
import Element from './index';

describe('tests movie-search', () => {
  it('render empty', () => {
    const wrapper = mount(<Element />);
    const input = wrapper.find('input').get(0).props;
    expect(input.value).toBeFalsy();
    expect(input.className).toBe('btn btn_gray');
    expect(input.id).toBeNull();
    expect(input.onClick).toBeNull();
  });
  it('render with dates', () => {
    const wrapper = mount(<Element modifier="pink" text="test" selector="id" onButtonClick={function () {}} />);
    const input = wrapper.find('input').get(0).props;
    expect(input.value).toBe('test');
    expect(input.className).toBe('btn btn_pink');
    expect(input.id).toBe('id');
    expect(input.onClick).toBeTruthy();
  });
});
