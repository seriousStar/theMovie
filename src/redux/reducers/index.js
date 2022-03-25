import {combineReducers} from 'redux';
import movieListReducer from './MovieListReducer';
import configurationReducer from './ConfigurationReducer';

export default combineReducers({
  movies: movieListReducer,
  configuration: configurationReducer,
});
