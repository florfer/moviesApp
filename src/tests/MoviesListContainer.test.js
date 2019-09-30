import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './../store';
import MoviesListContainer from './../containers/MoviesListContainer';
import moviesReducer from './../reducers/movies';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><MoviesListContainer /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

const moviesNowPlaying = ['test1', 'test2', 'test3'];
it('should set movies in NowPlaying', () => {
    const initialMoviesState = {
            moviesNowPlaying: [],
            moviesPopular: [],
            moviesTopRated: [],
            moviesUpcoming: [],
    }; 
    const newState = moviesReducer(initialMoviesState, {
      type: "SET_NOW_PLAYING_MOVIES",
      moviesNowPlaying: moviesNowPlaying,
    });
    expect(newState).toEqual({ 
        moviesNowPlaying: moviesNowPlaying,
        moviesPopular: [],
        moviesTopRated: [],
        moviesUpcoming: [],
        });
});

const moviesPopular = ['test1', 'test2', 'test3'];
it('should set movies in Popular', () => {
    const initialMoviesState = {
            moviesNowPlaying: [],
            moviesPopular: [],
            moviesTopRated: [],
            moviesUpcoming: [],
    }; 
    const newState = moviesReducer(initialMoviesState, {
      type: "SET_POPULAR_MOVIES",
      moviesPopular,
    });
    expect(newState).toEqual({ 
        moviesNowPlaying: [],
        moviesPopular: moviesPopular,
        moviesTopRated: [],
        moviesUpcoming: [],
        });
});

const moviesTopRated = ['test1', 'test2', 'test3'];
it('should set movies in TopRated', () => {
    const initialMoviesState = {
            moviesNowPlaying: [],
            moviesPopular: [],
            moviesTopRated: [],
            moviesUpcoming: [],
    }; 
    const newState = moviesReducer(initialMoviesState, {
      type: "SET_TOP_RATED_MOVIES",
      moviesTopRated,
    });
    expect(newState).toEqual({ 
        moviesNowPlaying: [],
        moviesPopular: [],
        moviesTopRated: moviesTopRated,
        moviesUpcoming: [],
        });
});

const moviesUpcoming = ['test1', 'test2', 'test3'];
it('should set movies in Upcoming', () => {
    const initialMoviesState = {
            moviesNowPlaying: [],
            moviesPopular: [],
            moviesTopRated: [],
            moviesUpcoming: [],
    }; 
    const newState = moviesReducer(initialMoviesState, {
      type: "SET_UPCOMING_MOVIES",
      moviesUpcoming,
    });
    expect(newState).toEqual({ 
        moviesNowPlaying: [],
        moviesPopular: [],
        moviesTopRated: [],
        moviesUpcoming: moviesUpcoming,
        });
});