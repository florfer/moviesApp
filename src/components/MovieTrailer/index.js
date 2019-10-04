import React from 'react';
import PropTypes from 'prop-types';
import Loader from './../common/Loader';
import Trailer from './Trailer';
import GoBack from './GoBack';
import './styles.css';

const MovieTrailer = ({trailer}) =>{ 
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

MovieTrailer.propTypes = {
  trailer: PropTypes.array.isRequired,
};

export default MovieTrailer;