import { createSelector } from 'reselect';

const getVisibleFilms = state => state.app.films;
export const getSelectedFilm = state => state.app.film;
export const getVisibleFilmsLength = state => state.app.filmsLength;

export const filmsSelector = createSelector(
  getVisibleFilms,
  items => items,
);
