import axios from 'axios';
import { API_HOST, API_FILMS } from '../../config';

// export const getFilmsWithParams = async (filter, val) => {
//   let urlOne = filter.sortBy ? `sortBy=${filter.sortBy}&sortOrder=desc` : null,
//     urlTwo = filter.searchBy ? `search=${val}&searchBy=${filter.searchBy}` : null,
//     url;
//   if (urlOne) {
//     url = urlOne;
//   }
//   if (urlTwo) {
//     url = urlTwo;
//   }
//   if (urlOne && urlTwo) {
//     url = urlOne + '&' + urlTwo;
//   }
//   const data = await axios(API_HOST + API_FILMS + '?' + url);
//   return data;
// }

export const getFilmsWithQuery = async (url) => {
  const data = await axios(API_HOST + API_FILMS + '?search=' + url);
  return data;
}

export const getFilmWithId = async (id) => {
  const film = await axios(API_HOST + API_FILMS + '/' + id),
    films = await axios(API_HOST + API_FILMS + `?search=${film.data.genres[0]}&searchBy=genres`);
  return { film, films };
};