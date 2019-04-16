import React from 'react';
import { mount } from 'enzyme';
import Item from './index';

const mockDates = {
  "id": 19404,
  "title": "Dilwale Dulhania Le Jayenge",
  "tagline": "Come... Fall in Love",
  "vote_average": 9.2,
  "vote_count": 1297,
  "release_date": "1995-10-20",
  "poster_path": "https://image.tmdb.org/t/p/w500/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg",
  "overview": "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
  "genres": [
    "Comedy",
    "Drama",
    "Romance"
  ],
  "runtime": 190
};

describe('tests items', () => {
  it('render empty', () => {
    const component = mount(<Item />);
    expect(component).toMatchSnapshot();
    expect(component.find('.movieItem__title').text()).toBeFalsy();
    expect(component.find('.movieItem__genre').text()).toBeFalsy();
    expect(component.find('.movieItem__year').text()).toBeFalsy();
    expect(component.find('.movieItem__img').prop('style')).toEqual({"backgroundImage": "url(null)"});
  });
  
  it('render with dates', () => {
    const component = mount(<Item  {...mockDates} />);
    expect(component).toMatchSnapshot();
    expect(component.find('.movieItem__title').text()).toBe('Dilwale Dulhania Le Jayenge');
    expect(component.find('.movieItem__genre').text()).toBe("Comedy Drama Romance ");
    expect(component.find('.movieItem__year').text()).toBe('1995');
    expect(component.find('.movieItem__img').prop('style')).toEqual({"backgroundImage": "url(https://image.tmdb.org/t/p/w500/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg)"});
  });
})