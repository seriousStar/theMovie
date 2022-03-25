import {combineReducers} from 'redux';
import movieListReducer from './MovieListReducer';
import configurationReducer from './ConfigurationReducer';
import movieDetailReducer from './MovieDetailReducer';

export default combineReducers({
  movies: movieListReducer,
  configuration: configurationReducer,
  movie: movieDetailReducer,
});
