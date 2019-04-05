import React from 'react';
import { render } from 'enzyme';
import Item from './index';

const mockDates = {
  image: 'https://bipbap.ru/wp-content/uploads/2017/04/leto_derevo_nebo_peyzazh_dom_derevya_domik_priroda_3000x2000.jpg',
  title: 'Test',
  year: '2018',
  genre: 'comedy',
}

describe('tests items', () => {
  it('render empty', () => {
    const component = render(<Item />);
    
    expect(component).toMatchSnapshot();
    expect(component.find('.movieItem__title').text()).toBeFalsy();
    expect(component.find('.movieItem__genre').text()).toBeFalsy();
    expect(component.find('.movieItem__year').text()).toBeFalsy();
    expect(component.find('.movieItem__img').get(0).attribs.style).toBe("background-image:url(null)");
  });
  
  it('render with dates', () => {
    const component = render(<Item  {...mockDates} />);
    
    expect(component).toMatchSnapshot();
    expect(component.find('.movieItem__title').text()).toBe('Test');
    expect(component.find('.movieItem__genre').text()).toBe('comedy');
    expect(component.find('.movieItem__year').text()).toBe('2018');
    expect(component.find('.movieItem__img').get(0).attribs.style).toBe('background-image:url(https://bipbap.ru/wp-content/uploads/2017/04/leto_derevo_nebo_peyzazh_dom_derevya_domik_priroda_3000x2000.jpg)');
  });
})