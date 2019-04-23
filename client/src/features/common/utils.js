import axios from 'axios';
import { API_HOST, API_FILMS } from '../../config';

axios.defaults.baseURL = API_HOST + API_FILMS;

export const parceUrlQueryString = (appUrl) => {
  const obj = new URLSearchParams(appUrl);
  const params = {};
  params.sortBy = obj.get('sortBy');
  params.sortOrder = obj.get('sortOrder');
  params.search = obj.get('search');
  params.searchBy = obj.get('searchBy');
  return params;
};

export const searchFilms = async (appUrl) => {
  const params = parceUrlQueryString(appUrl);
  const data = await axios({ params });
  return data;
};

export const getFilmWithId = async (id) => {
  const film = await axios('/' + id);
  let films = [];
  if (film.data.genres && film.data.genres.length){
    films = await axios(`?search=${film.data.genres[0]}&searchBy=genres`);
  };
  return { film, films };
};
