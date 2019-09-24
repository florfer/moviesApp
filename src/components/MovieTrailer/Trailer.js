import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import { YOUTUBE_URL } from './../../constants/movies';
import './styles.css';

const Trailer = ({trailer}) => {
    const trailerUrl = `${YOUTUBE_URL}${trailer}`;
    return(
        <div className='player-wrapper'>
            <ReactPlayer
                className='react-player'
                url={trailerUrl}
                playing = {true}
                width='100%'
                height='100%'
            />
        </div>
    );
}

Trailer.propTypes = {
    trailer: PropTypes.string.isRequired,
};

export default Trailer;