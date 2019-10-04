import { createStore } from 'redux';
import reducers from './../reducers';

const initialState = {
    movies:{
        moviesNowPlaying: [],
        moviesPopular: [],
        moviesTopRated: [],
        moviesUpcoming: [],
    }
}; 

export const store = createStore(reducers, initialState);

 