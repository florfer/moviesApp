import React from 'react';
import MovieData from './MovieData';
import MoviePicture from './MoviePicture';
import PropTypes from 'prop-types';
import './styles.css';

const MovieInfo = ({ movieId, name, premier, description, image }) => (
    <div className="movieInfoCont row">
        <MoviePicture image={image} name={name} className="col-xs-12 col-lg-4"></MoviePicture>
        <MovieData movieId={movieId} name={name} premier={premier} description={description} className="col-xs-12 col-lg-8"></MovieData>
    </div>
);
    
MovieInfo.propTypes = {
    movieId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    premier: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default MovieInfo;