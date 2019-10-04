import { urlByType } from './../services/urlByType';

export const getMoviesByType = (type) => {
    return fetch(urlByType(type))
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(responseBody => {
            return responseBody.results;
        })
        .catch(error => {
            console.log('Error fetching movies:' + error.message);
            throw error;
        });
};
