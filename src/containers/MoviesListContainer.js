import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveNowPlayingMovies, savePopularMovies, saveTopRatedMovies, saveUpcomingMovies } from './../actions';
import MoviesList from '../components/MoviesList';
import { NOW_PLAYING, POPULAR, TOP_RATED, UPCOMING } from './../constants/movies';
import { getMoviesByType } from './../endpoints/movies';

class MoviesListContainer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          error: false,
        };
      }
    
    componentDidMount () {
        const { moviesNowPlaying } = this.props;
        if (moviesNowPlaying && moviesNowPlaying.length === 0) {
            let types = [
                'now_playing',
                'popular',
                'top_rated',
                'upcoming'
            ];
            
            let requests = types.map(type => getMoviesByType(type));
            
            Promise.all(requests)
                .then(responses => {
                    this.props.setNowPlayingMovies(responses[0]);
                    this.props.setPopularMovies(responses[1]);
                    this.props.setTopRatedMovies(responses[2]);
                    this.props.setUpcomingMovies(responses[3]);
                })
                .catch(error => { 
                    console.log(error)
                    this.setState ({
                        error: true,
                    });
                });
        }
    } 

    render() {
        const { error } = this.state;
        if (error) {
            return <p>"An error occurred, please refresh de page"</p>;
        }
        
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