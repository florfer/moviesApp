import React from 'react';
import PropTypes from 'prop-types';

const MoviePicture = ({image, name}) => (
    //poner <img> 
    <div>
        <img src ={`"${image}"`} alt={`"${name}"`}/>
    </div>
);

MoviePicture.propTypes = {
    image: PropTypes.string.isRequired,
};

export default MoviePicture;