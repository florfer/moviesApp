import { urlTrailer } from './../services/urlByType';

export const getTrailerById = (id) => {
    return new Promise((resolve, reject) => {
        fetch(urlTrailer(id))
        .then(response => {
            return response.json();
        })
        .then(responseBody => {
            resolve(responseBody.results);
        })
        .catch(function(error) {
            console.log('Error fetching trailer:' + error.message);
            reject(error)
        });
    })
};