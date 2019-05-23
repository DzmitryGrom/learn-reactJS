import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import configureStore from '../src/core/store/store';
import { BrowserRouter as Router } from 'react-router-dom';
import { withKnobs, text, color, number } from '@storybook/addon-knobs';

import Button from '../src/shared/button';
import RadioButton from '../src/shared/radio-button';
import Loader from '../src/shared/loader';
import Footer from '../src/shared/footer';
import Logo from '../src/shared/logo';
import Item from '../src/shared/movie-item';
import Filter from '../src/features/movie-search/search-filter';

const storeEmpty = configureStore();
const storeWithArr = configureStore({'app':{'films': [{'id': 1, 'title': 'some'}, {'id': 2, 'title': 'somes'}]}});
const obj =  {
  "id": 153,
  "title": "Lost in Translation",
  "tagline": "Everyone wants to be found.",
  "vote_average": 7.3,
  "vote_count": 2428,
  "release_date": "2003-08-31",
  "poster_path": "https://image.tmdb.org/t/p/w500/5T8VvuFTdaawKLJk34i69Utaw7o.jpg",
  "overview": "Two lost souls visiting Tokyo -- the young, neglected wife of a photographer and a washed-up movie star shooting a TV commercial -- find an odd solace and pensive freedom to be real in each other's company, away from their lives in America.",
  "budget": 4000000,
  "revenue": 119723856,
  "genres": [
    "Drama"
  ],
  "runtime": 102
};

storiesOf('Loader', module).add('origin', () => <Loader/>);
storiesOf('Footer', module).add('origin', () => <Footer/>);
storiesOf('Item', module).add('origin', () =>
  <div style={{width: '340px'}}>
    <Item
      id={obj.id}
      release_date={obj.release_date}
      title={obj.title}
      poster_path={obj.poster_path}
      genres={obj.genres}
      onMovieClick={action('clicked')}
    />
  </div>);
storiesOf('Filter', module)
  .add('without sorting', () => <Provider  store={storeEmpty} ><Router><Filter /></Router></Provider>)
  .add('with sorting', () => <Provider  store={storeWithArr} ><Router><div style={{position: 'relative'}}><Filter /></div></Router></Provider>);
storiesOf('Logo', module).add('origin', () => <Logo/>);

// Knobs for React props
storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .add('with dynamic value button', () => {
    const texts = text('Text', 'text here');
    const numbers = text('Width', 'Width here');
    const colors = color('Color', 'color here');
    const background = color('Background', 'background here');
    return (
      <Button
        text={texts}
        width={numbers + 'px'}
        color={colors}
        backgroundColor={background}
        onClick={() => {}}
      />
    );
  })
  .add('with dynamic value radio-button with background', () => {
    const textTitle = text('Text radio left', 'left');
    const textGenres = text('Text radio right', 'right');
    return (
      <div>
        <RadioButton
          selector="title"
          name="search"
          val={textTitle}
          onClick={() => {}}
        />
        <RadioButton
          selector="genres"
          name="search"
          val={textGenres}
          onClick={() => {}}
        />
      </div>

    );
  })
  .add('with dynamic value radio-button with', () => {
    const textTitle = text('Text radio left', 'left');
    const textGenres = text('Text radio right', 'right');
    return (
      <div>
        <RadioButton
          selector="vote_average"
          name="sort"
          val={textTitle}
          onClick={() => {}}
        />
        <RadioButton
          selector="release_date"
          name="sort"
          val={textGenres}
          onClick={() => {}}
        />
      </div>
    );
  });



