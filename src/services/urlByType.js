import { URL_BASE, API_KEY } from '../constants/api_url';

export const urlByType = type => {
    return `${URL_BASE}${type}?api_key=${API_KEY}`;
}

export const urlTrailer = (id) => {
    return `${URL_BASE}${id}/videos?api_key=${API_KEY}&language=en-US`;
}