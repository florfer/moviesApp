import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieTrailer from '../components/MovieTrailer';
import { getTrailerById } from './../endpoints/trailer';


class MovieTrailerContainer extends Component {
   
    constructor(props){
        super(props);
        this.state = {
            trailer: [],
        };
    }
    
    componentDidMount () {
        getTrailerById(this.props.match.params.id)
        .then(trailer => {
            this.setState({trailer: trailer});
        })
    }

    render() {
        return (
            <MovieTrailer trailer={this.state.trailer}></MovieTrailer>
        );
    }
}

MovieTrailerContainer.propTypes = {
    trailer: PropTypes.array,
    id: PropTypes.number,
};

export default MovieTrailerContainer;