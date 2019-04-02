import React from 'react';
import { render, mount, shallow } from 'enzyme';
import List from './component';
import Item from '../movie-item';


describe('tests List', () => {
  it('render empty', () => {
    const filmsArr = [],
          component = render(<List films={filmsArr}/>);
    
    expect(component).toMatchSnapshot();
    expect(component.find('.movieList')).toBeTruthy();
    expect(component.find('.movieItem')).toHaveLength(0);
  });
  
  it('render with two components', () => {
    const filmsArr = [
        {
          image: 'https://klike.net/uploads/posts/2018-06/1528452924_1.jpg',
          title: 'Minions',
          genre: 'Comedy',
          year: '2015',
          id: 8080
        },
        {
          image: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Christopher_Robin_poster.png',
          title: 'Christopher Robin',
          genre: 'some',
          year: '2018',
          id: 1000000
        },
    ],
    component = shallow(<List  films={filmsArr}/>);
    expect(component).toMatchSnapshot();
  });
  
  it('render with three components', () => {
    const filmsArr = [
      {
        image: 'https://klike.net/uploads/posts/2018-06/1528452924_1.jpg',
        title: 'Minions',
        genre: 'Comedy',
        year: '2015',
        id: 8080
      },
      {
        image: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Christopher_Robin_poster.png',
        title: 'Christopher Robin',
        genre: 'some',
        year: '2018',
        id: 1000000
      },
      {
        image: 'https://www.pulsar.ua/components/com_jshopping/files/img_products/full_DEC090202_www.pulsar.ua.jpg',
        title: 'Batman',
        genre: 'some',
        year: '2011',
        id: 90323123
      }
    ],
    component = mount(<List  films={filmsArr}/>);
    expect(component.find(Item).length).toBe(3);
  });
})