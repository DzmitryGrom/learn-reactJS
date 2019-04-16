import axios from 'axios';
import { API_HOST, API_FILMS } from '../../config';

export const getFilms = async () => {
    const data = await axios(API_HOST + API_FILMS);
    return data;
}

export const getFilmsWithParams = async (filter, val) => {
    let urlOne = filter.sortBy ? `sortBy=${filter.sortBy}&sortOrder=desc` : null,
        urlTwo = filter.searchBy && val !== '' ? `search=${val}&searchBy=${filter.searchBy}` : null,
        url;
    if (urlOne) {
        url = urlOne;
    }
    if (urlTwo) {
        url = urlTwo;
    }
    if (urlOne && urlTwo) {
        url = urlOne + '&' + urlTwo;
    }
    const data = await axios(API_HOST + API_FILMS + '?' + url);
    return data;
}