import React from 'react';
import PropTypes from 'prop-types';

const MovieData = ({name, premier, description}) => (
    <div>
        <h1>{`${name}`}</h1>
        <span>{`${premier}`}</span><br></br>
        <span>{`${description}`}</span><br></br>
    </div>
);

MovieData.propTypes = {
    name: PropTypes.string.isRequired,
    premier: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,

};

export default MovieData;