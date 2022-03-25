import * as types from '../actions/types';

const INITIAL_STATE = {
  isFetching: false,
  error: '',
  genres: [],
  images: {},
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_CONFIGURATION:
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    case types.GET_CONFIGURATION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        genres: action.payload?.genreConfiguration?.genres || [],
        images: action.payload?.movieConfiguration?.images,
        error: '',
      };

    case types.GET_CONFIGURATION_FAILED:
      return {
        ...state,
        error: 'Failed to fetching movie configuration. Try again later!',
        isFetching: false,
        genres: [],
        images: {},
      };
    default:
      return state;
  }
};
