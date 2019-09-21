import { URL_BASE, API_KEY } from '../constants/api_url';

const urlByType = type => {
    return `${URL_BASE}${type}?api_key=${API_KEY}`;
}

export default urlByType; 