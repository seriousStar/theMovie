import * as types from '../actions/types';

const INITIAL_STATE = {
  isFetching: false,
  error: '',
  detail: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_MOVIE_DETAIL:
      return {
        ...state,
        isFetching: true,
        error: '',
        detail: {},
      };
    case types.GET_MOVIE_DETAIL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        detail: action.payload,
      };
    case types.GET_MOVIE_DETAIL_FAILED:
      return {
        ...state,
        isFetching: false,
        error: 'Failed to get the details of movie. Try again later!'
      };
    default:
      return state;
  }
};
