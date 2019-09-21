export const SET_NOW_PLAYING_MOVIES = 'SET_NOW_PLAYING_MOVIES';
export const SET_POPULAR_MOVIES = 'SET_POPULAR_MOVIES';
export const SET_TOP_RATED_MOVIES = 'SET_TOP_RATED_MOVIES';
export const SET_UPCOMING_MOVIES = 'SET_UPCOMING_MOVIES';

export const saveNowPlayingMovies = movies => ({ type: SET_NOW_PLAYING_MOVIES, moviesNowPlaying: movies });
export const savePopularMovies = movies => ({ type: SET_POPULAR_MOVIES, moviesPopular: movies });
export const saveTopRatedMovies = movies => ({ type: SET_TOP_RATED_MOVIES, moviesTopRated: movies });
export const saveUpcomingMovies = movies => ({ type: SET_UPCOMING_MOVIES, moviesUpcoming: movies });