import React from 'react';
import { mount } from 'enzyme';
import Item from './index';

const mockDates =  {
    "id": 0,
    "title": "Dilwale Dulhania Le Jayenge",
    "tagline": "string",
    "vote_average": 0,
    "vote_count": 0,
    "release_date": "1995-02-01",
    "poster_path": "https://image.tmdb.org/t/p/w500/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg",
    "overview": "string",
    "genres": ["Comedy", "Drama", "Romance"]
}

describe('tests items', () => {
  it('render with dates', () => {
      const component = mount(<Item  {...mockDates} />);
      expect(component).toMatchSnapshot();
      expect(component.find('.movieItem__title').text()).toBe('Dilwale Dulhania Le Jayenge');
      expect(component.find('.movieItem__genre').text()).toBe("Comedy Drama Romance ");
      expect(component.find('.movieItem__year').text()).toBe('1995');
      expect(component.find('.movieItem__img').prop('style')).toEqual({"backgroundImage": "url(https://image.tmdb.org/t/p/w500/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg)"});
  });

})