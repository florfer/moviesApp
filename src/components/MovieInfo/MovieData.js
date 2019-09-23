import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.css';
import transformDate from './../../services/transformDate';
import transformDescription from './../../services/transformDescription';


const MovieData = ({ movieId, name, premier, description }) => {
    const date = transformDate(premier);
    const url = `/trailer/${movieId}`;
    const desc = transformDescription(description);
    return(<div className="movieDataCont">
        <h3>{`${name}`}</h3>
        <p>{date}</p><br></br>
        <span>{`${desc}`}</span><br></br>
        <Link to={url} >Watch trailer</Link>
    </div>
);
}

MovieData.propTypes = {
    name: PropTypes.string.isRequired,
    premier: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,

};

export default MovieData;