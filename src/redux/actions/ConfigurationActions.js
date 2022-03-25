import {ConfigureAPIs} from '../../services';
import * as types from './types';

export const getConfiguration = () => async (dispatch, getState) => {
  dispatch({type: types.GET_CONFIGURATION});
  const movieConfiguration = await ConfigureAPIs.getMovieConfiguration();
  const genreConfiguration = await ConfigureAPIs.getGenreConfiguration();
  if (movieConfiguration.error || genreConfiguration.error) {
    dispatch({type: types.GET_CONFIGURATION_FAILED});
  } else {
    dispatch({type: types.GET_CONFIGURATION_SUCCESS, payload: {movieConfiguration, genreConfiguration}});
  }
};
