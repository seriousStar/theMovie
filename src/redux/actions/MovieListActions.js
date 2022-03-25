import {MovieAPIs} from '../../services';
import * as types from './types';

export const getMostPopularMovies = () => async (dispatch, getState) => {
  dispatch({type: types.GET_POPULAR_MOVIES});
  const res = await MovieAPIs.getPopularMovies(1);
  if (res.error) {
    dispatch({type: types.GET_POPULAR_MOVIES_FAILED});
  } else {
    dispatch({type: types.GET_POPULAR_MOVIES_SUCCESS, payload: res});
  }
};

export const getMostPopularLoadMore = pageIndex => async (dispatch, getState) => {
  dispatch({type: types.GET_POPULAR_MOVIES_MORE});
  const res = await MovieAPIs.getPopularMovies(pageIndex);
  if (res.error) {
    dispatch({type: types.GET_POPULAR_MOVIES_MORE_FAILED});
  } else {
    dispatch({type: types.GET_POPULAR_MOVIES_MORE_SUCCESS, payload: res});
  }
};
