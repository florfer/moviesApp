import React from 'react';
import PropTypes from 'prop-types';
import Trailer from './Trailer';
import GoBack from './GoBack';
import './styles.css';

const MovieTrailer = ({trailer}) =>{ 
    //elemento poner cargando... 
    if (!trailer[0]){
        return (
            <div>hola</div>
        );
    }

    return (
        <div>
            <GoBack></GoBack>
            <Trailer trailer={trailer[0].key}></Trailer>
        </div>
    );
}

MovieTrailer.propTypes = {
  trailer: PropTypes.array.isRequired,
};

export default MovieTrailer;