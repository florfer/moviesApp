import React from 'react';
import MovieData from './MovieData';
import MoviePicture from './MoviePicture';
import PropTypes from 'prop-types';

const MovieInfo = ({ name, premier, description, image }) => (
    <div>
        <MoviePicture image={image} name={name}></MoviePicture>
        <MovieData name={name} premier={premier} description={description}></MovieData>
    </div>
);

MovieInfo.propTypes = {
    //tengo que validar bien la info!!!
    name: PropTypes.string.isRequired,
    premier: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default MovieInfo;