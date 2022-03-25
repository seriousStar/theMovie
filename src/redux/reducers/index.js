import {combineReducers} from 'redux';
import movieListReducer from './MovieListReducer';

export default combineReducers({
  movies: movieListReducer,
});
