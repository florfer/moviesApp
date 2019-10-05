import { urlTrailer } from './../services/urlByType';

export const getTrailerById = (id) => {
    return fetch(urlTrailer(id))
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(responseBody => {
           return responseBody.results;
        })
        .catch(error => {
            console.log('Error fetching trailer:' + error.message);
            throw error;
        });
};
