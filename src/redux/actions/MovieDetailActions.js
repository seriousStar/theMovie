import {MovieAPIs} from '../../services';
import * as types from './types';

export const getMovieDetail = movieId => async (dispatch, getState) => {
  dispatch({type: types.GET_MOVIE_DETAIL});
  const res = await MovieAPIs.getMovieDetail(movieId);
  if (res.error) {
    dispatch({type: types.GET_MOVIE_DETAIL_FAILED});
  } else {
    dispatch({type: types.GET_MOVIE_DETAIL_SUCCESS, payload: res});
  }
};
