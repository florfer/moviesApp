import React from 'react';
import PropTypes from 'prop-types';
import { IMAGE_BASE_URL } from './../../constants/api_url';
import './styles.css';

const MoviePicture = ({ image, name }) => {
    const imageUrl = `${IMAGE_BASE_URL}${image}`;
    return(
    <div className="moviePictureCont"> 
        <img src ={imageUrl} alt={`"${name}"`}/>
    </div>
);
}
MoviePicture.propTypes = {
    image: PropTypes.string.isRequired,
};

export default MoviePicture;