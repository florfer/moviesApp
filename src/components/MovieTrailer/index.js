import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from '../common/Loader';
import Trailer from './Trailer';
import GoBack from './GoBack';
import './styles.css';
import { getTrailerById } from './../../endpoints/trailer';

class MovieTrailer extends Component {
   
    constructor(props){
        super(props);
        this.state = {
            trailer: [],
            error: false,
        };
    }
    
    componentDidMount () {
        getTrailerById(this.props.match.params.id)
        .then(trailer => {
            this.setState({trailer: trailer});
        })
        .catch(error => { 
            console.log(error)
            this.setState ({
                error: true,
            });
        });
    }

    render() {
        const { error, trailer } = this.state;
        if (error) {
            return <p>"An error occurred, please refresh de page"</p>;
        }
        if (!trailer[0]){
            return (
                <Loader/> 
            );
        }
        return (
            <div>
                <GoBack/>
                <Trailer trailer={trailer[0].key}></Trailer>
            </div>
        );
    }
}

MovieTrailer.propTypes = {
    trailer: PropTypes.array,
    id: PropTypes.number,
};

export default MovieTrailer;