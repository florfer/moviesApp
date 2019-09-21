import {
    SET_NOW_PLAYING_MOVIES, 
    SET_POPULAR_MOVIES, 
    SET_TOP_RATED_MOVIES, 
    SET_UPCOMING_MOVIES 
} from './../actions/movies';

 const moviesReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_NOW_PLAYING_MOVIES:
            return { ...state, moviesNowPlaying: action.moviesNowPlaying}; 
        case SET_POPULAR_MOVIES:
            return { ...state, moviesPopular: action.moviesPopular};
        case SET_TOP_RATED_MOVIES:
            return { ...state, moviesTopRated: action.moviesTopRated};
        case SET_UPCOMING_MOVIES:
            return { ...state, moviesUpcoming: action.moviesUpcoming};
        default:
            return state;
    }
  };

  export default moviesReducer;