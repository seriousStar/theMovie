import {apiModel} from './ApiModel';
import AppConfig from '../config';

const {API_KEY} = AppConfig;

export const getMovieConfiguration = async () => {
  return apiModel(`configuration?api_key=${API_KEY}`, 'GET');
};

export const getGenreConfiguration = async () => {
  return apiModel(`genre/movie/list?api_key=${API_KEY}&language=en-US`, 'GET');
};
