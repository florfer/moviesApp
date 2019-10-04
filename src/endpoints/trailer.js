import { urlTrailer } from './../services/urlByType';

export const getTrailerById = (id) => {
    return fetch(urlTrailer(id))
        .then(response => {
            return response.json();
        })
        .then(responseBody => {
           return responseBody.results;
        })
        .catch(function(error) {
            console.log('Error fetching trailer:' + error.message);
        });
};