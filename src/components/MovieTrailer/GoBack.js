import React from 'react';
import { Link } from 'react-router-dom';
import { HOME_PAGE } from './../../constants/routes';

const GoBack = () => {
    return (
        <Link to={HOME_PAGE}>Go Back</Link>
    );
}
    
export default GoBack;