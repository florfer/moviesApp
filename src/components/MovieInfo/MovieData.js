import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import transformDate from './../../services/transformDate';
import transformDescription from './../../services/transformDescription';
import { TRAILER_PAGE } from './../../constants/routes'
import './styles.css';

const MovieData = ({ movieId, name, premier, description }) => {
    const date = transformDate(premier);
    const url = `${TRAILER_PAGE}${movieId}`;
    const desc = transformDescription(description);
    return (
        <div className="movieDataCont">
            <h3 className="fontFamily">{`${name}`}</h3>
            <p className="fontFamily">{date}</p>
            <span className="fontFamily">{`${desc}`}</span>
            <Link to={url} className="dataLink fontFamily">Watch trailer</Link>
        </div>
    );
}

MovieData.propTypes = {
    movieId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    premier: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,

};

export default MovieData;