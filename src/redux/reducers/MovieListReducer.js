import * as types from '../actions/types';

const INITIAL_STATE = {
  isFetching: false,
  error: '',
  activePage: 0,
  popularMovies: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_POPULAR_MOVIES:
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    case types.GET_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        popularMovies: action.payload?.results || [],
        activePage: action.payload?.page,
        error: '',
      };

    case types.GET_POPULAR_MOVIES_FAILED:
      return {
        ...state,
        error: 'Failed to fetching popular movies. Try again later!',
        isFetching: false,
      };

    case types.GET_POPULAR_MOVIES_MORE:
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    case types.GET_POPULAR_MOVIES_MORE_FAILED:
      return {
        ...state,
        isFetching: false,
        error: 'Failed to fetching more popular movies. Try again later!',
      };
    case types.GET_POPULAR_MOVIES_MORE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        popularMovies: [...state.popularMovies, ...(action.payload?.results || [])],
        activePage: action.payload?.page,
        error: '',
      };
    default:
      return state;
  }
};
