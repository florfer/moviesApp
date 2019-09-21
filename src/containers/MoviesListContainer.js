import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveNowPlayingMovies, savePopularMovies, saveTopRatedMovies, saveUpcomingMovies } from './../actions';
import MoviesList from '../components/MoviesList';
import { NOW_PLAYING, POPULAR, TOP_RATED, UPCOMING } from './../constants/movies';
import { getMoviesByType } from './../endpoints/movies';

class MoviesListContainer extends Component {
    
    componentDidMount () {
        getMoviesByType("now_playing")
        .then(moviesNowPlaying => {
            this.props.setNowPlayingMovies(moviesNowPlaying);
            getMoviesByType("popular")
            .then(moviesPopular => {
                this.props.setPopularMovies(moviesPopular);
                getMoviesByType("top_rated")
                .then(moviesTopRated => {
                    this.props.setTopRatedMovies(moviesTopRated);
                    getMoviesByType("upcoming")
                    .then(moviesUpcoming => {
                        this.props.setUpcomingMovies(moviesUpcoming);
                    })
                })
            })
        })
    }

    render() {
        const {moviesNowPlaying, moviesPopular, moviesTopRated, moviesUpcoming} = this.props; 
        return (
            <div>
                <MoviesList title={ NOW_PLAYING } movies={ moviesNowPlaying }></MoviesList>
                <MoviesList title={ POPULAR } movies={ moviesPopular }></MoviesList>
                <MoviesList title={ TOP_RATED } movies={ moviesTopRated }></MoviesList>
                <MoviesList title={ UPCOMING } movies={ moviesUpcoming }></MoviesList>
            </div>
        );
    }
}

MoviesListContainer.propTypes = {
    moviesNowPlaying: PropTypes.array.isRequired,
    moviesPopular: PropTypes.array.isRequired,
    moviesTopRated: PropTypes.array.isRequired,
    moviesUpcoming: PropTypes.array.isRequired,
    setNowPlayingMovies: PropTypes.func.isRequired,
    setPopularMovies: PropTypes.func.isRequired,
    setTopRatedMovies: PropTypes.func.isRequired,
    setUpcomingMovies: PropTypes.func.isRequired,
};

const mapStateToProps = state =>({
    moviesNowPlaying: state.movies.moviesNowPlaying,
    moviesPopular: state.movies.moviesPopular,
    moviesTopRated: state.movies.moviesTopRated,
    moviesUpcoming: state.movies.moviesUpcoming,
});

const mapDispatchToProps = dispatch => ({
    setNowPlayingMovies: movies => dispatch(saveNowPlayingMovies(movies)),
    setPopularMovies: movies => dispatch(savePopularMovies(movies)),
    setTopRatedMovies: movies => dispatch(saveTopRatedMovies(movies)),
    setUpcomingMovies: movies => dispatch(saveUpcomingMovies(movies)),
  });

export default connect(mapStateToProps, mapDispatchToProps)(MoviesListContainer);