import {apiModel} from './ApiModel';
import AppConfig from '../config';

const {API_KEY} = AppConfig;

export const getPopularMovies = async pageIndex => {
  return apiModel(`movie/popular?api_key=${API_KEY}&language=en-US&page=${pageIndex}`, 'GET');
};
