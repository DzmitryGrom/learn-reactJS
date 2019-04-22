import axios from 'axios';
import { API_HOST, API_FILMS } from '../../config';

export const getFilmsWithQuery = async (url) => {
  const data = await axios(API_HOST + API_FILMS + '?' + url);
  return data;
};


export const getFilmWithId = async (id) => {
  const film = await axios(API_HOST + API_FILMS + '/' + id),
    films = await axios(API_HOST + API_FILMS + `?search=${film.data.genres[0]}&searchBy=genres`);
  return { film, films };
};